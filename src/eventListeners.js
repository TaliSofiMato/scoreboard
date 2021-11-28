import state from './state';
import render from './renderers';

export const swish = (team, num) => {
  if (state.gameStatus === 'Playing') {
    if (team === 'home') {
      state.homeScore += num;
    } else if (team === 'visitor') {
      state.visitorScore += num;
    }
    render();
    resetShotClock();
  }
};
export const play = () => {
  if (state.gameStatus === 'Unstarted') {
    state.gameStatus = 'Playing';
    render();
    startTimer();
    startShotClock();
  } else if (state.gameStatus === 'Playing') {
    state.gameStatus = 'Paused';
    render();
    clearInterval(state.gameClockTimer);
    pauseShotClock();
  } else if (state.gameStatus === 'Paused') {
    state.gameStatus = 'Playing';
    render();
    startTimer();
    startShotClock();
  }
};
const startShotClock = () => {
  state.shotClockTimer = setInterval(() => {
    if (state.shotClock === 0) {
      state.shotClock = 40;
      render();
    } else {
      state.shotClock -= 1;
      render();
    }
  }, 1000);
};
const resetShotClock = () => {
  state.shotClock = 40;
  render();
};
const pauseShotClock = () => {
  clearInterval(state.shotClockTimer);
};
const startTimer = () => {
  state.gameClockTimer = setInterval(() => {
    let [minutes, seconds] = state.gameClock.split(':');
    if (state.gameClock === '0:00') {
      state.gameClock = 'end';
      render();
      clearInterval(state.gameClockTimer);
      clearInterval(state.shotClockTimer);
      setTimeout(() => {
        prepClock();
        render();
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
      state.gameClock = [minutes, seconds].join(':');
      render();
    }
  }, 1000);
};

const prepClock = () => {
  const quarters = {
    '1st': '2nd',
    '2nd': '3rd',
    '3rd': '4th',
  };
  state.gameQuarter = quarters[state.gameQuarter];
  state.gameClock = '12:00';
  state.gameStatus = 'Unstarted';
  state.shotClock = 40;
  render();
};
