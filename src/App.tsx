import { useEffect, useState } from 'react'
import './App.css'
import { images } from './assets/images'
import axios from 'axios'

function App() {
  const [currentVersion, setCurrentVersion] = useState(null)

  useEffect(() => {
    // Function to fetch the version from version.json
    const fetchVersion = async () => {
      try {
        const response = await axios.get('/version.json')
        const latestVersion = response.data.version

        if (currentVersion && currentVersion !== latestVersion) {
          window.location.reload() // true parameter forces hard reload
        } else {
          setCurrentVersion(latestVersion)
        }
      } catch (error) {
        console.error('Error fetching version:', error)
      }
    }

    const intervalId = setInterval(fetchVersion, 60000)

    fetchVersion()

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId)
  }, [currentVersion])

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={images.img_katt} className='App-logo' alt='logo' />
        version:
      </header>
    </div>
  )
}

export default App
