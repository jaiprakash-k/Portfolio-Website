import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import EffectsOverlay from '@/components/effects'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jai Prakash Portfolio',

}

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <EffectsOverlay />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
