import { useEffect } from 'react'
import './App.css'
import { images } from './assets/images'
import useVersioning from './hooks/versioning'

export default function App() {
  console.log(useVersioning('/version.json'))

  return (
    <div className='App'>
      <header className='App-header'>
        <img
          src={images.img_katt}
          className='App-logo'
          alt='logo'
          style={{ marginBottom: '4px' }}
        />
        Version
      </header>
    </div>
  )
}
