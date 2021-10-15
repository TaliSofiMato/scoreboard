let timer
const PHX2 = () => {
  let score = document.getElementsByClassName("scoreleft")[0]
  let scoreValue = score.textContent
  score.textContent = parseInt(scoreValue) + 2
}
const PHX3 = () => {
  let score = document.getElementsByClassName("scoreleft")[0]
  let scoreValue = score.textContent
  score.textContent = parseInt(scoreValue) + 3
}
const LAC2 = () => {
  let score = document.getElementsByClassName("scoreright")[0]
  let scoreValue = score.textContent
  score.textContent = parseInt(scoreValue) + 2
}
const LAC3 = () => {
  let score = document.getElementsByClassName("scoreright")[0]
  let scoreValue = score.textContent
  score.textContent = parseInt(scoreValue) + 3
}

let state = {
  gameStatus: "Unstarted"
}

const play = () => {
  let playButton = document.getElementsByClassName("play")[0]
  if (state.gameStatus == "Unstarted") {
    state.gameStatus = "Playing"
    playButton.textContent = "Pause"

    timer = setInterval(()=>{
      let clock = document.getElementsByClassName("top-of-time")[0]
      let clockValue = clock.textContent
      let numbers = clockValue.split(':')
      let [minutes,seconds]=numbers
      
      if(seconds==0){
          if (clockValue=='0:00') {
              clock.textContent='end'
              clearInterval(timer)
          }
          minutes = minutes-1;
          seconds = 59
          let newTime = [minutes, seconds].join(':')
          clock.textContent = newTime
      } else {
          seconds = seconds - 1
          if (seconds < 10) {
              seconds = '0' + seconds
          }
          let newTime = [minutes, seconds].join(':')
          clock.textContent = newTime
      }
    }, 1000)
  } else if (state.gameStatus == "Playing") {
    state.gameStatus = "Paused"
    playButton.textContent = "Resume"
    clearInterval(timer)
  } else if (state.gameStatus == "Paused") {
    state.gameStatus = "Playing"
    playButton.textContent = "Pause"
    timer = setInterval(()=>{
      let clock = document.getElementsByClassName("top-of-time")[0]
      let clockValue = clock.textContent
      let numbers = clockValue.split(':')
      let [minutes,seconds]=numbers
      
      if(seconds==0){
          if (clockValue=='0:00') {
              clock.textContent='end'
              clearInterval(timer)
          }
          minutes = minutes-1;
          seconds = 59
          let newTime = [minutes, seconds].join(':')
          clock.textContent = newTime
      } else {
          seconds = seconds - 1
          if (seconds < 10) {
              seconds = '0' + seconds
          }
          let newTime = [minutes, seconds].join(':')
          clock.textContent = newTime
      }
    }, 1000)
  }
}
  