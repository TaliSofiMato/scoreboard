const render = () => {
    renderGameClock()
    renderScores()
    renderTimeOuts()
    renderButtons()
    renderShotClock()
  }
  const renderScores = () => {
    let phxScore = document.getElementsByClassName("scoreleft")[0]
    let lacScore = document.getElementsByClassName("scoreright")[0]
    phxScore.textContent = state.phxScore
    lacScore.textContent = state.lacScore
  }
  const renderTimeOuts = () => {
    let timeoutPhx = document.getElementsByClassName("timeoutlac")[0]
    let timeoutLac = document.getElementsByClassName("timeoutphx")[0]
    timeoutPhx.textContent = "Timeout:" + state.timeoutPhx
    timeoutLac.textContent = "Timeout:" + state.timeoutLac
  }
  const renderButtons = () => {
    renderPlayButton()
  }
  const renderGameClock = () => {
    let gameClock = document.getElementsByClassName("top-of-time") [0]
    let gameQuarter = document.getElementsByClassName("game-quarter") [0]
    gameClock.textContent = state.gameClock
    gameQuarter.textContent = state.gameQuarter
  }
  const renderShotClock = () => {
    let shotClock = document.getElementsByClassName("shot-clock") [0]
    shotClock.textContent = state.shotClock
    shotClock.style.color = "yellow"
    if (state.shotClock <= 5) {
    shotClock.style.color = "red"
    }
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
  
