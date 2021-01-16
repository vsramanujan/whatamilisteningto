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
      {/* <ul className="flex items-center justify-between p-8">
        <li>
          <Link href="/">
            <a className="text-blue-500 no-underline text-accent-1 dark:text-blue-300">
              Home
            </a>
          </Link>
        </li>
        <ul className="flex items-center justify-between space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href} className="no-underline btn-blue">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </ul> */}
    </nav>
  )
}
