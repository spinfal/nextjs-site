import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import toast, {Toaster} from 'react-hot-toast';
import {ClipboardCopyIcon, CogIcon} from '@heroicons/react/outline';
// import styles from '../styles/Home.module.css'

import NavBar from '../components/NavBar';
import Activities from '../components/Activities';

export default function Home() {
  const [discord, setDiscord] = useState();

  const getApiData = async () => {
    const response = await fetch('/api/discord').then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        return null;
      }
    });

    // update the state
    setDiscord(response);
  };

  useEffect(() => {
    getApiData();
  }, []);

  const toastProps = {
    icon: '🤍',
    style: {
      borderRadius: '10px',
      background: '#110',
      color: '#fff',
    },
  };

  return (
    <>
      <Head>
        <title>spin (dot) rip</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='title' content='spin (dot) rip' />
        <meta name='description' content='a home for spin and other things' />
        <meta name='keywords' content='spin, spinfal, minecraft, among us, amogus, spin.rip' />
        <meta name='robots' content='index, nofollow' />
        <meta name='language' content='English' />
        <meta name='author' content='Spinfal' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />

        <meta name='og:type' content='website' />
        <meta name='og:url' content='https://spin.rip' />
        <meta name='og:title' content='spin (dot) rip' />
        <meta name='og:description' content='a home for spin and other things' />
        <meta name='og:image' content='https://cdn.spin.rip/r/spinfal-large.png' />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@Spinfal' />
        <meta name='twitter:url' content='https://spin.rip' />
        <meta name='twitter:title' content='spin (dot) rip' />
        <meta name='twitter:description' content='a home for spin and other things' />
        <meta name='twitter:image' content='https://cdn.spin.rip/r/spinfal-large.png' />
      </Head>
      <div><Toaster /></div>
      <NavBar />
      <main className='flex justify-center'>
        <div className='flex flex-col lg:w-2/5 px-20 mt-12 lg:mt-20 lg:mb-12'>
          {discord && (
            <div key='profile-data' className='flex flex-col gap-12'>
              {/* discord data */}
              <div className='flex justify-center basis-1/2 flex-col p-6 lg:p-12 discord-container rounded-3xl text-center hover:rounded-2xl transition-all duration-300 ease-in-out'>
                <div className='flex flex-col gap-6'>
                  <div className='flex justify-center'>
                    <Image src={`https://cdn.discordapp.com/avatars/${ discord.data.discord_user.id }/${ discord.data.discord_user.avatar }.${ discord.data.discord_user.avatar.substring(0, 2) === 'a_' ? 'gif' : 'png' }?size=512`} width={128} height={128} className='rounded-full' draggable='false' title='discord avatar' alt='discord avatar' />
                  </div>
                  <div className='flex justify-center'>
                    <p className='flex flex-row items-center gap-2 tracking-wider cursor-pointer select-text hover:text-blue-400 transition duration-300 ease-in-out' onClick={() => navigator.clipboard.writeText(`${ discord.data.discord_user.username }#${ discord.data.discord_user.discriminator }`).then(() => toast('copied username to clipboard!', toastProps))}>{`${ discord.data.discord_user.username }#${ discord.data.discord_user.discriminator }`} <ClipboardCopyIcon className='flex-none h-4 w-4 cursor-pointer' /></p>
                  </div>
                  {discord?.data?.activities.filter(i => i.name == 'Custom Status')[0] && <div className='flex justify-center'>
                    <div className='italic p-3 bg-black/50 discord-status rounded-md'>
                      <div className='grid w-auto justify-center items-center'>
                        <div>
                          {discord?.data?.activities.filter(i => i.name == 'Custom Status')[0]?.emoji?.name && <Image src={`https://cdn.discordapp.com/emojis/${ discord?.data?.activities.filter(i => i.name == 'Custom Status')[0]?.emoji.id }.${ discord?.data?.activities.filter(i => i.name == 'Custom Status')[0]?.emoji?.animated ? 'gif' : 'png' }?size=96`} width={48} height={48} className='rounded-sm' draggable={false} title={discord?.data?.activities.filter(i => i.name == 'Custom Status')[0]?.emoji?.name} alt={discord?.data?.activities.filter(i => i.name == 'Custom Status')[0]?.emoji?.name} />}
                        </div>
                        {discord?.data?.activities.filter(i => i.name == 'Custom Status')[0]?.state && <p>{discord?.data?.activities.filter(i => i.name == 'Custom Status')[0]?.state}</p>}
                      </div>
                    </div>
                  </div>}
                </div>
              </div>

              {/* spotify data */}
              <div className='flex basis-1/2 flex-col lg:flex-row p-6 gap-6 lg:gap-12 lg:p-12 spotify-container rounded-3xl hover:rounded-2xl transition-all duration-300 ease-in-out'>
                <div className='flex items-center justify-center'>
                  <Image src={discord?.data?.spotify?.album_art_url ?? 'https://cdn.discordapp.com/emojis/995782125062205481.webp?size=96'} width={128} height={128} draggable='false' className='rounded-lg' title={discord?.data?.spotify?.album} alt='spotify album' />
                </div>
                <div className='flex justify-center items-center'>
                  <div className='grid grid-cols-1 grid-rows-2 gap-6'>
                    <div className='flex flex-row gap-2 items-center'>
                      <Link href={`https://open.spotify.com/track/${ discord?.data?.spotify?.track_id ?? '4cOdK2wGLETKBW3PvgPWqT' }`}><a target='_blank' rel='noreferrer' className='italic font-semibold hover:text-green-400 transition duration-300 ease-in-out select-text' title={discord?.data?.spotify?.song}>{(discord?.data?.spotify?.song.length > 35) ? `${ discord?.data?.spotify?.song.substring(0, 35) }...` : discord?.data?.spotify?.song ?? 'spin isn\'t listening to music rn'}</a></Link><ClipboardCopyIcon className='flex-none h-4 w-4 cursor-pointer hover:text-blue-400 transition duration-300 ease-in-out' onClick={() => navigator.clipboard.writeText(`https://open.spotify.com/track/${ discord?.data?.spotify?.track_id ?? '4cOdK2wGLETKBW3PvgPWqT' }`).then(() => toast('copied song link to clipboard!', toastProps))} />
                    </div>
                    {discord?.data?.spotify?.artist && <div className='flex flex-col'>
                      <p className='text-sm'>by: <em className='select-text font-semibold'>{discord?.data?.spotify?.artist}</em></p>
                      <p className='text-sm'>on: <em className='select-text font-semibold'>{discord?.data?.spotify?.album}</em></p>
                    </div>}
                  </div>
                </div>
              </div>

              {/* other data */}
              <Activities activities={discord?.data?.activities} />
            </div>
          ) || (
            <div key='loading' className='flex justify-center'>
              <div className='flex flex-col gap-12'>
                <div className='flex justify-center basis-1/2 flex-col p-6 lg:p-12 discord-container rounded-3xl text-center hover:rounded-2xl transition-all duration-300 ease-in-out'>
                  <div className='flex flex-col items-center gap-1'>
                    <p className='flex flex-row items-center gap-1'><CogIcon className='flex-none h-4 w-4 animate-spin' />loading spin's discord data...</p>
                    <p>taking too long? <Link href={'https://lnk.spin.rip/status'}><a className='italic font-semibold hover:text-pink-400 transition duration-300 ease-in-out select-text'>check the status page</a></Link>.</p>
                  </div>
                </div>
              </div>
            </div>
          )}  
        </div>
      </main>
    </>
  );
}