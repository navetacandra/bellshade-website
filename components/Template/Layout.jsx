import Head from "next/head";
import { useState, useEffect } from "react";
import Navbar from "../Navbar";

function BulbIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 512 512"
      width="2.82rem"
      height="2.8rem"
      className="shadow-lg mx-auto my-auto px-0.5 py-0.5 bulb-theme-toggler"
    >
      <g>
        <g fill="#ffffff">
          <path d="m363.9,54.2c-31.2-29.8-72.3-45.1-115.4-43-77.6,3.6-141.3,64.6-148.1,141.9-3.7,41.3 8.8,81.6 35,113.4 26.4,32.1 48,89 48,126.9 0,0-2.1,13.8 10.4,14.4h124.7c13.6-1 10.4-17 10.4-17 0-37 21.1-92.3 47.1-123.3 23.5-28 36.4-63.6 36.4-100.1-0.1-43.2-17.3-83.4-48.5-113.2zm-116.1,332.7l-24-145.9h64.5l-24,145.9h-16.5zm112.1-132.9c-28.3,33.7-50.6,91.2-51.9,132.8h-22.6l25.5-154.6c0.7-3.2-0.7-11.6-10.3-12.1h-89c-9.2,0.3-11,9-10.3,12.1l25.5,154.6h-22.7c-2.1-42.3-24.5-99.6-52.6-133.7-22.7-27.5-33.5-62.4-30.3-98.3 5.8-66.8 61-119.6 128.2-122.8 37.5-1.8 73,11.5 100,37.3 27.1,25.8 42,60.6 42,98 0.1,31.7-11.1,62.5-31.5,86.7z" />
          <path d="m319.7,433.9h-127.4c-5.8,0-10.4,4.7-10.4,10.4 0,5.8 4.7,10.4 10.4,10.4h9.7c4.1,26.1 26.7,46.2 54,46.2 27.3,0 49.9-20.1 54-46.2h9.7c5.8,0 10.4-4.7 10.4-10.4 5.68434e-14-5.7-4.6-10.4-10.4-10.4zm-63.7,46.2c-15,0-27.7-9.8-32.1-23.3h64.2c-4.4,13.5-17.1,23.3-32.1,23.3z" />
        </g>
      </g>
    </svg>
  );
}

function ThemeSwitcher({ setTheme }) {
  const [dark, setDark] = useState(true);

  function setItem(key, item) {
    // eslint-disable-next-line no-unused-expressions
    typeof window !== "undefined"
      ? localStorage.setItem(key, JSON.stringify(item))
      : null;
  }

  function getItem(key) {
    const item =
      typeof window !== "undefined" ? localStorage.getItem(key) : null;
    return JSON.parse(item);
  }

  useEffect(() => {
    document.querySelector("html").classList.add(getItem("color-theme"));
    setTheme(getItem("color-theme"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function changeTheme() {
    document.querySelector("html").classList.remove(getItem("color-theme"));
    const ColorTheme = !(getItem("color-theme") === "dark") ? "dark" : "light";
    document.querySelector("html").classList.add(ColorTheme);
    setTheme(ColorTheme);
    setItem("color-theme", ColorTheme);
    setDark(ColorTheme === "dark");
  }

  return (
    <div className="fixed bottom-7 right-5 text-dark dark:text-slate-50 opacity-70 dark:opacity-100">
      <button
        className="block lg:w-max lg:h-max xs:w-12 xs:h-12 rounded-lg cursor-pointer shadow-lg bg-slate-600"
        onClick={() => changeTheme()}
        type="button"
      >
        <BulbIcon dark={dark} />
      </button>
    </div>
  );
}

function Layout({ children, pageTitle, pageDescription = "", metaImage = "" }) {
  const [theme, setTheme] = useState();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="msapplication-TileColor"
          content={theme === "dark" ? "#000000" : "#ffffff"}
        />
        <meta
          name="theme-color"
          content={theme === "dark" ? "#000000" : "#ffffff"}
        />
        <title>{pageTitle}</title>
        <meta
          name="description"
          content={
            // eslint-disable-next-line no-unneeded-ternary
            pageDescription
              ? pageDescription
              : "Komunitas untuk mengelola dan menulis kode untuk proyek pendidikan sumber terbuka Indonesia"
          }
        />
        {metaImage ? (
          <>
            <meta property="og:image" content={metaImage} />
            <meta property="facebook:image" content={metaImage} />
            <meta property="twitter:image" content={metaImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="facebook:image:width" content="1200" />
            <meta property="twitter:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="facebook:image:height" content="630" />
            <meta property="twitter:image:height" content="630" />
            {pageTitle ? (
              <>
                <meta property="og:image:alt" content={pageTitle} />
                <meta property="facebook:image:alt" content={pageTitle} />
                <meta property="twitter:image:alt" content={pageTitle} />
              </>
            ) : null}
          </>
        ) : null}
      </Head>
      <Navbar />
      {children}
      <div theme={theme}>
        <ThemeSwitcher setTheme={setTheme} />
      </div>
    </>
  );
}

export default Layout;
