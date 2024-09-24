import Markdown from 'react-markdown'
import getMD from './fns/getMD'
import rehypeRaw from 'rehype-raw'

export default function HomePage() {
  const data = getMD('프로그래머스/3/118668. 코딩 테스트 공부/README.md')
  const solution_code = getMD(
    '프로그래머스/3/118668. 코딩 테스트 공부/코딩 테스트 공부.js'
  )
  // console.log(data)
  const flexStyles = {
    display: 'flex',
    height: '100vh',
  }
  const rightStyles = {
    flex: 1,
    // backgroundColor: 'pink',
    color: 'white',
    whiteSpace: 'pre-wrap',
    overflowY: 'auto',

  }
  const leftStyles = {
    width: '40%',
    overflowY: 'auto',
    padding: '20px',
  }

  return (
    <div style={flexStyles}>
      <div style={leftStyles}>
        <Markdown rehypePlugins={[rehypeRaw]}>{data}</Markdown>
      </div>
      <div style={rightStyles}>
        <code>{solution_code}</code>
      </div>
    </div>
  )
}
