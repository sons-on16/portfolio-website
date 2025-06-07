import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Abdulmohsen Alnowayhi Profile',
  description: 'Professional portfolio showcasing expertise in GRC, compliance, and cybersecurity',
  keywords: ['GRC', 'Cybersecurity', 'Compliance', 'Risk Management', 'Information Security'],
  authors: [{ name: 'Abdulmohsen Alnowayhi' }],
  creator: 'Abdulmohsen Alnowayhi',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
