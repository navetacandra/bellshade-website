import Head from "next/head";
import { useState } from "react"
import Navbar from "../Navbar";
import ThemeSwitcher from "./ThemeSwitcher"

function Layout({ children, pageTitle, pageDescription }) {
    const [theme, setTheme] = useState();
    return (
        <>
            <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="msapplication-TileColor" content={theme === 'dark' ? '#000000' : '#ffffff'} />
                <meta name="theme-color" content={theme === 'dark' ? '#000000' : '#ffffff'} />
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription ? pageDescription : 'Komunitas untuk mengelola dan menulis kode untuk proyek pendidikan sumber terbuka Indonesia'} />
            </Head>
            <Navbar />
            {children}
            <div theme={theme}>
                <ThemeSwitcher setTheme={setTheme} />
            </div>
        </>
    )
}

export default Layout