import Image from 'next/image';

export default function ReviewList(props) {
    const { reviews } = props;
    return (
        <>
            {
                reviews.reviews.filter(i => i.sender.discordID !== '1134864775000629298').map((review) => (
                    <div className='flex gap-4 p-6 discord-container rounded-3xl text-center hover:rounded-2xl transition-all duration-300 ease-in-out' key={review.sender.discordID}>
                        <div className='flex items-center justify-start place-self-start shrink-0'>
                            <Image src={review?.sender?.profilePhoto} width={60} height={60} draggable='false' className='rounded-xl' title={review?.sender?.username} alt={review?.sender?.discordID} loading='lazy' />
                        </div>
                        <div className='flex flex-col items-start'>  {/* Align to the left */}
                            <div className='flex justify-start flex-row gap-2 items-center'>
                                <p className='italic font-semibold transition duration-300 ease-in-out' title={review?.sender?.username}>{review?.sender?.username}</p>
                                {
                                    review?.sender?.badges?.length > 0 ? (
                                        review.sender.badges.map(badge => (
                                            badge.redirectURL ?
                                                <a href={badge.redirectURL} key={badge.name}>
                                                    <img title={`${badge.name}${badge.description ? `: ${badge.description}` : ''}`} src={badge.icon} width='25' />
                                                </a> :
                                                <img title={`${badge.name}${badge.description ? `: ${badge.description}` : ''}`} src={badge.icon} key={badge.name} width='25' />
                                        ))
                                    ) : null
                                }
                            </div>
                            <div className='select-text text-left'>  {/* Allow the container to grow vertically */}
                                {review?.comment}
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
}
