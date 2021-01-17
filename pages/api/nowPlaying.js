import { getNowPlaying } from "@/lib/spotify";


export default async function nowPlaying(_req, res) {
  const { data, status } = await getNowPlaying()
  if (status >= 400) {
    return res.status(status).send({
      error: {
        message: `API returned a statusCode ${status}`,
        data: nowPlaying.data
      }
    })
  }

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=30'
  )

  if (status === 204) {
    return res.status(200).send({
      noSong: true
    })
  }

  return res.status(200).send({
    isPlaying: data.is_playing,
    title: data.item.name,
    artists: data.item.artists,
    albumImage: data.item.album.images[0].url,
    songUrl: data.item.external_urls.spotify,
    album: data.item.album.name
  })

}
