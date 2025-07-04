import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Mainheader from '@/components/header/Mainheader'
import Footer from '@/components/footer/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Bigbager',
  description: 'bager korbo',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Mainheader />
        {children}
        <Footer />
      </body>
    </html>
  )
}
