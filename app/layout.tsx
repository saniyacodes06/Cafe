import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from "@/lib/context/theme-context"
import { CartProvider } from "@/lib/context/cart-context"
import { AuthProvider } from "@/lib/context/auth-context"
import { Toaster } from "@/components/ui/toast"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import MobileNav from "@/components/layout/MobileNav"

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "FlavorHub | Premium Café & Food Delivery",
  description: "Experience premium café cuisine crafted from the finest ingredients. Order online for delivery or pickup.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <ClerkProvider>
        <ThemeProvider>
          <AuthProvider>
          <CartProvider>
            <Header />
            <main className="flex-1 pb-20 md:pb-0">{children}</main>
            <Footer />
            <MobileNav />
            <Toaster />
          </CartProvider>
          </AuthProvider>
        </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}
