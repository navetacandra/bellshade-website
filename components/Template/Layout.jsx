import Head from "next/head";
import { useState, useEffect } from "react"
import ThemeSwitcher from "./ThemeSwitcher"

function Layout({ children, pageTitle, pageDescription }) {
    const [theme, setTheme] = useState();
    useEffect(() => {
        "bg-white dark:bg-slate-900 relative transition-all ease-out duration-200".split(' ').forEach(className => {
            document.querySelector('body').classList.add(className);
        });
    }, [])
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="57x57" href="/icon/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/icon/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/icon/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/icon/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/icon/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/icon/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/icon/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/icon/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/icon/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/icon/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/icon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/icon/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/icon/favicon-16x16.png" />
                <meta name="msapplication-TileImage" content="/icon/ms-icon-144x144.png" />
                <meta name="msapplication-TileColor" content={typeof window !== 'undefined' ? JSON.parse(window.localStorage.getItem('color-theme')) === 'dark' ? '#000000' : '#ffffff' : '#ffffff'} />
                <meta name="theme-color" content={typeof window !== 'undefined' ? JSON.parse(window.localStorage.getItem('color-theme')) === 'dark' ? '#000000' : '#ffffff' : '#ffffff'} />
                <title>{pageTitle}</title>
                <link rel="manifest" href="/manifest.json" />
                <meta name="description" content={pageDescription ? pageDescription : ''} />
            </Head>
            <div theme={theme}>
                {children}
                <ThemeSwitcher setTheme={setTheme} />
            </div>
        </>
    )
}

export default Layout