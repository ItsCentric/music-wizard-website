import Head from "next/head";
import Image from "next/image";
import SiteNav from "../components/SiteNav";
import { authOptions, refreshAccessToken } from "./api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";
import axios from "axios";
import Link from "next/link";
import { GetServerSideProps } from 'next';
import type { Session } from "next-auth"
import SpotifyStatCard from "../components/SpotifyStatCard";
import { decryption } from "../lib/utils";

export const getServerSideProps: GetServerSideProps = async (context) => {
  let SESSION = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  if (new Date().toISOString() > SESSION.expires) SESSION = await refreshAccessToken(decryption(SESSION.refreshToken));

  const SPOTIFYDATA = await fetchSpotifyData(SESSION.accessToken);
    
  if (!SESSION) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  SESSION.error = null;

  if (!SPOTIFYDATA.userInfo) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      SESSION,
      SPOTIFYDATA,
    },
  };
}

export default function Profile(props: { SPOTIFYDATA: any; SESSION: Session; }) {
  const SPOTIFYDATA = props.SPOTIFYDATA;
  const SESSION: Session = props.SESSION;

  return (
    <div>
      <Head>
        <title>Music Wizard | Profile</title>
        <meta name='robots' content='noindex' key='robots' />
        <link rel="icon" href="public\favicon.ico" type="image/icon type"></link>
        <link rel='canonical' href='https://musicwizard.vercel.app/' key='canonical'/>
      </Head>
      <SiteNav></SiteNav>

      <div className='flex flex-col p-0'>
        {/* USER INFORMATION */}
        <div className='flex flex-col text-black bg-zinc-100 py-4 gap-2'>
          <div className='mx-auto p-0 relative w-auto'>
            <img src={SESSION.user.image} className='rounded-full border-4 border-zinc-700'></img>

            {/* TODO: fix this to work with borders */}
            {/* <Image
              src={SESSION.user.image}
              alt='User profile image'
              width="270"
              height="270"
              className='rounded-full border-4 border-black'
            ></Image> */}

          </div>
          <span className='text-center text-3xl font-medium'><Link href={SPOTIFYDATA.userInfo.external_urls.spotify}>{SESSION.user.name}</Link></span>
          <div className='flex justify-center gap-4'>
            <p className="inline-block font-medium text-center w-full h-full">
              <span className="font-bold text-2xl">Country:</span>
              <br/>
              {SPOTIFYDATA.userInfo.country}
            </p>
            <p className="inline-block font-medium text-center w-full h-full">
              <span className="font-bold text-2xl">Followers:</span>
              <br/>
              {SPOTIFYDATA.userInfo.followers.total}
            </p>
            <p className="inline-block font-medium text-center w-full h-full">
              <span className="font-bold text-2xl">Plan:</span>
              <br/>
              {SPOTIFYDATA.userInfo.product == "open" ? "Free" : "Premium"}
            </p>
          </div>
        </div>

        {/* USER STATS */}
        <div className='px-12 flex flex-col gap-8 my-12 max-w-6xl w-full mx-auto'>

          {/* TOP TRACKS */}
          <div>
            <h2 className='inline-block text-3xl mb-3'>Top 3 Tracks</h2>
            <p className="inline-block font-light ml-2 text-white/50">{'(Last 6 months)'}</p>

            <div className='flex flex-col md:flex-row md:justify-evenly gap-4'>
              <SpotifyStatCard type='track' data={SPOTIFYDATA.topTracks.items[0]} />
              <SpotifyStatCard type='track' data={SPOTIFYDATA.topTracks.items[1]} />
              <SpotifyStatCard type='track' data={SPOTIFYDATA.topTracks.items[2]} />
            </div>
          </div>

          {/* TOP ARTISTS */}
          <div>
            <h1 className='inline-block text-3xl mb-3'>Top 3 Artists</h1>
            <p className="inline-block font-light ml-2 text-white/50">{'(Last 6 months)'}</p>

            <div className='flex flex-col md:flex-row md:justify-evenly gap-4'>
              <SpotifyStatCard type='artist' data={SPOTIFYDATA.topArtists.items[0]} />
              <SpotifyStatCard type='artist' data={SPOTIFYDATA.topArtists.items[1]} />
              <SpotifyStatCard type='artist' data={SPOTIFYDATA.topArtists.items[2]} />
            </div>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center mb-4'>
        <p className='m-0 mr-3 font-medium text-2xl'>Powered by</p>
        <Image
          src={require('../public/greenspotifylogo.png')}
          width={200}
          height={60}
        ></Image>
      </div>
    </div>
  );
}

async function fetchSpotifyData(token: any) {
  interface SpotifyData {
    userInfo: object,
    topTracks: object,
    topArtists: object,
  }
  let userInfo: object, topTracks: object, topArtists: object;
  let spotifyData: SpotifyData = { userInfo, topTracks, topArtists };

  await axios
    .get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => (spotifyData.userInfo = res.data))
    .catch((err) => console.log(err));

  await axios.get("https://api.spotify.com/v1/me/top/tracks", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      limit: 3
    }
  })
  .then(res => spotifyData.topTracks = res.data)
  .catch(err => console.log(err))
  
  await axios.get("https://api.spotify.com/v1/me/top/artists", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      limit: 3
    }
  })
  .then(res => spotifyData.topArtists = res.data)
  .catch(err => console.log(err))

  return spotifyData;
}
