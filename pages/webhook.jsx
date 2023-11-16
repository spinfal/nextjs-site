import Head from 'next/head';
import { Toaster } from 'react-hot-toast';

import SendWebhook from '../components/SendWebhook';
import NavBar from '../components/NavBar';
import PageMeta from '../components/PageMeta';

export default function Webhook() {
  return (
    <>
      <Head>
        <title>webhook - spin (dot) rip</title>
        <PageMeta title={'webhook - spin (dot) rip'} desc={'send any message you want to my webhook'} />
      </Head>
      <div><Toaster /></div>
      <NavBar />
      <main className='flex justify-center'>
        <div className='flex flex-col lg:w-2/5 px-20 mt-12 lg:mt-20 lg:mb-12'>
          <div key='webhook-form' className='flex flex-col gap-12'>
            <div className='flex justify-center basis-1/2 flex-col p-6 lg:p-12 discord-container rounded-3xl text-center hover:rounded-2xl transition-all duration-300 ease-in-out'>
              <div className='flex flex-col gap-6'>
                <SendWebhook />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
