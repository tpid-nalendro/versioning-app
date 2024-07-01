import './App.css'
import { images } from './assets/images'
import useVersioning from './hooks/versioning'

export default function App() {
  const version = useVersioning('/version.json')

  console.log(version)
  return (
    <div className='App'>
      <header className='App-header'>
        <img
          src={images.img_katt}
          className='App-logo'
          alt='logo'
          style={{ marginBottom: '4px' }}
        />
        Version:{version} 3
      </header>
    </div>
  )
}
