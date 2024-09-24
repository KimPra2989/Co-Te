import fs from 'fs'
import path from 'path'

const getMD = () => {
  const filePath = path.join(
    process.cwd(),
    '프로그래머스/3/118668. 코딩 테스트 공부/README.md'
  )
  const fileContents = fs.readFileSync(filePath, 'utf8')
  return fileContents
}

export default getMD
