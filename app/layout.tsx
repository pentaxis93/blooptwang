import './globals.css'
import Providers from './providers'

export const metadata = {
  title: 'blooptwang',
  description: 'An experimental chatbot app in Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html data-theme="night" lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
