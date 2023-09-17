import { CogIcon } from '@heroicons/react/outline';
import Head from 'next/head';
import Script from 'next/script';
import React, { useEffect, useState } from 'react';

import NavBar from '../components/NavBar';
import PageMeta from '../components/PageMeta';
import ReviewList from '../components/ReviewCard';

export default function Reviews() {
  const [reviews, setReviews] = useState();

  const getApiData = async () => {
    const response = await fetch('/api/reviews').then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        return null;
      }
    });

    // update the state
    setReviews(response);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <Head>
        <title>reviews - spin (dot) rip</title>
        <PageMeta title={'reviews - spin (dot) rip'} desc={'reviews that other users have left under my profile using reviewdb'} />
      </Head>
      <Script src='oneko.js' />
      <NavBar />
      <main className='flex justify-center mb-2'>
        <Script src='https://www.google.com/recaptcha/api.js' async defer></Script>
        <div className='flex flex-col lg:w-2/5 mx-4 mt-12 lg:mt-20 lg:mb-12 gap-6'>
          {reviews && (
            <ReviewList reviews={reviews} />
          ) || (
              <div key='loading' className='flex justify-center'>
                <div className='flex flex-col gap-12'>
                  <div className='flex justify-center basis-1/2 flex-col p-6 lg:p-12 discord-container rounded-3xl text-center hover:rounded-2xl transition-all duration-300 ease-in-out'>
                    <div className='flex flex-col items-center gap-1'>
                      <p className='flex flex-row items-center gap-1'><CogIcon className='flex-none h-4 w-4 animate-spin' />loading spin's reviews...</p>
                      <p>taking too long? <a href='https://out.spin.rip/status' className='italic font-semibold hover:text-pink-400 transition duration-300 ease-in-out select-text'>check the status page</a>.</p>
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
