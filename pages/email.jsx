/*
  This is all optional. If you don't wish to use EmailJS, you can simply make the "email" href a mailto: link or anything else.
*/

import Head from 'next/head';
import Script from 'next/script';
import {Toaster} from 'react-hot-toast';

import EmailContact from '../components/EmailContact';
import NavBar from '../components/NavBar';
import PageMeta from '../components/PageMeta';

export default function Email() {
  return (
    <>
      <Head>
        <title>email - spin (dot) rip</title>
        <PageMeta title={'email - spin (dot) rip'} />
      </Head>
      <Script src='oneko.js' />
      <div><Toaster /></div>
      <NavBar />
      <main className='flex justify-center'>
        <Script src='https://www.google.com/recaptcha/api.js' async defer></Script>
        <div className='flex flex-col lg:w-2/5 px-20 mt-12 lg:mt-20 lg:mb-12'>
          <div key='email-form' className='flex flex-col gap-12'>
            <div className='flex justify-center basis-1/2 flex-col p-6 lg:p-12 discord-container rounded-3xl text-center hover:rounded-2xl transition-all duration-300 ease-in-out'>
              <div className='flex flex-col gap-6'>
                <EmailContact />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
