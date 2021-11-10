
const PHX2 = () => {
  state.phxScore = state.phxScore +2
  renderScores()
  resetShotClock()
}
const PHX3 = () => {
  state.phxScore = state.phxScore + 3
  renderScores()
  resetShotClock()
}
const LAC2 = () => {
  state.lacScore = state.lacScore + 2
  renderScores()
  resetShotClock()
}
const LAC3 = () => {
  state.lacScore = state.lacScore + 3
  renderScores() 
  resetShotClock()
}

const play = () => {
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
  