import React from 'react'
import Container from '../Container'
import Image from 'next/image'
import { logo } from '@/assets'
import SearchInput from './SearchInput'
import Link from 'next/link'
import { LiaUser } from 'react-icons/lia'
import HeaderIcon from './HeaderIcon'
import MobileNanu from './MobileNanu'

const Header = () => {
  return (
    <div>
      <Container>
        <div className='py-5 flex items-center gap-5 justify-between'>
          {/* logo */}
          <div>
            <Image src={logo} alt='shop logo' className='w-[70px]' />
          </div>
          {/* suchber */}
          <SearchInput></SearchInput>
          {/* profile */}
          <div>
            <Link href={'/signin'} className='flex items-center gap-2 text-sm'>
              <div className='border-2  border-gray-200  p-1.5 rounded-full text-xl'>
                <LiaUser />
              </div>
              <div>
                <p>Hello, Gueste</p>
                <p>Login / Register</p>
              </div>
            </Link>
          </div>

          {/* icon */}
          <div>
            <HeaderIcon />
          </div>
          <MobileNanu />
        </div>
      </Container>
    </div>
  )
}

export default Header
