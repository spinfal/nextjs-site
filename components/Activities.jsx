// import Image from 'next/image';

export default function Activities(props) {
    const { activities } = props;
    return (
        <>
            {
                activities.filter(i => i.name !== 'Custom Status').filter(i => i.name !== 'Spotify').map((activity) => (
                    <div className='flex basis-1/2 flex-col md:flex-col xl:flex-col 2xl:flex-row p-6 gap-4 lg:gap-6 lg:px-8 lg:py-6 xl:px-10 xl:py-8 spotify-container rounded-3xl hover:rounded-2xl transition-all duration-300 ease-in-out' key={activity.application_id}>
                        <div className='flex items-center justify-center shrink-0'>
                            <img src={(!activity?.assets) ? 'https://storage.spin.rip/projects/spin.rip/nolargeasset.png' : 'https://' + (!/[0-9]{18,19}/.test(activity?.assets?.large_image) ? activity?.assets?.large_image.match(/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/gmi) : `cdn.discordapp.com/app-assets/${activity.application_id}/${activity?.assets?.large_image}.png`)} loading='lazy' width={90} height={90} className='rounded-lg shrink-0' draggable='false' title={activity?.assets?.large_text ?? 'no large activity asset text available'} alt={activity?.assets?.large_text ?? 'no large activity asset available'} />
                        </div>
                        <div className='flex justify-center items-center'>
                            <div className='grid grid-cols-1 grid-rows-2 gap-6'>
                                <div className='flex items-center'>
                                    <p className='select-text'>{activity.name}</p>
                                </div>
                                <div className='flex flex-col'>
                                    {activity?.details && <p className='text-sm'><em className='select-text'>{activity.details}</em></p>}
                                    {activity?.state && <p className='text-sm'><em className='select-text font-semibold'>{activity.state}</em></p>}
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
}