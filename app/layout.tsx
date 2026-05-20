import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import UpdateNotice from '../components/UpdateNotice'

export const metadata = {
  title: 'Bismark Amanpene - Portfolio',
  description: 'IT Professional & Innovator - Data Analytics, Software Development, Networking, and IT Support',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background-light dark:bg-background-dark font-display">
        <UpdateNotice />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}