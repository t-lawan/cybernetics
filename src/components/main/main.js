import React from "react"
import styled from "styled-components"
import { TwoColumnSection } from "../styles/styles"
import ScrollableNarrative, { ClickableText } from "../scrollable-narrative/scrollable-narrative";
import VideoPlayer from "../video-player/video-player";
import { VideoUrls } from "../utils/config";
import EssayText from "../essay-text/essay-text";
import DeathSpirals from "../assets/DeathSpirals.wav"
// import Simulation from '../assets/INTERCROPPING_SIMULATION.zip';
const VideoSection = styled.div`
  height: 100vh;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const AudioSection = styled.div`
    padding: 1rem;
`
const Title = styled.h3`
`

const DownloadSection = styled.section`
  display: flex;
  flex-direction: row;
  padding: 1rem;
`

export const ClickableLink = styled.a`
  cursor: pointer;

  color: green;
  text-decoration: underline;
  text-decoration-color: black;
  font-style: italic;
  :hover {
    transform: rotate(1deg);
  }
`

class Main extends React.Component {
  constructor(props) {
    super(props);
    
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
            {this.state.url !== VideoUrls.MAIN ? <ClickableText onClick={() => this.onSelectAgent(VideoUrls.MAIN)}>RETURN TO SIMULATION</ClickableText> : null}
        </VideoSection>
        <AudioSection>
            <Title> Podcast </Title>
            <div>
              <audio autoPlay={true} controls>
                <source src={DeathSpirals} type="audio/wav" />
                If you're reading this, audio isn't supported. 
            </audio>
            </div>
            <DownloadSection>
            <ClickableLink href={"https://marie-leuder.s3.eu-west-2.amazonaws.com/INTERCROPPING_SIMULATION.zip"} target="__blank"> Download Simulation for Mac</ClickableLink>

            </DownloadSection>
        </AudioSection>
        <EssayText />
      </TwoColumnSection>
    )
  }
}

export default Main
