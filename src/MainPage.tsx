import { TracksList } from './ui/TracksList.tsx'
import { TrackDetail } from './ui/TrackDetail.tsx'
import { useTrackSelection } from "./bll/useTrackSelection.tsx"
 


export function MainPage() {
    const {trackId, setTrackId} = useTrackSelection()

      const handleTrackSelect = (id: string | null): void => {
                setTrackId(id)
    }

    return <div>
        <div style={{display: 'flex', gap: '40px'}}>
            <h1>drtyuytrew</h1>
            <TracksList 
            selectedTrackId={trackId}
            onTrackSelect={handleTrackSelect}/>
            <TrackDetail trackId= {trackId}/>
        </div>
    </div>
}