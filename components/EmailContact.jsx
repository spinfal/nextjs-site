/*
  This is all optional. If you don't wish to use EmailJS, you can simply make the "email" href a mailto: link or anything else.
*/

import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import toast from 'react-hot-toast';
import EmailJS from '../email.config.js';

const toastProps = {
    icon: '🤍',
    style: {
        borderRadius: '10px',
        background: '#110',
        color: '#fff',
    },
};

// from https://www.emailjs.com/docs/examples/reactjs/
export default function EmailContact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if (e.isTrusted) {
            emailjs.sendForm(EmailJS.EMAILJS_SERVICE_ID, EmailJS.EMAILJS_TEMPLATE_ID, form.current, EmailJS.EMAILJS_PUBLIC_KEY)
                .then((result) => {
                    console.log(result.text);
                    toast('email sent!', toastProps);
                    const emailDiv = document.getElementById('email-data');
                    emailDiv.innerHTML = 'thanks for your email! i\'ll get back to you as soon as i can.';
                }, (error) => {
                    console.log(error.text);
                    toast(error.text.includes('g-recaptcha-response') ? 'you must complete the captcha' : 'something went wrong!', { ...toastProps, icon: '❌' });
                });
        } else {
            toast('i don\'t trust you', { ...toastProps, icon: '❌' });
            console.error('Email not sent, form not trusted.');
        }
    };

    return (
        <form ref={form} className='flex justify-center basis-1/2 w-60 lg:w-auto' onSubmit={sendEmail}>
            <fieldset>
                <legend className='text-center text-2xl font-bold mb-5'>contact form</legend>
                <div className='grid grid-cols-1 gap-4 flex flex-col' id='email-data'>
                    <input type='text' name='from_name' placeholder='your name' className='px-3 py-2 rounded-md outline-none bg-black/70' required />
                    <input type='email' name='reply_to' placeholder='your email' className='px-3 py-2 rounded-md outline-none bg-black/70' required />
                    <textarea name='message' placeholder='your message' className='px-3 py-2 rounded-md outline-none bg-black/70' required />
                    <div className='g-recaptcha' data-theme='dark' data-sitekey='6LfkvREiAAAAAMBF6xTtPCKBtebmfRBxUGBafmr1'></div>
                    <input type='submit' value='send' onClick={() => toast('sending email...', { ...toastProps, icon: '📤' })} className='text-gray-300 bg-black/40 hover:bg-black/70 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer' />
                </div>
            </fieldset>
        </form>
    );
};
