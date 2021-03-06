export const refreshScores = async () => {
  const scoresContainer = document.querySelector('.scores-container');
  scoresContainer.innerHTML = '';
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/wqOFudaUN1eOIEowFYFO/scores/',
  );
  const json = await response.json();

  json.result.forEach((score) => {
    scoresContainer.innerHTML += `
    <div class='p-1'><span>${score.user} :</span><span>${score.score}</span></div>
    `;
  });
};

export const addScore = async (e) => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/wqOFudaUN1eOIEowFYFO/scores/',
    {
      method: 'POST',
      body: JSON.stringify({
        name: 'My cool new game',
        user: `${e.target.name.value}`,
        score: `${e.target.score.value}`,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  return response;
};

window.addEventListener('load', refreshScores);
