import React from "react"
import styled from "styled-components"
import { TwoColumnSection } from "../styles/styles"
import ScrollableNarrative from "../scrollable-narrative/scrollable-narrative";
import VideoPlayer from "../video-player/video-player";
import { VideoUrls } from "../utils/config";
import EssayText from "../essay-text/essay-text";
import AudioPlayer from "../audio-player/audio-player";


const VideoSection = styled.div`
  height: 100vh;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const AudioSection = styled.div`

`

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: VideoUrls.MAIN
    }
  }

  onSelectAgent = (agent) => {
    console.log('Agent: ' + agent);
    this.setState({
        url: agent
    })

  }

  render() {
    return (
      <TwoColumnSection>
        <ScrollableNarrative onSelectAgent={(agent) => this.onSelectAgent(agent)}  />
        <VideoSection>
            <VideoPlayer url={this.state.url} />
        </VideoSection>
        <AudioSection>
            <AudioPlayer />
        </AudioSection>
        <EssayText />
      </TwoColumnSection>
    )
  }
}

export default Main
