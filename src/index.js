import './style.css';
import { addScore, refreshScores } from './modules/scores.js';

const form = document.querySelector('.form');
const refresh = document.querySelector('.refresh');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addScore(e);
  form.reset();
});

refresh.addEventListener('click', () => {
  refreshScores();
});