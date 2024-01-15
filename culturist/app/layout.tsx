import NavBar from "@/components/NavBar"
import './globals.css'
import Footer from "@/components/Footer"

export const metadata = {
  title: 'Univerze',
  description: 'Resource Hub for international students',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
