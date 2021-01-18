import axios from 'axios'

const {
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_REFRESH_TOKEN
} = process.env

const ACCESS_TOKEN_REFRESH_URL = 'https://accounts.spotify.com/api/token'
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing'
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`

async function getAccessToken() {
  if (!SPOTIFY_REFRESH_TOKEN || !SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET) {
    await null; // For proper stacktrace
    throw new Error('Could not find refresh token / client ID / client secret in env')
  }
  const authString = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString("base64")
  const params = new URLSearchParams()
  params.append('grant_type', 'refresh_token')
  params.append('refresh_token', SPOTIFY_REFRESH_TOKEN)

  const accessTokenResponse = await axios.post(ACCESS_TOKEN_REFRESH_URL, params, {
    headers: {
      Authorization: `Basic ${authString}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })

  return accessTokenResponse.data?.access_token
}


export async function getNowPlaying() {
  const accessToken = await getAccessToken()

  const nowPlayingResponse = await axios.get(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
    validateStatus(_status) {
      return true
    }
  })

  return nowPlayingResponse
}

export async function getTopTracks() {
  const accessToken = await getAccessToken()

  const topTracksResponse = await axios.get(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
    params: {
      limit: 10,
    },
    validateStatus(_status) {
      return true
    }
  })

  return topTracksResponse
}
