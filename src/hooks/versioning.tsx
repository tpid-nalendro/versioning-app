import { useEffect, useState } from "react"

export default function useVersioning(input: RequestInfo | URL) {
  const [currentVersion, setCurrentVersion] = useState(null)
  useEffect(() => {
    const intervalId = setInterval(async () => {
      await fetch(input)
        .then(response => response.json())
        .then(response => {
          if (currentVersion && currentVersion !== response.data.version) {
            window.location.reload()
          } else {
            setCurrentVersion(response.data.version)
          }
        })
        .catch(error => console.error('Error fetching version:', error));
    }, 60000)
    return () => clearInterval(intervalId)
  }, [currentVersion, input])
  return currentVersion;
}
