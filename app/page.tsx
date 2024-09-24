import Markdown from 'react-markdown'
import getMD from './fns/getMD'
import rehypeRaw from 'rehype-raw'

export default function HomePage() {
  const data = getMD()
  // console.log(data)

  return (
    <div>
      <Markdown rehypePlugins={[rehypeRaw]}>{data}</Markdown>
      {/* <Markdown rehypePlugins={[rehypeRaw]}>{markdownText}</Markdown> */}
    </div>
  )
}
