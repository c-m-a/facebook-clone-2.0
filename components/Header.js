import Image from 'next/image';
import HeaderIcon from './HeaderIcon';

import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from '@heroicons/react/solid';

import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';

export default function Header() {
  return (
    <div className='flex items-center p-2 lg:px-5 shadow-md sticky top-0 z-10 bg-white'>
      {/* Left */}
      <div className='flex items-center'>
        <Image
          src='https://links.papareact.com/5me'
          width={40}
          height={40}
          layout='fixed'
        />
        <div className='flex items-center ml-2 rounded-full bg-gray-100 p-2'>
          <SearchIcon
            className='h-6'
          />
          <input
            className='flex flex-shrink ml-2 items-center bg-transparent outline-none placeholder-gray-500'
            type='text'
            placeholder='Search Facebook'
          />
        </div>
      </div>

      {/* Middle */}
      <div className='flex justify-center flex-grow'>
        <div className='flex space-x-6 md:space-x-2'>
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* Right */}
    </div>
  )
}
