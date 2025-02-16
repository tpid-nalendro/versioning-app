import './App.css'
import { images } from './assets/images'
import useVersioning from './hooks/versioning'

export default function App() {
  useVersioning('/version.json')

  return (
    <div className='App'>
      <header className='App-header'>
        <img
          src={images.img_katt}
          className='App-logo'
          alt='logo'
          style={{ marginBottom: '4px' }}
        />
        Version no public/version.json
      </header>
    </div>
  )
}
