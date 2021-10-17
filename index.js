let gameClock
let shotClock
const PHX2 = () => {
  let score = document.getElementsByClassName("scoreleft")[0]
  let scoreValue = score.textContent
  score.textContent = parseInt(scoreValue) + 2
  resetShotClock()
}
const PHX3 = () => {
  let score = document.getElementsByClassName("scoreleft")[0]
  let scoreValue = score.textContent
  score.textContent = parseInt(scoreValue) + 3
  resetShotClock()
}
const LAC2 = () => {
  let score = document.getElementsByClassName("scoreright")[0]
  let scoreValue = score.textContent
  score.textContent = parseInt(scoreValue) + 2
  resetShotClock()
}
const LAC3 = () => {
  let score = document.getElementsByClassName("scoreright")[0]
  let scoreValue = score.textContent
  score.textContent = parseInt(scoreValue) + 3
  resetShotClock()
}

let state = {
  gameStatus: "Unstarted"
}

const play = () => {
  let playButton = document.getElementsByClassName("play")[0]
  if (state.gameStatus === "Unstarted") {
    state.gameStatus = "Playing"
    playButton.textContent = "Pause"
    startTimer()
    startShotClock()
  } else if (state.gameStatus === "Playing") {
    state.gameStatus = "Paused"
    playButton.textContent = "Resume"
    clearInterval(gameClock)
    pauseShotClock()
  } else if (state.gameStatus === "Paused") {
    state.gameStatus = "Playing"
    playButton.textContent = "Pause"
    startTimer() 
    startShotClock()
  }
}
const startShotClock = () => {
  shotClock = setInterval(() => {  
    let shotClock = document.getElementsByClassName("shot-clock") [0]
    // get the value
    let shotClockValue = shotClock.textContent
    if (shotClockValue===0){
      shotClockValue = 40
      shotClock.style.color = "yellow"
      shotClock.textContent = shotClockValue
    } else {
      // substract the new value
      shotClockValue = shotClockValue - 1
      // set new value
      shotClock.textContent = shotClockValue
      if (shotClockValue === 5) {
        shotClock.style.color = "red"
      } 
    }
  }, 1000)
}
const resetShotClock = () => {
  let shotClock = document.getElementsByClassName("shot-clock") [0]
  shotClock.textContent = 40
}
const pauseShotClock = () => {
  clearInterval(shotClock)
}
const startTimer = () => { 
  gameClock = setInterval(()=>{
    let clock = document.getElementsByClassName("top-of-time")[0]
    let clockValue = clock.textContent
    let numbers = clockValue.split(':')
    let [minutes,seconds]=numbers
    debugger
    if (clockValue==='0:00') { 
      clock.textContent='end'
      clearInterval(gameClock)
    } else {
      if (seconds==='00') {
        minutes = minutes - 1;
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
    }
  }, 1000)
}
  