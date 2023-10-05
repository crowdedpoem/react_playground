
import './Overlay.css'

export const Overlay = () => {

    return(
        <div className="overlay">

        <button onClick={toggleOverlay}>Show/Hide Overlay</button>
      </div>
    )
}

function toggleOverlay(){
    let overlayDiv = document.getElementsByClassName('overlay')[0]
    console.log("turn off");
    overlayDiv.style.opacity = 0;
  }