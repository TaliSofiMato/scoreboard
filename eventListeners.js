
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
      if (state.shotClock ===0) {
        state.shotClock = 40
        renderShotClock()
      } else {
        state.shotClock = state.shotClock - 1
        renderShotClock()
      }
    }, 1000)
  }
  const resetShotClock = () => {
    state.shotClock = 40
    renderShotClock()
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
  