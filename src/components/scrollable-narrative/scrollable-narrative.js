import React from "react"
import styled from "styled-components"
import { VideoUrls } from "../utils/config"
import Cane from '../../images/cane.png';
import Capital from '../../images/capital.png';
import Destroyer from '../../images/destroyer.png';
import Fungi from '../../images/fungi.png';
import Soy from '../../images/soy.png';
import Pollinator from '../../images/pollinator.png';
import { size } from "../styles/styles";


const ScrollableNarrativeWrapper = styled.div`
  height: 100vh;
  padding: 1rem;
  display: flex;
  align-items: center;

  @media (max-width: ${size.tablet}) {
    height: auto;
  }
`
const ScrollableTextBox = styled.div`
  height: 60vh;
  overflow-y: scroll;
  padding: 0.5rem;
  ::-webkit-scrollbar {
    width: 7px;
  }
  ::-webkit-scrollbar-thumb {
    background: black;
  }
`

const Images = {
  CANE: Cane,
  CAPITAL: Capital,
  DESTROYER: Destroyer,
  FUNGI: Fungi,
  SOY: Soy,
  POLLINATOR: Pollinator
}

export const ClickableText = styled.span`
  cursor: url(${props => props.image ? props.image: Images.CANE}) 15 15, pointer;

  color: green;
  text-decoration: underline;
  text-decoration-color: black;
  font-style: italic;
  :hover {
    transform: rotate(1deg);
  }
`

export const CrossedOutText = styled.span`
  text-decoration: line-through;
`

const ScrollableNarrative = props => {
  const onClickEvent = agent => {
    props.onSelectAgent(agent)
  }

  return (
    <ScrollableNarrativeWrapper>
      <ScrollableTextBox>
        <p>Y. 2083</p>
        <p>
          In the writhing mud, torn apart and rototilled, a new bacterial strain
          is formed. The product of lateral gene transfer between cellular
          populations at the ragged edge of invasive industrial agriculture. A. 
          <ClickableText image={Images.CAPITAL} onClick={() => onClickEvent(VideoUrls.CAPITAL)}>capillatastrain OXX552 </ClickableText> is a nitrogen fixer living in cereal roots. In a
          bacterio-contingent event (like a grain of salt in crystal solution),
          OXX552 epigenetically activates a long dormant gene, triggering an
          evolutionary timebomb, flicking a lycanthropic phenotype on, bypassing
          anti-carcinogenic bio-kill switches. In shared soil, <ClickableText image={Images.SOY} onClick={() => onClickEvent(VideoUrls.SOYBEAN)}>soybean </ClickableText> and
          <ClickableText image={Images.CANE}  onClick={() => onClickEvent(VideoUrls.SUGARCANE)}> sugarcane</ClickableText> escape algorithmic predictions and burst into wild tangles
          of life.
        </p>
        <p>Y. 2087 </p>
        <p>
          A cosmological-contingent bolide event. A 4-meter asteroid enters
          Earth’s atmosphere, its trajectory lining up with industrial
          agricultural plant AHEARN latitude: <CrossedOutText> 0.7893° S</CrossedOutText>, longitude: <CrossedOutText> 113.9213°</CrossedOutText> 
          E). A graduate student working on a commercial attenuo-botany thesis
          records “intermittent pink rain over a period of 84 hours” following
          this event. Burning up during the process ofatmospheric entry, only a
          microscopic quantity of meteorite dust reaches soil. It remains
          un-recovered and un-processed. This dust contains extremophilic
          exo-lichen P. Siebert. Resuscitated by contact with soil, a <ClickableText image={Images.FUNGI} onClick={() => onClickEvent(VideoUrls.FUNGI)}>fungal
          sub-system </ClickableText> of the lichen proves a formidable biohacker and cordyceps
          analog. Hijacking pollinators to slip through quarantine and
          contamination nets.
        </p>
        <p>Y. 2059 </p>
        <p>
          Satellitic NGO operators deploy prototype soft robotics project 
          <ClickableText image={Images.POLLINATOR}  onClick={() => onClickEvent(VideoUrls.POLLINATOR)}> p0llin8.tor </ClickableText>: 3d printedand self-replicating, made from 100%
          compostable parts, mulch-silicate micro-fibers latticed together
          according to the hottest auto-fractalizingframework for synthetic hive
          systems. p0llin8.tor gets to work. Deploying slick convolutional
          recurrent neural network software directly into crop ovaries, it
          induces pollinator-receptive behavior in crops with no history of
          pollination.
        </p>
        <p>Y. 2058–2095</p>
        <p>
          Nano-fractal trading algorithms, operating at speeds incomprehensible
          speeds, predict a catastrophic drop in stock priceof EVEA agrochemical
          roughly 40 years down the line. They immediately subcontract GMG
          eco-consultancy, who identify recently deployed synthetic pollinators
          as the most stochastically significant event. GMG subcontract Pairbank
          Genetics, who design a genomic re-patterning of an extant  <ClickableText onClick={() => onClickEvent(VideoUrls.PLANT_DESTROYER)}> predator</ClickableText>  to
          selectively eliminate the pollinators. After filing for patent rights
          over the re-patterning, Pairbank Genetics subcontract AQQ precision
          bioscience (a subsidiary of EVEA agrochemical) to mass-produce the
          predator, A. Supergrand. It has now been over 30 years since the
          potential stock crash was predicted, and it has disappeared from
          current best algorithmic predictions. However, $700 billion have now
          been sunk into the project, significant parts of which are public
          money. Results are expected. To keep costs in check AQQ lobbies to
          bypass a series of safety tests (citing a range of international
          climate emergency response law). The predators aremanufactured and
          shipped out. Due to a minor epigenetic mis-implementation, the
          incorrect chiral form of a key protein is produced in the re-patterned
          predator. Structurally identical, but rotationally asymmetrical, this
          error has a significant impact on the predator’s behavior causing it
          to primarily target the plants it was meant to protect. This results
          in a catastrophic drop in EVEA stock prices (as mis-predicted by the
          fractal algorithms). Two quality assurance workers at AQQ precision
          science are fired and face serious fines.
        </p>
      </ScrollableTextBox>
    </ScrollableNarrativeWrapper>
  )
}

export default ScrollableNarrative
