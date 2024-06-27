import { useEffect, useState } from 'react'
import './App.css'
import { images } from './assets/images'
import axios from 'axios'

function App() {
  const [currentVersion, setCurrentVersion] = useState(null)

  useEffect(() => {
    const fetchVersion = async () => {
      try {
        const response = await axios.get('/version.json').then((data) => {
          return data
        })
        const latestVersion = response.data.version

        console.log(currentVersion, latestVersion)
        if (currentVersion && currentVersion !== latestVersion) {
          window.location.reload()
        } else {
          setCurrentVersion(latestVersion)
        }
      } catch (error) {
        console.error('Error fetching version:', error)
      }
    }

    const intervalId = setInterval(fetchVersion, 60000)

    fetchVersion()
    return () => clearInterval(intervalId)
  }, [currentVersion])

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={images.img_katt} className='App-logo' alt='logo' />
        version:{currentVersion}
      </header>
    </div>
  )
}

export default App
