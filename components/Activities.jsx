// import Image from 'next/image';

export default function Activities(props) {
  const {activities} = props;
  return (
    <>
      {activities.filter(i => i.name !== 'Custom Status').filter(i => i.name !== 'Spotify').map((activity) => (
        <div className='flex basis-1/2 flex-col lg:flex-row p-6 gap-6 lg:gap-12 lg:p-12 spotify-container rounded-3xl hover:rounded-2xl transition-all duration-300 ease-in-out' key={activity.application_id}>
          <div className='flex items-center justify-center'>
            <img src={(!activity?.assets) ? 'https://cdn.spin.rip/r/nolargeasset.png' : 'https://' + (!/[0-9]{18,19}/.test(activity?.assets?.large_image) ? activity?.assets?.large_image.match(/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/gmi) : `cdn.discordapp.com/app-assets/${ activity.application_id }/${ activity?.assets?.large_image }.png`)} loading='lazy' width={90} height={90} className='rounded-lg umami--contextmenu--activity-image-context' draggable='false' title={activity?.assets?.large_text ?? 'no large activity asset text available'} alt={activity?.assets?.large_text ?? 'no large activity asset available'} />
          </div>
          <div className='flex justify-center items-center'>
            <div className='grid grid-cols-1 grid-rows-2 gap-6'>
              <div className='flex flex-row gap-2 items-center'>
                <p className='select-text umami--copy--activity-name-copy'>{activity.name}</p>
              </div>
              <div className='flex flex-col'>
                {activity?.details && <p className='text-sm'><em className='select-text umami--copy--activity-details-copy'>{activity.details}</em></p>}
                {activity?.state && <p className='text-sm'><em className='select-text font-semibold umami--copy--activity-state-copy'>{activity.state}</em></p>}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}