import Page from '@/ui/page'
import Gist from 'react-gist'

export default function LandingPage() {
  return (
    <div>
      <Page
        title='Welcome to my Blog'
        description="Richard Soriano's blog about Front End Programming in ReactJS Redux NextJS"
      >
        <h1> Hello World </h1>
        <Gist id='394470107aab1bfeb77059349ee06d81' />
      </Page>
    </div>
  )
}
