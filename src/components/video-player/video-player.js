import React from 'react'
import ReactPlayer from 'react-player'
import styled from "styled-components";
const VideoPlayerWrapper = styled.div`
  /* position: relative;
  padding-top: 56.25%  */
`

const StyledVideoPlayer = styled(ReactPlayer)`
  /* position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; */
`
class VideoPlayer extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U'
      }
    }

  
    render() {
      return (
          <VideoPlayerWrapper>
                <StyledVideoPlayer url={this.props.url} volume={1} muted={true} pip={true} />
          </VideoPlayerWrapper>
      )
    }
  }
  
  export default VideoPlayer
  