/**
 * Restarts the audio of the clip.
 */
function restartAudio(ElementId){
  document.getElementById(ElementId).currentTime = 0
}
/**
 * Highlights element of your choice.
 * 
 */
function highlight(ElementId){
  document.getElementById(ElementId).classList.add("highlighted")
}
function unHighlight(ElementId){
  document.addEventListener("keyup", function(ev) {
    document.getElementById(ElementId).classList.remove("highlighted")
  })
}
function createAudio(id,audio){
  const audioElement = document.createElement("audio")
  audioElement.id = id
  audioElement.src = audio
  document.body.appendChild(audioElement)
  audioElement.play()
  setTimeout(function(){
    audioElement.remove()
    
    
  }, 5000)
}
document.addEventListener("keydown" , function(ev) {
  if (ev.key.toLowerCase() == "a") {
    
 
    highlight("clapP")
    unHighlight("clapP")
    createAudio("clap","sounds/clap.mp3")


  } 
  if (ev.key.toLowerCase() == "g") {
    
  
    highlight("boomP")
    unHighlight("boomP")
    createAudio("boom","sounds/boom.mp3")

  } 
  if (ev.key.toLowerCase() == "s") {

  
    highlight("hihatP")
    unHighlight("hihatP")
    createAudio("hihat","sounds/hihat.mp3")

  } 
  if (ev.key.toLowerCase() == "d") {
  
    highlight("kickP")
    unHighlight("kickP")
    createAudio("kick","sounds/kick.mp3")

  } 
  if (ev.key.toLowerCase() == "f") {
    
    highlight("openhatP")
    unHighlight("openhatP")
    createAudio("openhat","sounds/openhat.mp3")

  } 
  if (ev.key.toLowerCase() == "k") {
    
    highlight("tomP")
    unHighlight("tomP")
    createAudio("tom","sounds/tom.mp3")

  } 
  if (ev.key.toLowerCase() == "l") {
    highlight("tinkP")
    unHighlight("tinkP")
    createAudio("tink","sounds/tink.mp3")

  } 
  if (ev.key.toLowerCase() == "j") {
    highlight("snareP")
    unHighlight("snareP")
    createAudio("snare","sounds/snare.mp3")

  } 
  if (ev.key.toLowerCase() == "h") {
    highlight("rideP")
    unHighlight("rideP")
    createAudio("ride","sounds/ride.mp3")


    
  } 


})
