import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function Layout({children}) {
    return (
      <div>
        <nav className="p-4 fixed top-80 left-0 h-30 w-1/8 bg-[#7c264b] z-[500] shadow-md rounded-r-[5px]">
          <div className="container mx-auto flex flex-col items-start">
            <ul className="flex flex-col space-y-2 text-white">
              <li className="hover:border-b-[1px] transition ease-out duration-300">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:border-b-[1px] transition ease-out duration-300">
                <Link href="/about">About</Link>
              </li>
              <li className="hover:border-b-[1px] transition ease-out duration-300">
                <Link href="/contact">Contact</Link>
              </li>
              <li className="hover:border-b-[1px] transition ease-out duration-300">
                <Link href="/book">Book</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div>{children}</div>
        <footer className="bg-[#392f38] text-white p-4 mt-auto">
          <div className="container mx-auto flex justify-between h-full mt-[20px]">
            <div>
              <ul className="list-none p-0 m-0">
                <li>
                  <Link href="/terms">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div>
              <p>All Rights Reserved 2023 <a href="https://genshin.hoyoverse.com/de/" target="_blank">Genshin Impact</a></p>
            </div>
            <div>
              <ul className="flex space-x-4">
                <li>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="/twitter.png" alt="twitter" className="w-[40px]" />
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="/instagram.png" alt="instagram" className="w-[40px]" />
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/en/" target="_blank" rel="noopener noreferrer">
                    <img src="/tik-tok.png" alt="instagram" className="w-[40px]" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
  )
}