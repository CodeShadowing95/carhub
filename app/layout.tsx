import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Footer, Navbar } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Car Showcase | Home',
  description: 'App for booking or rent a car quickly and easily',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <head>
            <title>Carshowcase | Home</title>
            <link rel="icon" href="car-logo.svg" type="image/x-icon" />
        </head>
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
    </body>
    </html>
  )
}
