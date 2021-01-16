import { getNowPlaying } from "../lib/spotify"
import { NextSeo } from 'next-seo'
import SpotifyGreen from "../components/svg/SpotifyGreen"

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

export default function IndexPage({ nowPlaying, nowPlayingError }) {
  console.log("@@@", nowPlaying, nowPlayingError)

  if (!nowPlaying || nowPlayingError) {
    // if (true) {
    return <>
      <SEO />
      <h1 className="text-5xl text-center dark:text-spotify-green tracking-tight font-bold">
        Ah fuck. Something is amiss.
      </h1>
    </>
  }

  const { item } = nowPlaying
  const isPlaying = nowPlaying?.is_playing;
  const title = item?.name;
  const artist = Array.isArray(item?.artists) ? item.artists.map(_artist => _artist.name).join(', ') : 'Spotify';
  const album = item?.album?.name;
  const albumImageUrl = item?.album?.images?.[0]?.url;
  const songUrl = item?.external_urls?.spotify;

  return (
    <>
      <SEO />
      <div className="border dark:border-green-700 border-gray-800 rounded-3xl p-4 flex md:flex-row sm:flex-col">
        <img src={albumImageUrl} className="h-32 w-32 rounded-3xl" />
        <div className="flex flex-col ml-4">
          <h1 className="text-5xl text-gray-700 dark:text-green-500 tracking-tight font-bold ">
            {title}
          </h1>
          <h2 className="text-3xl text-gray-700 dark:text-spotify-green tracking-tight font-bold mt-2 ">
            {artist}
          </h2>
          <h3 className="text-2xl text-gray-700 dark:text-green-100 tracking-tight font-bold mt-2 ">
            {album}
          </h3>
        </div>
        <div className="ml-auto self-center">
          <SpotifyGreen />
        </div>
      </div>
    </>
  )
}


export async function getServerSideProps() {

  try {
    const nowPlaying = await getNowPlaying()
    return {
      props: {
        nowPlaying
      }
    }
  } catch ({ message, stack }) {
    return {
      props: {
        nowPlaying: null,
        nowPlayingError: { message, stack }
      }
    }
  }

}
