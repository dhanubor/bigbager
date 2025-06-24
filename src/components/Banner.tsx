'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import Image from 'next/image'
import { sliderData } from '@/constants'

const Banner = () => {
  return (
    <div className='bg-sky-900 py-8'>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className='w-full h-[400px]'
      >
        {sliderData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className='relative w-full h-full flex items-center justify-center text-white'>
              <Image
                src={item.img}
                alt={item.title}
                layout='fill'
                objectFit='cover'
                className='brightness-50'
              />
              <div className='z-10 text-center px-4 max-w-2xl'>
                <h2 className='text-3xl md:text-4xl font-bold'>{item.title}</h2>
                <p className='text-lg mt-2'>{item.subtitle}</p>
                <p className='mt-4 text-yellow-300'>{item.offer}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Banner
