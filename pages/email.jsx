/*
  This is all optional. If you don't wish to use EmailJS, you can simply make the "email" href a mailto: link or anything else.
*/

import Head from 'next/head';
import Script from 'next/script';
import {Toaster} from 'react-hot-toast';

import EmailContact from '../components/EmailContact';
import NavBar from '../components/NavBar';

export default function Email() {
  return (
    <>
      <Head>
        <title>email - spin (dot) rip</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='title' content='email - spin (dot) rip' />
        <meta name='description' content='a home for spin and other things' />
        <meta name='keywords' content='spin, spinfal, minecraft, among us, amogus, spin.rip' />
        <meta name='robots' content='index, nofollow' />
        <meta name='language' content='English' />
        <meta name='author' content='Spinfal' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />

        <meta name='og:type' content='website' />
        <meta name='og:url' content='https://spin.rip' />
        <meta name='og:title' content='email - spin (dot) rip' />
        <meta name='og:description' content='a home for spin and other things' />
        <meta name='og:image' content='https://cdn.spin.rip/r/spinfal-large.png' />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@Spinfal' />
        <meta name='twitter:url' content='https://spin.rip' />
        <meta name='twitter:title' content='email - spin (dot) rip' />
        <meta name='twitter:description' content='a home for spin and other things' />
        <meta name='twitter:image' content='https://cdn.spin.rip/r/spinfal-large.png' />
      </Head>
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
