import AppHeader from './app-header'
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
    <html lang="en">
      <body>
        <Providers>
          <AppHeader />
          {children}
        </Providers>
      </body>
    </html>
  )
}
