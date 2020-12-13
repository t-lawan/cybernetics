import React from "react"
import styled from "styled-components"
import HursellTime from "../../images/hursell.png"
import Feedback from "../../images/feedback.png"

const EssayTextWrapper = styled.div`
  padding: 1rem;
`

const EssayTitle = styled.h1``
export const EssayHeading = styled.h2``
const EssayCodeText = styled.p`
  padding: 1rem;
  white-space: pre-line;
  font-style: italic;
`

const EssayFigureText = styled.p`
  font-style: italic;
`

const Image = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
`

const EssayText = props => {
  return (
    <EssayTextWrapper>
      <EssayTitle>
        {" "}
        Time and Terraforming: Farming with Recursive Algorithms{" "}
      </EssayTitle>
      <p>
        {" "}
        In An Ecology of Time, Stengers argues for concerns over truth
        (Stengers, 2013). She cites the example of an ecological study; an
        ecologist is not concerned with whether the wolf or the sheep is right
        only how their concerns produce behavioral patterns. Stengers believes
        inter-disciplinary study is plagued by an obsession with truth. Here we
        articulate a metaphysics of time which we use to analyze cybernetic
        systems. These ideas are applied to intercropping systems to diagram
        temporal behaviors that compromise algorithmic attempts at agricultural
        optimization.{" "}
      </p>
      <EssayHeading> 1. A False Metaphysics of Time</EssayHeading>
      <p>
        Global scale computation makes humans increasingly aware of a tangled
        knot of overlapping systems. At the scale of assemblage, humans have a
        growing ability to perceive and affect changes on systems operating on
        ‘non-human’ time scales. This obsolesces lay philosophies of time. Our
        concern is to outline a more useful metaphysics of time.{" "}
      </p>
      <p>
        We start with Einstein and Bergson. Bergson argued that Einstein’s
        theory of relativity was a theory of the behavior of clocks with little
        relevance to metaphysics of time (Bergson and Jacobson, 1999).
        Unfortunately, Bergson doesn’t outline a definition, believing any
        conceptualization of time distorts the flow of phenomena. We need a
        scalpel to cut into the world. Building on Bergson’s ideas in a
        structured way we turn to Husserl. For Husserl time consists of
        sequential simultaneities, composed of a protention (virtual
        anticipation), a retention (virtual memory) and a perception (real
        perceived via phenomena) (Husserl, 1964).
      </p>
      <Image src={HursellTime}></Image>
      <EssayFigureText>
        {" "}
        Figure 1. a diagram of Husserl’s conception of time.{" "}
      </EssayFigureText>
      <p>
        Each system we ascribe duration to, we imagine carried along this
        timeline (this is Bergson’s leap of intuition). This should not be
        restricted to “humans”. This intuitive extension is like that made by
        Yuk Hui in extending Heidegger’s concept of Dasein to technology, which
        also has a sense of ‘being-there’ (Hui, 2019).
      </p>
      <EssayHeading>2. Time and Cybernetics </EssayHeading>
      <p>
        Armed with a model of time, we need a method of modelling complex
        systems. Cybernetics is a method of analysis focused on causal loops.
        Following cybernetic principles, systems are understood in terms of
        sensors, controllers and environment (Wiener, Hill and Mitter, 2019).
        Sensors detect changes in the environment, relaying them to the
        controller, which perform operations.
      </p>
      <p>
        Using the example of a processing plant as a real time system, a
        processing plant contains a variety of sensors, actuators and measured
        variables to perform operations and produce an output which they all
        respond to. These components act (sense, produce a change) within their
        respective temporal limits. Components have homeostatic loops, but have
        clearly defined boundaries (diameter of pipe, volume of storage tank).
        What would happen if a pump suddenly decreased its rotations, reducing
        the flow/pressure in the system? How would the other components respond?
        Will they modify the intervals by which they act? The system will fail
        to produce the defined output without a way to measure and respond to
        changes in temporal interval of components. Cybernetic understandings
        are open, bounded by utility.
      </p>
      <p>
        In a dynamic cybernetic world where agents recursively reproduce
        themselves with different experiences of non-linear time, how can agents
        coordinate themselves in relation to other agents? Can manipulating the
        feedback loop of a system alter agents’ experiences of time and what
        effect does this have on the wider system?{" "}
      </p>

      <EssayHeading>
        3. Time on the Ground: Intercropping and Simulation
      </EssayHeading>
      <p>
        Intercropping is a crucible to test these ideas. Technological
        developments have been the driving force in most farming practices
        (Lewis, 1998). Hyper-febrile chemical sensors move the system away from
        individual sensing capacities, into the territory of the assemblage.
        This is accompanied by deployment of agricultural algorithms with vast
        retentions and perceptual capabilities operating at break-neck speeds.
        Within a capitalist system, imposing a Darwinian drive towards
        optimization, individuals or community units cannot compete with
        distributed techno-capital assemblages. It remains to be seen whether
        techno-capital engineering can escape the temporality of the extant
        ecosystem. Intercropping is fertile soil to explore these ideas, where
        technology, societal structures, plants, pollinators and the climate
        interact, each a complex system with its own rate of passage through
        time.
      </p>
      <p>
        Our artefact is a simulation of an intercropping system. It takes four
        agents (soybean, sugarcane, pollinator and plant destroyer), defines
        their internal structure and interactions with their environment.
        Underneath these agents the simulation stretches the control mechanisms
        of capital and an alien fungus. Both symbiotic partners that are
        manifested in the environment through altered behavioral patterns of
        their infected partners. By repeatedly running the simulation and
        interpreting results we slowly build an ecological bestiary, a plan of
        the coiling and uncoiling of time based on patterns of growth, death,
        reproduction and survival of intercropped agents.
      </p>
      <p>
        The simulation operates on Husserl’s time. Each frame a simultaneity,
        the move between frames a sequential updating of information in the
        system. The simulation, like many cybernetic systems, has rigidly
        limited protentions and precision-cut sequential retentions. The
        simultaneity and subsequent retention constitute the ‘inside’ of each
        agent. The protention is a range of values that the system stands ready
        to accept. The unfolding of time is characterized by periodic
        measurement of values generated by processes external to each system.{" "}
      </p>
      <p>
        Each agent is a system in miniature (the system fractalizes), and
        carries in its structure blind spots. These blind spots often involve
        temporal asymmetries. The artefact diagrams methods of bottoming out a
        system that proceeds from simultaneity to simultaneity via a recursive
        movement.{" "}
      </p>
      <ol>
        <li>
          {" "}
          Recursive Acceleration: reducing the temporal interval via a positive
          feedback process enables run-away processes to proliferate. As the
          object reaches the upper frame limit of the simulation the simulation
          loses utility and drifts free of reality. The agent that recursively
          increases its speed must survive long enough to reach escape velocity.
        </li>
        <li>
          {" "}
          Recursive Fractalization: at each recursive step the agent generates
          new objects for the system to track. As the scope of the real in the
          simultaneity widens eventually the algorithm can no longer bear the
          weight.{" "}
        </li>
      </ol>
      <p>
        These methods of disrupting a cybernetic control are talismans,
        reminding us to maintain open relationships with cybernetic systems, to
        play with them. Cybernetic systems, by definition, interact with their
        environments. The components of the system continually form
        relationships with the outside, and so expose themselves to potential
        run-away effects. As Sadie Plant says “Invulnerability would be
        homeostasis, an absolute and fatal stability” (Plant, 1998).
      </p>
      <EssayHeading> Glossary: </EssayHeading>
      <p>
        {" "}
        System - ‘A set of elements or parts that is coherently organized and
        interconnected in a pattern or structure that produces a characteristic
        set of behaviours.. ‘ (Meadows, 2008 , pp 188)
      </p>
      <p>
        Real-Time system - A real-time system operates with a time constraint,
        where the time that the output produced is significant. In other words,
        producing the output at some other time than the required time may be
        meaningless.
      </p>
      <p>
        System theory - “A framework for conceptualising the self-regulatory and
        self-organising processes governing inputs to systems, the
        transformations of inputs into outputs and feedback loops”
      </p>
      <p>
        Feedback Loops - “The mechanism (rule or information flow or signal)
        that allows a change in a stock to affect a flow into or out of that
        same stock” (Meadows, 2008 , pp 188)
      </p>
      <Image src={Feedback}></Image>
      <p>
        Recursivity - “A recursive function (in Computer Science) simply means a
        function that calls itself until a halting state is reached.” (Yuk Hui).
        “Programming makes use of routines called ‘procedures’ which may need to
        execute other procedures. In self-referential programming, the procedure
        calls itself.” (Ron Eglash)
      </p>
      <EssayCodeText>
        {`void RecursiveFunction(State state){ 
                ---series of perceived events/procedures--- 

                RecursiveFunction(state); 
          } 
          `}
      </EssayCodeText>
      <p>
        {" "}
        Temporal Interval – The clock time between an agent’s simultaneities.
      </p>
      <EssayHeading>References: </EssayHeading>

      <p>Bergson, H., & Jacobson, L. (1999). Duration and Simultaneity: Bergson and the Einsteinian Universe (Philosophy of Science) (2nd ed.). Clinamen Press Ltd. </p> 
      <p>Eglash, R. (1999). African Fractals. New Brunswick: Rutgers University Press.  </p>
      <p> Hui, Y. (2017). Preface: The time of execution. Executing Practices. </p>
      <p> Hui, Y. (2019). Recursivity and Contingency (Media Philosophy). Rowman & Littlefield Publishers. </p>
      <p>Husserl, E. (1964). The Phenomenology of Internal Time-Consciousness. Indiana University Press.</p>
      <p>Lewis, T. (1998). Evolution of farm management information systems. Computers and Electronics in Agriculture, 19(3), 233–248. https://doi.org/10.1016/s0168-1699(97)00040-9 </p>
      <p>Meadows, D. H., & Wright, D. (2008). Thinking in Systems: A Primer. Chelsea Green Publishing.</p>
      <p>Plant, S. (1998). Zeros + ones. London: Fourth Estate.</p>
      <p>Simondon, G. (2009). Technical mentality. Parrhesia, 7(1), 17–27. http://blogs.bbk.ac.uk/artsresearch/files/2016/09/gilbert-simondon-technical-mentality.pdf </p>
      <p>Stengers, I. (2013). Introductory Notes on an Ecology of Practices. Cultural Studies Review, 11(1), 183–196. https://doi.org/10.5130/csr.v11i1.3459 </p>
      <p>Wiener, N., Hill, D., & Mitter, S. (2019). Cybernetics or Control and Communication in the Animal and the Machine, Reissue of the 1961 second edition (The MIT Press) (Reprint ed.). The MIT Press. </p>
    </EssayTextWrapper>
  )
}

export default EssayText
