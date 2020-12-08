import React from "react"
import styled from "styled-components"
import HursellTime from '../../images/hursell.png';
import Feedback from '../../images/feedback.png';

const EssayTextWrapper = styled.div`
  padding: 1rem;
`

const EssayHeading = styled.h1``

const EssayCodeText = styled.p`
  padding: 1rem;
  white-space: pre-line;
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
      <EssayHeading> A False Metaphysics of Time</EssayHeading>
      <p>
        In An Ecology of Time, Isabelle Stengers argues for the importance of
        studying concerns as opposed to truth. Ecologists do not investigate
        whether wolves or sheep are right, but are concerned instead with how
        and why they interact the way they do. Stengers goes on to cite ways in
        which claims of universal validity are damaging, especially in
        inter-disciplinary and cross-cultural contexts. Humans are born with a
        set of naïve schemata. These schemata are conceptual frameworks used to
        filter and understand the array of sensorial data constituting the real.
        As humans develop, they undergo a process of accommodation and
        assimilation; either assimilating sensorial data to fit with extant
        schemata or modifying schemata in accordance with un-assimilable data (a
        similar structure to that of scientific progress proposed by Thomas
        Kuhn). These schemata have a much closer relationship to utility than
        truth. Over the course of development these schemata are bootstrapped
        into other human functions, becoming increasingly difficult to identify
        and extricate. Take, for example, children’s early proxying of
        sequentiality for causality (Werner and Kaplan, 1963). This early
        misattribution may be the basis of lay-logic as it assimilates
        developmentally decreasing egocentrism while integrating concepts of
        agency and reversibility (Piaget, 1972). As we grapple with an
        increasingly tangled knot of overlapping, complex systems, many of which
        operate in non-linear ways, our naïve schemata are torn apart from the
        inside, producing paradoxical results. As systems operating on
        non-anthropocentric time scales proliferate it becomes useful to develop
        ways of hacking our naïve schemata to keep up. To articulate a more
        useful understanding of time we start with Einstein and Bergson.
        According to Einstein’s special relativity, there is no universal time.
        Time is always relative to space of a given system and the speed of
        light (which is constant). Bergson argued that Einstein’s theory was a
        theory of the behavior of clocks with little to say about the
        metaphysics of time. For an illustrative example of how experience and
        metaphysics of time diverge see the paradox of aging. Bergson does not
        define time, believing that any conceptualization of time would only
        distort the flow of phenomena. Unlike Bergson we are not interested in
        the true metaphysics of time, we are interested in useful maps. To
        combine Bergson’s assessment that the nature of time is duration and
        turn it into a scalpel with which we can cut into the world we turn to
        Husserl. For Husserl, time consists of sequential simultaneities.
        Simultaneities are made up of a protention (a virtual anticipation), a
        retention (virtual memory) and a perception (the real perceived via
        phenomena).
      </p>
      <Image src={HursellTime}></Image>
      <p>
        For each agent in the system that we ascribe duration to we must imagine
        it carried along this timeline. As Yuk Hui asserts in Recursivity and
        Contingency, Heidegger’s concept of the Dasein extends far beyond the
        human, at least to technology, which also possesses a sense of. ‘being
        there’. In this spirit we attempt to highjack or hack our naïve
        schemata. Taking Bergson’s investigative method of intuition, we
        acknowledge their shortcomings but using them as tools to think in
        non-human ways.
      </p>

      <p>
        {" "}
        /* In Terraforming, Benjamin Bratton highlights the differing ways
        computational models have been used to predict the future. Citing the
        examples of both insurance firms and climate science, Bratton highlights
        the way calculation of cost by market systems has frequently devalued
        the future in favor of the present, this is a subset of what was
        formulated by Hayek as the capitalist pricing problem. The market as a
        network of exchange linking supply and demand frequently undervalues
        externalities. The market has been historically bounded by the range of
        information accessible to humans-as-assemblage. In the age of planetary
        computation, we are in the process of moving from
        industrial/technical-human assemblage to
        industrial/technical-algorithmic–assemblage. Accompanying this shift the
        economy increasingly moves to second order processes, trading options is
        capitalizing not on an asymmetry of information of present state of the
        system but on asymmetry in accuracy of protentions. As projections of
        the future manifest as capital evaluations in the present, the manifold
        virtual flows down from banks of computers running at breakneck speed
        and cascades (via capital) into physical effects. We want an
        encyclopedia of effects of agents operating at differential temporal
        speeds, a bestiary that allows us to handle these effects as they loop
        strangely back from the future. */ We aim to use this map of time as a
        tool to design ways of accelerating or decelerating time within specific
        systems.
      </p>
      <EssayHeading>Time and Cybernetics </EssayHeading>

      <p>
        For this project, we set out to investigate how different temporalities
        (defined as volatility) for agents in a system or collection of systems
        interact as simultaneous processes and as a whole. For us, relative
        temporalities of subsystems within larger systems pose an interesting
        question: How might an agent distort a system using/altering its own or
        others experience of time? To use the example of a process plant as a
        real time system. A process plant will typically contain a variety of
        sensors (thermocouple, flow meters), actuators (valves, heat exchangers)
        and measured variables (temperature, pressure, flow, status of device)
        to perform multiple operations and produce an output which they all
        respond to. All these components will act (sense, produce a change) at
        their respective temporal intervals. These components have feedback
        loops to respond to changes in the state but have clearly defined
        boundaries (diameter of pipe, volume of storage tank). In this example,
        what would happen if a pump were to suddenly decrease or increase its
        rotations which in turn would reduce the flow/pressure in the system?
        How would the other components respond? Will they increase or decrease
        the intervals by which they act? Another example illustrating the
        importance of relative experiences of time in a collection of systems is
        the relationship between the market and climate. The market seems to
        operate on a much faster timescale than the climate which could
        partially explain the markets delayed abilities to respond to climate’s
        signals. This may also be explained by the poorly designed feedback
        loops of the market. (It must be noted that both systems contain
        subsystems of varying timescales). In a dynamic cybernetic world of
        agents recursively reproducing themselves with different experiences of
        non-linear time. How do agents coordinate themselves in relation to
        other agents? Can manipulating the feedback loop of a system alter its
        own experience of time and what effect (if any) does this have on the
        rest of the wider system(s)? Can altering its own experience of time by
        desensitizing its feedback loops?
      </p>
      <EssayHeading>
        Time on the Ground: Intercropping and Simulation
      </EssayHeading>
      <p>
        /*Intercropped fields are an entanglement of different systems, moving
        at different times. The Stack, a geopolitical model loosely based on
        TCP/IP structures, can be used as a lens to trance the relationships
        between these systems. We see the users as the plants, pollinators and
        pests. The interface layer are the perceptual bottlenecks of the global
        computation. In intercropping systems there are many bottlenecks;
        farmers uploading observations, sensors wired into tractors, soil and
        plants, photographs taken by drones and satellites. Addresses are
        free-form aggregations of data in the software used to track
        agricultural data. The city layer is the space within this network that
        each participant has access to; while a plant has ability to access the
        software spaces, the programmer is likely totally disconnected from
        conditions in the soil, especially those directly imperceptible to
        humans. The cloud layer is the technological infrastructure tying these
        threads together, the layer of roaming algorithms and
        corporate-software-state control. The earth layer is the substance every
        other layer is composed of, the raw matter.*/ Our artefact is a map of
        an intercropping system. Like all maps it is highly simplified. The map
        is a simulation. It takes four agents (soybean, sugarcane, pollinator
        and plant destroyer), defines their internal structure and interactions
        with their environment. Underneath these agents the simulation stretches
        the control mechanisms of capital and a fungal agent. Both are symbiotic
        partners that are manifested in the environment through the altered
        behavioral patterners of their infected partners. By repeatedly running
        the simulation and interpreting results we slowly build an ecological
        bestiary, a plan of the coiling and uncoiling of time based on different
        patterns of growth, death, reproduction and survival of the intercropped
        agents. The simulation operates on Husserl’s time. Every frame is a
        simultaneity, the move between frames is a sequential updating of all
        information in the system. As it stands the simulation, like many
        cybernetic systems has rigid limited protention and laser cut sequential
        retentions. The simultaneity and subsequent retention constitute the
        ‘inside’ of each agent, these slot neatly into schemata. The protention
        is a range of values that the system stands ready to accept. These are
        values can be contingent relative to the system and it is this
        contingency that generates the ‘effect’ of time. In Technical Mentality,
        Simondon characterizes linear thinking as being grounded in axioms at
        one end and proceeding in sequential, discrete steps. The implication of
        this is that contingency is needed to establish any temporality
        otherwise the conclusions of the thought would be manifested immediately
        from the axioms. The unfolding of time in our system is characterized by
        the periodic measurement of values generated by processes external to
        the system. Potential Aside – Recursion and Contingency*. Each agent is
        a system in miniature (the system fractalizes). As our agents navigate
        time, they are blind four times over to their environment: Agents cannot
        pick up on contingent changes happening at higher rates than their
        temporal interval. Agents struggle to determine causality in systems
        moving out of sync with their temporal interval. Agents struggle to
        establish causality due to increments at finer precision than that to
        which they measure. Agents struggle to establish causality in occurring
        over time periods that stretch the limits of their retention. These
        blind spots involve temporal asymmetries. The artefact diagram maps
        methods of bottoming out a system that proceeds from simultaneity to
        simultaneity via a recursive movement. Recursive Acceleration: reducing
        the temporal interval via a positive feedback process enables run-away
        processes to proliferate more easily. As the object reaches the upper
        frame limit of the simulation the simulation loses utility and drifts
        free of reality. The agent that recursively increases its speed must
        survive long enough to reach escape velocity. Recursive Fractalization:
        at each recursive step the agent generates new objects for the system to
        track. As the scope of the real in the simultaneity widens eventually
        the algorithm can no longer bear the weight.
      </p>
      <EssayHeading>References: </EssayHeading>
      <p>
        Donella H. Meadows (2008), Thinking in Systems: A Primer Washington, DC:
        Earthscan.
      </p>
      <p>
        K. Erciyes, Distributed Real-Time Systems, Computer Communications and
        Networks, (https://doi.org/10.1007/978-3-030-22570-4_1)
      </p>
      <p>
        Mario di Bernardo and Pietro DeLellis (2014), Pinning control.
        Scholarpedia, 9(8):29958
        (http://www.scholarpedia.org/w/index.php?title=Pinning_control&action=cite&rev=14329)
      </p>

        <p>
          Chen Xu, Xinsong Yang, Jianquan Lu,Member, IEEE, Jianwen Feng, Fuad E.
          Alsaadi, and Tasawar Hayat (2018), Finite-Time Synchronization of
          Networks via Quantized Intermittent Pinning Control. IEEE TRANSACTIONS
          ON CYBERNETICS, VOL. 48, NO. 10
        </p>

        <p> Yuk Hui (), Preface: The Time of, Execution</p>
        <EssayHeading> Glossary: </EssayHeading>
        <p>
          {" "}
          System - ‘A set of elements or parts that is coherently organized and
          interconnected in a pattern or structure that produces a
          characteristic set of behaviours.. ‘ (Meadows, 2008 , pp 188)
        </p>
        <p> 
        Real-Time system - A real-time system operates with a time constraint,
        where the time that the output produced is significant. In other words,
        producing the output at some other time than the required time may be
        meaningless.
        </p>
        <p>
          System theory - “A framework for conceptualising the self-regulatory
          and self-organising processes governing inputs to systems, the
          transformations of inputs into outputs and feedback loops”
        </p>
        <p>
          Feedback Loops - “The mechanism (rule or information flow or signal)
          that allows a change in a stock to affect a flow into or out of that
          same stock” (Meadows, 2008 , pp 188)
        </p>
        <Image src={Feedback}></Image>
        <p>
          Recursivity - “A recursive function (in Computer Science) simply means
          a function that calls itself until a halting state is reached.” (Yuk
          Hui). “Programming makes use of routines called ‘procedures’ which may
          need to execute other procedures. In self-referential programming, the
          procedure calls itself.” (Ron Eglash)
        </p>
        <EssayCodeText>{`void RecursiveFunction(State state){ 
                ---series of perceived events/procedures--- 

                RecursiveFunction(state); 
          } 
          `}
        </EssayCodeText>
        <p> Temporal Interval – The clock time between an agent’s simultaneities.</p>
    </EssayTextWrapper>
  )
}

export default EssayText
