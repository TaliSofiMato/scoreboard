window.window.render = () => {
  window.renderGameClock();
  window.renderScores();
  window.renderTimeOuts();
  window.renderShotClock();
  window.renderPlayButton();
  window.renderScoreButtons();
  window.renderTeamNames();
  window.renderRanks();
};
window.renderGameClock = () => {
  const gameClock = document.getElementsByClassName('top-of-time')[0];
  const gameQuarter = document.getElementsByClassName('game-quarter')[0];
  gameClock.textContent = window.state.gameClock;
  gameQuarter.textContent = window.state.gameQuarter;
};
window.renderScores = () => {
  const homeScore = document.getElementsByClassName('home-score')[0];
  const visitorScore = document.getElementsByClassName('visitor-score')[0];
  homeScore.textContent = window.state.homeScore;
  visitorScore.textContent = window.state.visitorScore;
};
window.renderTimeOuts = () => {
  const timeoutHome = document.getElementsByClassName('timeout-home')[0];
  const timeoutVisitor = document.getElementsByClassName('timeout-visitor')[0];
  timeoutHome.textContent = `Timeout:${window.state.timeoutHome}`;
  timeoutVisitor.textContent = `Timeout:${window.state.timeoutVisitor}`;
};
window.renderShotClock = () => {
  const shotClock = document.getElementsByClassName('shot-clock')[0];
  shotClock.textContent = window.state.shotClock;
  shotClock.style.color = 'yellow';
  if (window.state.shotClock <= 5) {
    shotClock.style.color = 'red';
  }
};

window.renderPlayButton = () => {
  const playButton = document.getElementsByClassName('play')[0];
  const labels = {
    Unstarted: 'Play',
    Playing: 'Pause',
    Paused: 'Resume',
  };
  playButton.textContent = labels[window.state.gameStatus];
};

window.renderScoreButtons = () => {
  const scoreButtons = document.getElementsByClassName('score-button');
  Array.from(scoreButtons).forEach((button) => {
    const buttonLabels = {
      home3: `${window.state.homeTeam} 3 points`,
      home2: `${window.state.homeTeam} 2 points`,
      visitor2: `${window.state.visitorTeam} 2 points`,
      visitor3: `${window.state.visitorTeam} 3 points`,
    };
    button.textContent = buttonLabels[button.classList[1]]; // eslint-disable-line no-param-reassign
  });
};

window.renderTeamNames = () => {
  const teamNames = document.getElementsByClassName('team-name');
  Array.from(teamNames).forEach((team) => {
    const teamLabels = {
      'home-team-name': window.state.homeTeam,
      'visitor-team-name': window.state.visitorTeam,
    };
    team.textContent = teamLabels[team.classList[1]]; // eslint-disable-line no-param-reassign
  });
};
window.renderRanks = () => {
  const ranks = document.getElementsByClassName('rank');
  Array.from(ranks).forEach((rank) => {
    const rankLabels = {
      'home-rank': window.state.homeRank,
      'visitor-rank': window.state.visitorRank,
    };
    rank.textContent = rankLabels[rank.classList[1]]; // eslint-disable-line no-param-reassign
  });
};
