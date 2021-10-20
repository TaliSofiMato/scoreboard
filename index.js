
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
  gameStatus: "Unstarted",
  gameClock: "12:00",
  gameClockTimer: null,
  shotClock: "40",
  shotClockTimer: null,
  gameQuarter: "1st"
}

const play = () => {
  let playButton = document.getElementsByClassName("play")[0]
  if (state.gameStatus === "Unstarted") {
    state.gameStatus = "Playing"
    renderPlayButton()
    startTimer()
    startShotClock()
  } else if (state.gameStatus === "Playing") {
    state.gameStatus = "Paused"
    renderPlayButton()
    clearInterval(state.gameClockTimer)
    pauseShotClock()
  } else if (state.gameStatus === "Paused") {
    state.gameStatus = "Playing"
    renderPlayButton()
    startTimer() 
    startShotClock()
  }
}
const startShotClock = () => {
  state.shotClockTimer = setInterval(() => {  
    let shotClock = document.getElementsByClassName("shot-clock") [0]
    // get the value
    let shotClockValue = shotClock.textContent
    if (shotClockValue==='0'){
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
  clearInterval(state.shotClockTimer)
}
const startTimer = () => { 
  state.gameClockTimer = setInterval(()=>{
    let clock = document.getElementsByClassName("top-of-time")[0]
    let clockValue = clock.textContent
    let numbers = clockValue.split(':')
    let [minutes,seconds]=numbers

    if (clockValue==='0:00') { 
      clock.textContent='end'
      clearInterval(state.gameClockTimer)
      clearInterval(state.shotClockTimer)
      setTimeout(()=>{
        prepClock()
        renderPlayButton()
      },3000)
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

const prepClock = () => {
  state.gameQuarter = "2nd"
  state.gameClock = "12:00"
  state.gameStatus = "Unstarted"
  state.shotClock = 40
  renderGameClock()
}
const renderGameClock = () => {
  let gameClock = document.getElementsByClassName("top-of-time") [0]
  let shotClock = document.getElementsByClassName("shot-clock") [0]
  let gameQuarter = document.getElementsByClassName("game-quarter") [0]
  gameClock.textContent = state.gameClock
  shotClock.textContent = state.shotClock
  gameQuarter.textContent = state.gameQuarter
}
const renderPlayButton = ( ) => {
  let playButton = document.getElementsByClassName("play")[0]
  const labels = {
    "Unstarted": "Play",
    "Playing": "Pause",
    "Paused": "Resume"
  }
  playButton.textContent = labels[state.gameStatus]
}
const avarage = (totals) => {
  let sum = 0
  totals.forEach((i) => {
      sum = sum + i
  } )
  return sum / totals.length
}