import { Inter, Roboto_Mono  } from 'next/font/google'
import 'styles/globals.css'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
})

const roboto_mono = Roboto_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto-mono',
})

export const metadata = {
    title: 'Solar Brasil',
    description: 'Serviços de energia solar',
}

export default function RootLayout({children,}) {
    return (
        <html lang="pt" className={`${inter.variable} ${roboto_mono.variable}`}>
        <body>{children}</body>
        </html>
    )
}