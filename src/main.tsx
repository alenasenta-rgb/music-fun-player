import { createRoot } from 'react-dom/client'
import './index.css'
// import './ui/tracks.module.css'
// import './ui/track-detail.module.css'
import { MainPage } from './MainPage.tsx'

const rootEl = document.getElementById('root')
const reactRoot = createRoot(rootEl!);
reactRoot.render(<MainPage />)










