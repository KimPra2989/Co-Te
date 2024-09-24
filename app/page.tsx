import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import Giscus from './components/giscus'
import getMD from './fns/getMD'

export default function HomePage() {
  const data = getMD('프로그래머스/3/118668. 코딩 테스트 공부/README.md')
  const solution_code = getMD(
    '프로그래머스/3/118668. 코딩 테스트 공부/코딩 테스트 공부.js'
  )
  const flexStyles = {
    display: 'flex',
    height: '100vh',
  }
  const rightStyles = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column' as const,
    color: 'white',
    whiteSpace: 'pre-wrap',
    overflowY: 'auto' as const,
  }
  const leftStyles = {
    width: '40%',
    overflowY: 'auto' as const,
    padding: '20px',
  }

  return (
    <div style={flexStyles}>
      <div style={leftStyles}>
        <Markdown rehypePlugins={[rehypeRaw]}>{data}</Markdown>
      </div>
      <div style={rightStyles}>
        <code>{solution_code}</code>
        <Giscus />
      </div>
    </div>
  )
}
