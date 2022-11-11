import Buttons from '../js/Buttons.js'

class Video extends React.Component {
  state = {
    'playingVideo': false
  }
  playVideo() {
    // You can use the play method as normal on your video ref
    // debugger;
    this.setState({'playingVideo':true})
    //this.refs.vidRef.getInternalPlayer().playVideo()
  }
  
  pauseVideo() {
    // Pause as well
    this.refs.vidRef.getInternalPlayer().pauseVideo()
  }
  
  // You can pass your function references to your child components as props (here passing down to the Buttons component)
  render() {

    return(
      <div>
        <ReactPlayer url="https://www.youtube.com/watch?v=y6HxORx0g-g"
            width="100%"
            pip={true}
            ref="vidRef" 
            controls={true}
            playing={this.state.playingVideo}
          ></ReactPlayer>
        
        <Buttons playVideo={this.playVideo.bind(this)} 
                 pauseVideo={this.pauseVideo.bind(this)} />
      </div>
    );
  }
}

export default Video