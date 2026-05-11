export type GetTrackDetailsOutputData = {
  id: string
  attributes: {
    title: string
    lyrics: string | null
  }
}

export type GetTrackDetailsOutput = {
    data: GetTrackDetailsOutputData
}

const prepareHeaders = () => {
    const apiKey = import.meta.env.VITE_API_KEY
    if (!apiKey) return undefined

    return {
        'api-key': apiKey
    }
}

export const getTrack = (trackId: string) => {
    const promise: Promise<GetTrackDetailsOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, {
        headers: prepareHeaders()
    }).then(respone => respone.json())
      .catch(() => {
        console.log("API не работает, используем локальные данные")

        return {
            data: {
                id: trackId,
                attributes: {
                    title: "Local track",
                    lyrics: "Нет соединения с сервером"
                }
            }
        }
    })

    return promise
}


type AttachmentDto = {
    url: string
}

type TrackListItemOutputAttributes = {
    title: string
        attachments: Array<AttachmentDto>
}

export type TrackListItemOutput = {
    id: string
    attributes: TrackListItemOutputAttributes
}


type GetTrackListOutput = {
    data: Array<TrackListItemOutput>
}

export const getTracks = () => {
    const promise: Promise<GetTrackListOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
            headers: prepareHeaders()
        }).then(respone => respone.json())
        return promise
}