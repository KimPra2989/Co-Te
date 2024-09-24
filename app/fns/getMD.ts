import fs from 'fs'
import path from 'path'

const getMD = (pathname: string) => {
  const filePath = path.join(process.cwd(), pathname)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  return fileContents
}

export default getMD
