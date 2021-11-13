
let state = {
  gameStatus: "Unstarted",
  gameClock: "12:00",
  gameClockTimer: null,
  shotClock: "40",
  shotClockTimer: null,
  gameQuarter: "1st",
  phxScore: 0,
  lacScore: 0,
  timeoutPhx: 7,
  timeoutLac: 7,
  phxRank: 2, 
  lacRank: 4
}
window.onload = render