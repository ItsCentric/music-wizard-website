import format from "date-fns/format";
import Image from "next/image";
import { convertDuration } from "../lib/utils";

export default function SpotifyStatCard(props: { type: 'track' | 'artist', data: any }) {
  const numberFormatter = new Intl.NumberFormat("en-US");

  if (props.type == 'track') {
    let artists = [];
    props.data.artists.forEach(artist => {
      artists.push(' ' + artist.name)
    });

    return (
        <div className='bg-white relative flex flex-col gap-2 p-4 rounded-md w-full h-full'>
          <div className='block'>
            <Image
              src={props.data.album.images[0].url}
              alt={`Album cover for ${props.data.album.name}`}
              width={200}
              height={200}
              layout='responsive'
            ></Image>
          </div>
          <div>
            <p className='text-black font-medium text-2xl'>{props.data.name}</p>
            <p className='text-black/75 font-medium text-lg'>{artists.toString()}</p>
          </div>
          <div className='divide-y-2 border-y-2'>
            <p className='text-black text-lg'><span className='font-medium'>Released:</span> {format(new Date(props.data.album.release_date), 'MM/dd/yyyy')}</p>
            <p className='text-black text-lg'><span className='font-medium'>Duration:</span> {convertDuration(props.data.duration_ms)}</p>
          </div>
        </div>
    )
  }
  else if (props.type == 'artist') {
    let genres = [];
    props.data.genres.forEach(genre => {
      genres.push(' ' + genre)
    });
    return (
        <div className='bg-white relative flex flex-col gap-2 p-4 rounded-md w-full h-full'>
          <div className='block'>
            <Image
              src={props.data.images[0].url}
              alt={`Picture of ${props.data.name}`}
              width={200}
              height={200}
              layout='responsive'
            ></Image>
          </div>
          <div>
            <p className='text-black font-medium text-2xl'>{props.data.name}</p>
            <p className='text-black/75 font-medium text-lg capitalize truncate max-w-[298px]'>{genres.toString()}</p>
          </div>
          <div className='divide-y-2 border-y-2'>
            <p className='text-black text-lg'><span className='font-medium'>Followers:</span> {numberFormatter.format(props.data.followers.total)}</p>
            <p className='text-black text-lg'><span className='font-medium'>Popularity:</span> {props.data.popularity}</p>
          </div>
        </div>
    )
  }

}