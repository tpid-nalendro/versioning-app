import { useEffect, useState } from 'react'
import './App.css'
import { images } from './assets/images'
import useVersioning from './hooks/versioning'

export default function App() {
  const [currentVersion, setCurrentVersion] = useState(null)

  useEffect(() => {
    const fetchVersion = async () => {
      try {
        const response = await fetch('/version.json').then((data) => {
          return data.json()
        })
        const latestVersion = response.version

        if (currentVersion && currentVersion !== latestVersion) {
          console.log(currentVersion, latestVersion, 'must reload here')
          window.location.reload()
        } else {
          setCurrentVersion(latestVersion)
        }
      } catch (error) {
        console.error('Error fetching version:', error)
      }
    }
    fetchVersion()

    const intervalId = setInterval(fetchVersion, 10 * 1000)
    return () => clearInterval(intervalId)
  }, [])

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
