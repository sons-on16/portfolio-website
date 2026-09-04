import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Abdulmohsen Alnowayhi | Cybersecurity & GRC',
  description: 'Cybersecurity and GRC portfolio of Abdulmohsen Alnowayhi — focused on PDPL, privacy by design, risk, compliance, and security operations.',
  keywords: ['Cybersecurity', 'GRC', 'PDPL', 'ISO 27001', 'Risk Management', 'Information Security', 'Riyadh'],
  authors: [{ name: 'Abdulmohsen Alnowayhi' }],
  creator: 'Abdulmohsen Alnowayhi',
  openGraph: {
    title: 'Abdulmohsen Alnowayhi | Cybersecurity & GRC',
    description: 'Turning security requirements into practical controls.',
    type: 'website',
  },
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body>{children}</body>
    </html>
  )
}
