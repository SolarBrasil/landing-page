import 'styles/globals.css'

export const metadata = {
    title: 'Solar Brasil',
    description: 'Serviços de energia solar',
}

export default function RootLayout({children,}) {
    return (
        <html lang="pt">
        <head>
            <link rel="preconnect" href="https://rsms.me/"/>
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
        </head>
        <body>{children}</body>
        </html>
    )
}