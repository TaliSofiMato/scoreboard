import { swish, play } from './eventListeners';
import render from './renderers';

window.play = play;
window.swish = swish;
window.onload = render;
