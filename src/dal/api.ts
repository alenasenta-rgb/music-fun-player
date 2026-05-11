export type GetTrackDetailsOutputData = {
  id: string
  attributes: {
    title: string
    lyrics: string | null
  }
}

type GetTrackDetailsOutput = {
    data: GetTrackDetailsOutputData
}

export const getTrack = (trackId: string) => {
    const promise: Promise<GetTrackDetailsOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, {
        headers: {
          'api-key': '63f32d0d-bce2-4694-8cae-fedcf78f39d5'
        }
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
            headers: {
            'api-key': '63f32d0d-bce2-4694-8cae-fedcf78f39d5'
            }
        }).then(respone => respone.json())
        return promise
}