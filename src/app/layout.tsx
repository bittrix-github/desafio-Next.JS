import './globals.css'
import { Quicksand } from 'next/font/google'

const quick = Quicksand({ 
  weight: [ '300', '400', '500', '600' ],
  subsets: [ 'latin' ]
})

export const metadata = {
  title: 'ride on',
  description: '',
}

export default function RootLayout(
  { children, }: {
    children: React.ReactNode
  }
)

{
  return (
    <html lang="en" className={ quick.className }>
      <body suppressHydrationWarning={true} >
          { children }
      </body>
    </html>
  )
}