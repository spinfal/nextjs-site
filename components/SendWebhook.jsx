import { useRef } from 'react';
import toast from 'react-hot-toast';

const toastProps = {
    icon: '🤍',
    style: {
        borderRadius: '10px',
        background: '#110',
        color: '#fff',
    },
};

export default function ContactForm() {
    const form = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!e.isTrusted) {
            toast('i don\'t trust you', { ...toastProps, icon: '❌' });
            console.error('Form submission not trusted.');
            return;
        }

        const message = form.current['message'].value;

        const payload = {
            content: message
        };

        try {
            const response = await fetch('/api/webhook', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': process.env['WEBHOOK_KEY']
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                toast('message sent successfully!', toastProps);
            } else {
                toast('failed to send message', { ...toastProps, icon: '❌' });
            }
        } catch (error) {
            console.error('Error sending message:', error);
            toast('error sending message', { ...toastProps, icon: '❌' });
        }
    };

    return (
        <form ref={form} className='flex justify-center basis-1/2 w-60 lg:w-auto' onSubmit={handleSubmit}>
            <fieldset>
                <legend className='text-center text-2xl font-bold mb-5'>Send to Webhook</legend>
                <div className='grid grid-cols-1 gap-4 flex flex-col'>
                    <textarea name='message' placeholder='your message' className='px-3 py-2 rounded-md outline-none bg-black/70' required />
                    <input type='submit' value='Send' className='text-gray-300 bg-black/40 hover:bg-black/70 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer' />
                    <p className='text-sm'>"but spin, you made this easy to spam!" ok idc have fun.</p>
                </div>
            </fieldset>
        </form>
    );
};