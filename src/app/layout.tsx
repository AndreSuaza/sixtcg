import { Navigation } from '@/components/Navigation/Navigation'
import './globals.scss'
import { Oswald } from 'next/font/google'
import { Footer } from '@/components/Footer/Footer'


const oswald = Oswald({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <header>
          <Navigation/>
        </header>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
