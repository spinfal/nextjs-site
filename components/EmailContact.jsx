import emailjs from '@emailjs/browser';
import {useRef} from 'react';
import EmailJS from '../email.config.js';
import toast from 'react-hot-toast';

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
        }, (error) => {
          console.log(error.text);
          toast('something went wrong!', {...toastProps, icon: '❌'});
        });
    } else {
      toast('something went wrong!', {...toastProps, icon: '❌'});
      console.error('Email not sent, form not trusted.');
    }
  };

  return (
    <form ref={form} className='flex justify-center basis-1/2 w-60 lg:w-auto' onSubmit={sendEmail}>
      <fieldset>
        <legend className='text-center text-2xl font-bold mb-5'>contact form</legend>
        <div className='grid grid-cols-1 grid-rows-auto gap-4'>
          <input type='text' name='from_name' placeholder='Your name' className='px-3 py-2 rounded-md outline-none bg-black/70' />
          <input type='email' name='reply_to' placeholder='Your email' className='px-3 py-2 rounded-md outline-none bg-black/70' />
          <textarea name='message' placeholder='Your message' className='px-3 py-2 rounded-md outline-none bg-black/70' />
          <input type='submit' value='send' className='text-gray-300 bg-black/40 hover:bg-black/70 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer' />
        </div>
      </fieldset>
    </form>
  );
};