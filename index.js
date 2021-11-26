const state = {
  gameStatus: 'Unstarted',
  gameClock: '12:00',
  gameClockTimer: null,
  shotClock: '40',
  shotClockTimer: null,
  gameQuarter: '1st',
  homeScore: 0,
  visitorScore: 0,
  timeoutHome: 7,
  timeoutVisitor: 7,
  homeRank: 2,
  visitorRank: 4,
  homeTeam: 'PHX',
  visitorTeam: 'LAC',
};
window.onload = render;
