import React from "react"
import styled from "styled-components"
import { TwoColumnSection } from "../styles/styles"
import ScrollableNarrative from "../scrollable-narrative/scrollable-narrative";
import VideoPlayer from "../video-player/video-player";
import { VideoUrls } from "../utils/config";


const VideoSection = styled.div`
  height: 100vh;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const AudioSection = styled.div`

`

const MainTextBox = styled.div`
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
            <p> Audio Player </p>
        </AudioSection>
        <MainTextBox>
        <p>
              {" "}
              I'm baby tousled salvia gentrify, tempor anim qui readymade kale
              chips DIY. Adipisicing tofu narwhal distillery nulla leggings four
              loko glossier lumbersexual 90's authentic fanny pack cardigan you
              probably haven't heard of them pinterest. Master cleanse
              fingerstache distillery adipisicing. Neutra messenger bag
              pitchfork narwhal. Retro yuccie cronut pork belly. Selvage sunt
              magna, kale chips af disrupt fingerstache nostrud. +1 banjo non,
              live-edge meggings trust fund locavore single-origin coffee
              cupidatat nisi duis selvage biodiesel do pok pok. Trust fund
              jianbing qui, kickstarter farm-to-table skateboard you probably
              haven't heard of them. Ut officia 90's knausgaard gentrify
              coloring book anim. Ugh lo-fi green juice kitsch lorem plaid.
              Fixie pour-over kitsch VHS pitchfork unicorn. Brunch shaman YOLO,
              pinterest VHS live-edge next level labore twee selvage venmo. +1
              raw denim jianbing, disrupt kogi nostrud fanny pack. Blog synth
              shoreditch incididunt. Tumblr neutra ea intelligentsia, lorem
              butcher incididunt man braid. Ugh adaptogen knausgaard quis, vinyl
              activated charcoal consequat palo santo ea reprehenderit.
              Asymmetrical fashion axe sustainable fugiat lomo vaporware irony
              fixie raw denim artisan pop-up 8-bit retro lo-fi aliqua. Tbh hella
              marfa artisan, retro culpa 8-bit helvetica deep v everyday carry.
              Ut try-hard single-origin coffee, direct trade nulla mustache
              vinyl photo booth. Laborum VHS DIY farm-to-table, gochujang sed
              vinyl velit pug listicle. Before they sold out jianbing in
              activated charcoal proident, church-key butcher flexitarian. Ut
              blue bottle narwhal meggings slow-carb. Sed try-hard chambray af.
              Vaporware pabst semiotics synth leggings exercitation lo-fi
              voluptate trust fund sriracha qui pour-over. Raw denim echo park
              prism chambray salvia, drinking vinegar fingerstache trust fund.
              Next level paleo ex retro ennui truffaut schlitz, in disrupt craft
              beer tumblr.
            </p>
        </MainTextBox>
      </TwoColumnSection>
    )
  }
}

export default Main
