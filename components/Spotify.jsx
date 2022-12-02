import {ClipboardCopyIcon} from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import toast from 'react-hot-toast';

export default function Spotify(props) {
  return (
    <>
      <div className='flex items-center justify-center'>
        <Image src={props?.spotify?.album_art_url ?? 'https://cdn.discordapp.com/emojis/995782125062205481.webp?size=96'} width={128} height={128} draggable='false' className='rounded-lg' title={props?.spotify?.album} alt='spotify album' />
      </div>
      <div className='flex justify-center items-center'>
        <div className='grid grid-cols-1 grid-rows-2 gap-6'>
          <div className='flex flex-row gap-2 items-center'>
            <Link href={`https://open.spotify.com/track/${ props?.spotify?.track_id ?? '4cOdK2wGLETKBW3PvgPWqT' }`}><a target='_blank' rel='noreferrer' className='italic font-semibold hover:text-green-400 transition duration-300 ease-in-out select-text' title={props?.spotify?.song}>{(props?.spotify?.song.length > 35) ? `${ props?.spotify?.song.substring(0, 35) }...` : props?.spotify?.song ?? 'spin isn\'t listening to music rn'}</a></Link><ClipboardCopyIcon className='flex-none h-4 w-4 cursor-pointer hover:text-blue-400 transition duration-300 ease-in-out' onClick={() => navigator.clipboard.writeText(`https://open.spotify.com/track/${ props?.spotify?.track_id ?? '4cOdK2wGLETKBW3PvgPWqT' }`).then(() => toast('copied song link to clipboard!', props?.toast))} />
          </div>
          {props?.spotify?.artist && <div className='flex flex-col'>
            <p className='text-sm'>by: <em className='select-text font-semibold'>{props?.spotify?.artist}</em></p>
            <p className='text-sm'>on: <em className='select-text font-semibold'>{props?.spotify?.album}</em></p>
          </div>}
        </div>
      </div>
    </>
  );
}
