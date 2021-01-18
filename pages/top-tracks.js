import { getTopTracks } from '@/lib/spotify';

export default function TopTracks({ error, topTracks }) {

  if (error) {
    return <h1 className="something-aint-right-message">
      Ah fuck. Couldn't fetch top tracks.
  </h1>
  }

  return (
    <ul className="inline-flex flex-col justify-center p-4 self-center ">
      {topTracks.items.map((track, index) => (
        <li className="flex my-2 pb-2 border-b dark:border-gray-600 last:border-b-0">
          <span className="text-gray-400 mr-2 self-center text-sm opacity-90">{index + 1}.</span>
          <a className="dark:text-purple-400 text-gray-600 text-lg mr-2" href={track.external_urls.spotify} rel="noopener noreferrer" target="_blank">{track.name}</a>
          <span className="text-sm self-center">{track.artists.map((artist, index) => <><a tabIndex={0} className="dark:text-gray-100 text-gray-700 mt-2 opacity-70 font-light" href={artist.external_urls.spotify} rel="noopener noreferrer" target="_blank">{artist.name}</a>{shouldHaveComma(track.artists, index)}</>)}</span>
        </li>
      ))}
    </ul>
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



export async function getServerSideProps() {
  const { data, status } = await getTopTracks()

  if (status !== 200) {
    return {
      props: {
        error: {
          data,
          status
        }
      }
    }
  }


  return {
    props: {
      topTracks: data,
    }
  }
}
