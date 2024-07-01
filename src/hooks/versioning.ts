import { useEffect, useState } from 'react'

const useVersioning = (input: RequestInfo | URL) => {
  const [currentVersion, setCurrentVersion] = useState(null)

  useEffect(() => {
    const fetchVersion = async () => {
      try {
        const response = await fetch(input).then((data) => {
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
}

export default useVersioning

// export default function useVersioning(input: RequestInfo | URL) {
//   const [currentVersion, setCurrentVersion] = useState(null)

//   useEffect(() => {
//     const intervalId = setInterval(async () => {
//       await fetch(input)
//         .then((response) => response.json())
//         .then((response) => {
//           if (currentVersion && currentVersion !== response.data.version) {
//             window.location.reload()
//           } else {
//             setCurrentVersion(response.data.version)
//           }
//         })
//         .catch((error) => console.error('Error fetching version:', error))
//     }, 60000)
//     return () => clearInterval(intervalId)
//   }, [currentVersion, input])
//   return currentVersion
// }

// 1. jika masuk setInterval bikin fungsi fetch diluarnya, krn perlu cek saat halamn di render pertama kali.
// 2. extensi file dalam folder hooks = .ts jika isinya fungsi, .tsx biasanya untuk component.
// 3. depedency useEffect kosongkan saja, krn logic poin 1 harus terpenuhi.
