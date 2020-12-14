import React from "react"
import styled from "styled-components"
import { TwoColumnSection, size } from "../styles/styles"
import ScrollableNarrative, {
  ClickableText
} from "../scrollable-narrative/scrollable-narrative"
import VideoPlayer from "../video-player/video-player"
import { VideoUrls } from "../utils/config"
import EssayText, { EssayHeading } from "../essay-text/essay-text"
import DeathSpirals from "../assets/DeathSpirals.wav"
import Contagion from "../assets/Contagion.mp3"
import AudioPlayer from "../audio-player/audio-player"
import Essay from '../assets/time_and_farming.pdf'
// import Simulation from '../assets/INTERCROPPING_SIMULATION.zip';
const VideoSection = styled.div`
  height: 100vh;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: ${size.tablet}) {
  height: auto;
  }
`

const AudioSection = styled.div`
  padding: 1rem;
`
const Title = styled.h3``

const DownloadSection = styled.section`
  /* display: flex;
  flex-direction: row;
  padding: 1rem; */

  padding: 2rem;
  padding-top: 1rem;
  @media (max-width: ${size.tablet}) {

  padding: 0rem;
  }
`

export const ClickableLink = styled.a`
  cursor: pointer;
  display: block;
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
    super(props)

    this.state = {
      url: VideoUrls.MAIN
    }
  }

  onSelectAgent = agent => {
    this.setState({
      url: agent
    })
  }

  render() {
    return (
      <>
        <TwoColumnSection>
          <ScrollableNarrative
            onSelectAgent={agent => this.onSelectAgent(agent)}
          />
          <VideoSection>
            <VideoPlayer url={this.state.url} />
            {this.state.url !== VideoUrls.MAIN ? (
              <ClickableText onClick={() => this.onSelectAgent(VideoUrls.MAIN)}>
                RETURN TO SIMULATION
              </ClickableText>
            ) : null}
          </VideoSection>
        </TwoColumnSection>
        <TwoColumnSection>
          <DownloadSection>
            <EssayHeading> Report</EssayHeading>
            <ClickableLink
              href={Essay}
              target="__blank"
            >
              {" "}
              Time and Terraforming: Farming with Recursive Algorithms (PDF)
            </ClickableLink>
            <EssayHeading> Link to Simulation</EssayHeading>
            <ClickableLink
              href={
                "https://marie-leuder.s3.eu-west-2.amazonaws.com/INTERCROPPING_SIMULATION.zip"
              }
              target="__blank"
            >
              {" "}
              Download Simulation for Mac (.zip)
            </ClickableLink>
          </DownloadSection>
          <AudioSection>
          {/* <EssayHeading> Podcast </EssayHeading> */}
          <AudioPlayer url={"https://marie-leuder.s3.eu-west-2.amazonaws.com/room18podcast.mp3"} />
          {/* <div>
            <audio autoPlay={true} controls>
              <source src={DeathSpirals} type="audio/wav" />
              If you're reading this, audio isn't supported.
            </audio>
          </div> */}
          {/* <EssayHeading> Soundscape </EssayHeading> */}
          <AudioPlayer url={DeathSpirals} />
          {/* <div>
            <audio autoPlay={true} controls>
              <source src={DeathSpirals} type="audio/wav" />
              If you're reading this, audio isn't supported.
            </audio>
          </div> */}
        </AudioSection>
        </TwoColumnSection>

        {/* <EssayText /> */}{" "}
      </>
    )
  }
}

export default Main
