import { useTheme } from "next-themes"
import Link from 'next/link'
import { useState } from "react"

const links = [
  { href: 'https://github.com/vercel/next.js', label: 'GitHub' },
  { href: 'https://nextjs.org/docs', label: 'Docs' },
]

export default function Nav() {

  const { theme, setTheme } = useTheme()
  const [checked, setChecked] = useState(theme === 'light')

  return (
    <nav className="flex justify-between items-center w-full p-8 pt-0 mx-auto bg-opacity-60 h-32">
      <div onClick={e => { e.preventDefault(); setTheme(theme === 'light' ? 'dark' : 'light') }}>
        <button
          className="dayNight p-2"
          onClick={() => {
            setChecked(!checked)
          }}
          title={checked ? 'Dark mode' : 'Light mode'}
        >
          <input type="checkbox" defaultChecked={checked} />
          <div />
        </button>
      </div>
      <ul className="flex">
        {/* <li>
          <Link href="/ ">
            <a className=" text-gray-800 dark:text-purple-300 uppercase opacity-80 tracking-wide text-sm border p-2 rounded-lg dark:border-gray-400 shadow-lg border-gray-400 mr-2" >
              Home
            </a>
          </Link>
        </li> */}
        <li>
          <Link href="/top-tracks">
            <a className=" text-gray-800 dark:text-purple-300 uppercase opacity-80 tracking-wide text-sm border p-2 rounded-lg dark:border-gray-400 shadow-lg border-gray-400" >
              Top Tracks
            </a>
          </Link>
        </li>
      </ul>
    </nav >
  )
}
