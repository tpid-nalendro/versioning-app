const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'version.json')

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading version.json:', err)
    return
  }

  const versionData = JSON.parse(data)
  const versionParts = versionData.version.split('.').map(Number)

  versionParts[2] += 1

  if (versionParts[2] === 10) {
    versionParts[2] = 0
    versionParts[1] += 1

    if (versionParts[1] === 10) {
      versionParts[1] = 0
      versionParts[0] += 1
    }
  }

  versionData.version = versionParts.join('.')

  fs.writeFile(
    filePath,
    JSON.stringify(versionData, null, 2),
    'utf8',
    (err) => {
      if (err) {
        console.error('Error writing version.json:', err)
        return
      }
      console.log(
        `Version incremented successfully to ${JSON.stringify(
          versionData,
          null,
          2
        )}`
      )
    }
  )
})
