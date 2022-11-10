import Head from "next/head";
import Image from "next/image";
import SiteNav from "../components/SiteNav";
import Footer from '../components/Footer';

export default function Home() {
  return (
    //* metadata
    <div className="dark:bg-zinc-800">
      <Head>
        <title>Music Wizard</title>
        <meta name='description' content='A Discord bot that intergrates features from Spotify.' key='desc' />
        <meta property='og:title' content='Music Wizard - Discord Bot'  />
        <meta property='og:description' content='A Discord bot that intergrates features from Spotify and other services. See your top songs and artists, recent songs, your friends top songs and artists, what theyre listening to, and more!' />
        <meta property='og:image' content='public\favicon.ico' />
        <link rel='canonical' href='https://musicwizard.vercel.app/' key='canonical'/>
      </Head>
      <SiteNav/>

      {
      //* HERO SECTION
      }
      <div className='relative h-[30vh] md:h-[55vh] flex justify-center items-center'>
        <div className='relative z-10'>
          <h1 className='text-center text-5xl font-medium'>
            The New Kid in Town.
          </h1>
          <p className='text-center font-light text-white/50'>
            Written and developed by Centric.
          </p>
        </div>
        <Image
          src={require("../public/herobanner.svg")}
          alt=''
          layout="fill"
          objectFit="cover"
          priority
        ></Image>
      </div>

      {
      //* ABOUT SECTION
      }
      <div id="about" className='px-3 mb-12 max-w-6xl mx-auto'>
        <div className='my-12 mx-auto px-4'>
          <h1 className='text-center font-bold text-4xl mb-2'>
            What is <span className='text-primary'>Music Wizard</span>?
          </h1>
          <p className='text-center'>
            Music Wizard is a feature rich Discord bot for... well... Discord.
            You can do a multituide of things, ranging from queuing songs,
            finding information about songs and albums, searching for lyrics,
            and much more! Read more about it below.
          </p>
        </div>
        <div className='flex flex-col px-4 mx-auto'>
          <div className='mt-2 md:flex'>
            <div className='mb-6 md:flex-1'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className='inline-block align-middle bi bi-music-note-beamed'
                viewBox="0 0 16 16"
              >
                <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z" />
                <path fillRule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z" />
                <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z" />
              </svg>
              <h3 className='inline-block ml-2 mb-0 align-middle font-medium text-2xl'>Music</h3>
              <p className='mt-1'>
                Well, whats a music bot without music? So of course, with Music Wizard you can listen to your favorite songs in the highest quality.
              </p>
            </div>
            <div className='mb-6 md:flex-1'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className='inline-block align-middle bi bi-pencil-fill'
                viewBox="0 0 16 16"
              >
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
              </svg>
              <h3 className='inline-block ml-2 mb-0 align-middle font-medium text-2xl'>Lyrics</h3>
              <p className='mt-1'>
                Search up lyrics for the current song you&apos;re listening to using
                Genius!
              </p>
            </div>
            <div className='mb-6 md:flex-1'>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="inline-block bi bi-person-lines-fill" viewBox="0 0 16 16">
                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
              </svg>
              <h3 className='inline-block ml-2 mb-0 align-middle font-medium text-2xl'>User Commands</h3>
              <p className={`mt-1`}>
                If you&apos;re logged in, get Spotify stats about you! You can query your top songs and artists, your recently played songs, and more! It doesnt stop there, you can also check your friends stats if they&apos;re logged in. Invite them to join the fun!
              </p>
            </div>
          </div>
          <div className='mt-2 md:flex'>
            <div className='mb-6 md:flex-1'>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="inline-block bi bi-disc-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-6 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0zM4 8a4 4 0 0 1 4-4 .5.5 0 0 0 0-1 5 5 0 0 0-5 5 .5.5 0 0 0 1 0zm9 0a.5.5 0 1 0-1 0 4 4 0 0 1-4 4 .5.5 0 0 0 0 1 5 5 0 0 0 5-5z"/>
              </svg>
              <h3 className='inline-block ml-2 mb-0 align-middle font-medium text-2xl'>Song Information</h3>
              <p className='mt-1'>
                Get information about your favorite songs, albums, and even playlists: all from Discord.
              </p>
            </div>
            <div className='md:flex-1'>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="inline-block bi bi-hourglass-bottom" viewBox="0 0 16 16">
                <path d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5zm2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702s.18.149.5.149.5-.15.5-.15v-.7c0-.701.478-1.236 1.011-1.492A3.5 3.5 0 0 0 11.5 3V2h-7z"/>
              </svg>
              <h3 className='inline-block ml-2 mb-0 align-middle font-medium text-2xl'>Coming Soon</h3>
              <p className='mt-1'>
                This bot is still actively in development, so its not feature complete. Expect more features to come combined with these awesome features to give you an amazing user experience!
              </p>
            </div>
          </div>
        </div>
      </div>

      {
      //* HELP SECTION
      }
      <div className='mx-auto px-3 max-w-6xl' id='help'>
        <div className='my-5 mx-auto'>
          <h1 className='text-center font-bold text-4xl mb-2'>How do I use it?</h1>
          <p className='text-center font-medium'>Getting started with Music Wizard is easy! All it takes is <span className='text-primary'>four simple steps.</span></p>
          <div className='flex flex-col justify-center mt-8'>
            <div className='flex mb-8 items-center'>
              <p className='text-xl inline-block mr-2 text-center m-0'>1.</p>
              <p className='border-l-2 px-3 inline-block m-0 align-middle'>Click the <span className='text-secondary font-medium'>Log In</span> button in the bar at the top of the page to log in using your Spotify account.</p>
            </div>
            <div className='flex mb-8 items-center'>
              <p className='text-xl inline-block mr-2 text-center m-0'>2.</p>
              <p className='border-l-2 px-3 inline-block m-0 align-middle'>Add the bot to your Discord server by clicking the <span className='text-[#5865F2] font-medium'>Add to Discord</span> button in the same bar at the top. Make sure you have an admin role or are owner of the server.</p>
            </div>
            <div className='flex mb-8 items-center'>
              <p className='text-xl inline-block mr-2 text-center m-0'>3.</p>
              <p className='border-l-2 px-3 inline-block m-0 align-middle'>Once the bot is in your server, use the <span className='bg-[#5865F2]/80 rounded-md font-medium p-1'>/user setemail</span> command to set your email used with your Spotify account.</p>
            </div>
            <div className='flex mb-8 items-center'>
              <p className='text-xl inline-block mr-2 text-center m-0'>4.</p>
              <p className='border-l-2 px-3 inline-block m-0 align-middle'>And you&apos;re done! You may use any of the Spotify intergration commands to your hearts content!</p>
            </div>
          </div>
        </div>
        <div className='p-3 pb-5 rounded mb-5 bg-zinc-700'>
          <h1 className='text-center font-bold text-4xl mb-2'>Any Questions?</h1>
          <p className='font-medium text-center'>Shoot me a message and I&apos;ll be happy to respond.</p>
          <form action="https://formsubmit.co/640770cec818db0d008a2cf188ab23c9" method='POST'>
            <div className='my-4'>
              <label htmlFor='sendername'>Name:</label><br/>
              <input type='text' id='sendername' name='sendername' placeholder='John Doe' className='w-full h-8 bg-white rounded-md px-2 text-black'></input><br/>
            </div>
            <div className='my-4'>
              <label htmlFor='senderemail'>Email:</label><br/>
              <input type='email' id='senderemail' name='senderemail' placeholder='example@domain.com' className='w-full h-8 bg-white rounded-md px-2 text-black'></input><br/>
            </div>
            <div className='my-4'>
              <label htmlFor='sendermessage'>Message:</label><br/>
              <input type='text' id='sendermessage' name='sendermessage' placeholder='You did such an amazing job on the bot! We love you!' className='w-full h-8 bg-white rounded-md px-2 text-black'></input><br/>
            </div>
            <input type='submit' value='Submit' className='bg-secondary rounded-md p-2'></input>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
