import Link from 'next/link'

export default function DefaultPage() {
  return <div className="text-center">
    <h1 className="text-gray-800 dark:text-purple-400 text-4xl">Oops! This page ain't ready yet.</h1>
    <Link href="/">
      <a className="dark:text-purple-300 text-lg mt-2 inline-block font-extralight hover:underline">
        Go back home
      </a>
    </Link>
  </div>
}
