window.swish = (team, num) => {
  if (window.state.gameStatus === 'Playing') {
    if (team === 'home') {
      window.state.homeScore += num;
    } else if (team === 'visitor') {
      window.state.visitorScore += num;
    }
    window.render();
    resetShotClock();
  }
};
window.play = () => {
  if (window.state.gameStatus === 'Unstarted') {
    window.state.gameStatus = 'Playing';
    window.render();
    startTimer();
    startShotClock();
  } else if (window.state.gameStatus === 'Playing') {
    window.state.gameStatus = 'Paused';
    window.render();
    clearInterval(window.state.gameClockTimer);
    pauseShotClock();
  } else if (window.state.gameStatus === 'Paused') {
    window.state.gameStatus = 'Playing';
    window.render();
    startTimer();
    startShotClock();
  }
};
const startShotClock = () => {
  window.state.shotClockTimer = setInterval(() => {
    if (window.state.shotClock === 0) {
      window.state.shotClock = 40;
      window.render();
    } else {
      window.state.shotClock -= 1;
      window.render();
    }
  }, 1000);
};
const resetShotClock = () => {
  window.state.shotClock = 40;
  window.render();
};
const pauseShotClock = () => {
  clearInterval(window.state.shotClockTimer);
};
const startTimer = () => {
  window.state.gameClockTimer = setInterval(() => {
    let [minutes, seconds] = window.state.gameClock.split(':');
    if (window.state.gameClock === '0:00') {
      window.state.gameClock = 'end';
      window.render();
      clearInterval(window.state.gameClockTimer);
      clearInterval(window.state.shotClockTimer);
      setTimeout(() => {
        prepClock();
        window.render();
      }, 3000);
    } else {
      if (seconds === '00') {
        minutes -= 1;
        seconds = 59;
      } else {
        seconds -= 1;
        if (seconds < 10) {
          seconds = `0${seconds}`;
        }
      }
      window.state.gameClock = [minutes, seconds].join(':');
      window.render();
    }
  }, 1000);
};

const prepClock = () => {
  const quarters = {
    '1st': '2nd',
    '2nd': '3rd',
    '3rd': '4th',
  };
  window.state.gameQuarter = quarters[window.state.gameQuarter];
  window.state.gameClock = '12:00';
  window.state.gameStatus = 'Unstarted';
  window.state.shotClock = 40;
  window.render();
};
