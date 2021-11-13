const render = () => {
    renderGameClock()
    renderScores()
    renderTimeOuts()
    renderButtons()
    renderShotClock()
  }
  const renderGameClock = () => {
    let gameClock = document.getElementsByClassName("top-of-time") [0]
    let gameQuarter = document.getElementsByClassName("game-quarter") [0]
    gameClock.textContent = state.gameClock
    gameQuarter.textContent = state.gameQuarter
  }
  const renderScores = () => {
    let homeScore = document.getElementsByClassName("home-score")[0]
    let visitorScore = document.getElementsByClassName("visitor-score")[0]
    homeScore.textContent = state.homeScore
    visitorScore.textContent = state.visitorScore
  }
  const renderTimeOuts = () => {
    let timeoutHome = document.getElementsByClassName("timeout-home")[0]
    let timeoutVisitor = document.getElementsByClassName("timeout-visitor")[0]
    timeoutHome.textContent = "Timeout:" + state.timeoutHome
    timeoutVisitor.textContent = "Timeout:" + state.timeoutVisitor
  }
  const renderButtons = () => {
    renderPlayButton()
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

