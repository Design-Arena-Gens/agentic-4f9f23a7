import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Climate Change: Causes, Consequences & Action',
  description: 'An interactive infographic detailing the primary causes and consequences of climate change based on IPCC reports and peer-reviewed research.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
