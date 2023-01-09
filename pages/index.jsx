import {ClipboardCopyIcon, CogIcon} from '@heroicons/react/outline';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import toast, {Toaster} from 'react-hot-toast';
// import styles from '../styles/Home.module.css'

import PageMeta from '../components/PageMeta';
import Activities from '../components/Activities';
import NavBar from '../components/NavBar';
import Spotify from '../components/Spotify';

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

    setInterval(() => {
      getApiData();
    }, 10000);
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
        <PageMeta />
      </Head>
      <div><Toaster /></div>
      <NavBar />
      <main className='flex justify-center'>
        <div className='flex flex-col lg:w-2/5 px-20 mt-12 lg:mt-20 lg:mb-12'>
          {discord && (
            <div key='profile-data' className='flex flex-col gap-12'>
              {/* discord data */}
              <div className='flex justify-center basis-1/2 flex-col p-6 lg:p-12 discord-container rounded-3xl text-center hover:rounded-2xl transition-all duration-300 ease-in-out'>
                <div className='flex flex-col gap-6 items-center'>
                  <img src='https://projects.spin.rip/spin.rip/penguin.png' className='hidden animate-spin w-12' draggable='false' id='peng' />
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
                        {discord?.data?.activities.filter(i => i.name == 'Custom Status')[0]?.state && <p className='select-text'>{discord?.data?.activities.filter(i => i.name == 'Custom Status')[0]?.state}</p>}
                      </div>
                    </div>
                  </div>}
                </div>
              </div>

              {/* spotify data */}
              <div className='flex basis-1/2 flex-col lg:flex-row p-6 gap-6 lg:gap-12 lg:p-12 spotify-container rounded-3xl hover:rounded-2xl transition-all duration-300 ease-in-out'>
                <Spotify toast={toastProps} spotify={discord?.data?.spotify} />
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
