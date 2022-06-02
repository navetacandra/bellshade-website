import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import styles from "@/styles/navbar.module.css";

function Navbar() {
  const [navbarResponsive, setNavbarResponsive] = useState(false);

  return (
    <nav className='bg-white text-dark dark:bg-slate-800 dark:text-white drop-shadow mx-auto transition-all ease-out duration-200'>
      <div className='hidden lg:block max-w-[1920px] mb-5 py-3 px-10'>
        <div className='flex justify-between'>
          <div className='flex items-center space-x-16'>
            <div className='opacity-80 hover:opacity-100 transition-all duration-300 ease-out'>
              <Link href='/'>
                <a className='flex items-center'>
                  <Image
                    src='/icon/ms-icon-310x310.png'
                    alt='Bellshade Logo'
                    width='48px'
                    height='48px'
                  />
                  <span
                    className={`ml-2 text-dark dark:text-white ${styles.brand}`}
                  >
                    Bellshade
                  </span>
                </a>
              </Link>
            </div>
            <div className='space-x-7'>
              <Link href='/learn'>
                <a className='hover:text-main opacity-80 hover:opacity-100'>
                  <Icon
                    icon='ic:round-school'
                    width={24}
                    height={24}
                    className='inline mr-3'
                  />
                  Learning Journey
                </a>
              </Link>
              {/* <Link href="/">
                                <a className="hover:text-main opacity-80 hover:opacity-100">
                                    <Icon
                                        icon="mdi:sword-cross"
                                        width={24}
                                        height={24}
                                        className="inline mr-3"
                                    />
                                    Challenges
                                </a>
                            </Link>
                            <Link href="/">
                                <a className="hover:text-main opacity-80 hover:opacity-100">
                                    <Icon
                                        icon="ic:baseline-leaderboard"
                                        width={24}
                                        height={24}
                                        className="inline mr-3"
                                    />
                                    Leaderboard
                                </a>
                            </Link> */}
              <Link href='/teams'>
                <a className='hover:text-main opacity-80 hover:opacity-100'>
                  <Icon
                    icon='ri:team-fill'
                    width={24}
                    height={24}
                    className='inline mr-3'
                  />
                  Team
                </a>
              </Link>
            </div>
          </div>
          <div className='flex items-center space-x-8'>
            <button
              className='text-white bg-blue-gray hover:bg-github_btn-hv dark:bg-gray-700 dark:hover:bg-slate-600 p-2.5 h-10 rounded-lg flex items-center transition-all duration-150'
              type='button'
              aria-label='github-link'
            >
              <a
                href='https://github.com/bellshade'
                target='_blank'
                rel='noreferrer'
              >
                Github
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className='lg:hidden flex items-center mb-5 py-3 px-10 justify-between'>
        <div className='opacity-80 hover:opacity-100 transition-all duration-300 ease-out'>
          <Link href='/'>
            <a className='flex items-center'>
              <Image
                src='/icon/ms-icon-310x310.png'
                alt='Bellshade Logo'
                width='48px'
                height='48px'
              />
              <span
                className={`ml-2 text-dark dark:text-white ${styles.brand}`}
              >
                Bellshade
              </span>
            </a>
          </Link>
        </div>
        <div>
          <button
            onClick={() => setNavbarResponsive(!navbarResponsive)}
            className='menu-btn'
            type='button'
            aria-label='navbar-toggler'
          >
            <Icon icon='charm:menu-hamburger' width={32} height={32} />
          </button>
        </div>
      </div>
      <div
        className={`mobile-menu drop-shadow lg:hidden ${
          navbarResponsive ? "" : "hidden"
        }`}
      >
        <Link href='/learn'>
          <a className='block py-4 px-6 hover:bg-gray-200 hover:text-main dark:hover:bg-gray-600 opacity-80 hover:opacity-100'>
            <Icon
              icon='ic:round-school'
              width={24}
              height={24}
              className='inline mr-3'
            />
            Learning Journey
          </a>
        </Link>
        {/* <Link href="/">
                    <a className="block py-4 px-6 hover:bg-gray-200 hover:text-main dark:hover:bg-gray-600 opacity-80 hover:opacity-100">
                        <Icon
                            icon="mdi:sword-cross"
                            width={24}
                            height={24}
                            className="inline mr-3"
                        />
                        Challenges
                    </a>
                </Link>
                <Link href="/">
                    <a className="block py-4 px-6 hover:bg-gray-200 hover:text-main dark:hover:bg-gray-600 opacity-80 hover:opacity-100">
                        <Icon
                            icon="ic:baseline-leaderboard"
                            width={24}
                            height={24}
                            className="inline mr-3"
                        />
                        Leaderboard
                    </a>
                </Link> */}
        <Link href='/teams'>
          <a className='block py-4 px-6 hover:bg-gray-200 hover:text-main dark:hover:bg-gray-600 opacity-80 hover:opacity-100'>
            <Icon
              icon='ri:team-fill'
              width={24}
              height={24}
              className='inline mr-3'
            />
            Team
          </a>
        </Link>
        <div className='flex justify-between space-x-8 py-6 px-6'>
          <button
            className='text-white bg-blue-gray hover:bg-github_btn-hv dark:bg-gray-700 dark:hover:bg-slate-600 p-2.5 h-10 rounded-lg flex items-center transition-all duration-150'
            type='button'
            aria-label='github-link'
          >
            <a
              href='https://github.com/bellshade'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
