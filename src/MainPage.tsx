import { TracksList } from './ui/TracksList.tsx'
import { TrackDetail } from './ui/TrackDetail.tsx'
import { useTrackSelection } from "./bll/useTrackSelection.tsx"
import "./index.css"
 

export function MainPage() {
    const {trackId, setTrackId} = useTrackSelection()

      const handleTrackSelect = (id: string | null): void => {
                setTrackId(id)
    }

    return (
        <div className="app">
            <h1 className="title">Music Fun Player</h1>
            <div className="layout"/*style={{display: 'flex', gap: '40px'}}*/>
                <TracksList 
                selectedTrackId={trackId}
                onTrackSelect={handleTrackSelect}/>
                <TrackDetail trackId= {trackId}/>
            </div>
        </div>
    )
}