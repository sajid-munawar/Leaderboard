const scoresContainer = document.querySelector(".scores-container");


export const scores = [
  {
    name: "Name",
    score: 100,
  },
  {
    name: "Name",
    score: 340,
  },
  {
    name: "Name",
    score: 60,
  },
  {
    name: "Name",
    score: 80,
  },
  {
    name: "Name",
    score: 10,
  },
];

scores.forEach(score => {
    scoresContainer.innerHTML += `
    <div><span>${score.name} :</span><span>${score.score}</span></div>
    `;
})
