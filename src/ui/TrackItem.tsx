import clsx from "clsx"
import type { TrackListItemOutput } from "../dal/api"
import styles from "./TracksList.module.css"

type Props = {
    isSelected: boolean
    onSelect: (trackId: string) => void
    track: TrackListItemOutput
}

export function TrackItem({onSelect, track, isSelected}: Props) {
    const handleClick = () => onSelect?.(track.id)

    const obj = {
        [styles.track]: true, 
        [styles.selected]: isSelected,
    }

    const className = clsx (obj)

    return(
        <li className={className} key={track.id}>
            <div onClick={handleClick}>
                { track.attributes.title }
            </div>
            <audio src={ track.attributes.attachments[0].url } controls></audio>
        </li>
    )
}