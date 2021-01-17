import { NextSeo } from 'next-seo'
import useSWR from 'swr'

const TITLE = "What is Ram listening to?"
const DESCRIPTION = "Snoop on what Ram is listening to on Spotify (instead of working)"

function SEO() {
  return <NextSeo
    title={TITLE}
    description={DESCRIPTION}
    openGraph={{
      title: TITLE,
      description: DESCRIPTION,
    }}
  />
}

export default function IndexPage() {
  const { data } = useSWR('/api/nowPlaying', url => fetch(url).then(res => res.json()))
  const loading = !data

  if (loading) {
    return null
  }

  if (data?.error) {
    return <>
      <SEO />
      <h1 className="text-5xl text-center dark:text-purple-500 tracking-tight font-bold">
        Ah fuck. Something is amiss.
      </h1>
    </>
  }

  return (
    <>
      <SEO />
      <SpotifySong {...(data || {})} />
    </>
  )
}


function SpotifySong({
  isPlaying, title, artists = [], albumImage, songUrl, noSong
}) {
  if (noSong) {
    return (
      <h1 className="text-5xl text-center dark:text-purple-500 tracking-tight font-bold">
        Ram isn't listening to music right now.
      </h1>
    )
  }
  return (
    <section className="flex flex-col justify-between">
      <h2 className="self-center dark:text-gray-300 text-gray-600 dark:font-light text-xl tracking-wide">Now Playing</h2>
      <img alt="album cover" src={albumImage} className='w-72 h-72 rounded-3xl object-fill mt-8 border dark:border-gray-400 sm-spotify-art self-center' />
      <a className="self-center dark:text-purple-400 text-gray-700 font-semibold text-3xl tracking-wide text-center mt-8" href={songUrl} rel="noopener noreferrer" target="_blank">{title}</a>
      <span className="self-center text-center">{artists.map((artist, index) => <><a tabIndex={0} className="dark:text-purple-100 text-gray-600 text-lg tracking-wide mt-2 opacity-50 font-light" href={artist.external_urls.spotify} rel="noopener noreferrer" target="_blank">{artist.name}</a>{shouldHaveComma(artists, index)}</>)}</span>
    </section>
  )
}


function shouldHaveComma(list, index) {
  if (list.length === 1) {
    return null
  }
  if (index === list.length - 1) {
    return null
  }

  return <span className="opacity-50">,{" "}</span>
}
