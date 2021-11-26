const render = () => {
  renderGameClock();
  renderScores();
  renderTimeOuts();
  renderShotClock();
  renderPlayButton();
  renderScoreButtons();
  renderTeamNames();
  renderRanks();
};
const renderGameClock = () => {
  const gameClock = document.getElementsByClassName('top-of-time')[0];
  const gameQuarter = document.getElementsByClassName('game-quarter')[0];
  gameClock.textContent = state.gameClock;
  gameQuarter.textContent = state.gameQuarter;
};
const renderScores = () => {
  const homeScore = document.getElementsByClassName('home-score')[0];
  const visitorScore = document.getElementsByClassName('visitor-score')[0];
  homeScore.textContent = state.homeScore;
  visitorScore.textContent = state.visitorScore;
};
const renderTimeOuts = () => {
  const timeoutHome = document.getElementsByClassName('timeout-home')[0];
  const timeoutVisitor = document.getElementsByClassName('timeout-visitor')[0];
  timeoutHome.textContent = `Timeout:${state.timeoutHome}`;
  timeoutVisitor.textContent = `Timeout:${state.timeoutVisitor}`;
};
const renderShotClock = () => {
  const shotClock = document.getElementsByClassName('shot-clock')[0];
  shotClock.textContent = state.shotClock;
  shotClock.style.color = 'yellow';
  if (state.shotClock <= 5) {
    shotClock.style.color = 'red';
  }
};

const renderPlayButton = () => {
  const playButton = document.getElementsByClassName('play')[0];
  const labels = {
    Unstarted: 'Play',
    Playing: 'Pause',
    Paused: 'Resume',
  };
  playButton.textContent = labels[state.gameStatus];
};

const renderScoreButtons = () => {
  const scoreButtons = document.getElementsByClassName('score-button');
  Array.from(scoreButtons).forEach((button) => {
    const buttonLabels = {
      home3: `${state.homeTeam} 3 points`,
      home2: `${state.homeTeam} 2 points`,
      visitor2: `${state.visitorTeam} 2 points`,
      visitor3: `${state.visitorTeam} 3 points`,
    };
    button.textContent = buttonLabels[button.classList[1]];
  });
};

const renderTeamNames = () => {
  const teamNames = document.getElementsByClassName('team-name');
  Array.from(teamNames).forEach((team) => {
    const teamLabels = {
      'home-team-name': state.homeTeam,
      'visitor-team-name': state.visitorTeam,
    };
    team.textContent = teamLabels[team.classList[1]];
  });
};
const renderRanks = () => {
  const ranks = document.getElementsByClassName('rank');
  Array.from(ranks).forEach((rank) => {
    const rankLabels = {
      'home-rank': state.homeRank,
      'visitor-rank': state.visitorRank,
    };
    rank.textContent = rankLabels[rank.classList[1]];
  });
};
