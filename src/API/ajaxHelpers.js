const cohortName = "2306-GHP-ET-WEB-FT-SF";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

const fetchAllPlayers = async () => {
  try {
    const response = await fetch(`${API_URL}/players`);
    const result = await response.json();
    const players = result.data.players;
    return players;
  } catch (err) {
    console.error("Uh oh, trouble fetching players!", err);
  }
};

const fetchSinglePlayer = async(puppyId) => {
  try {
    const response = await fetch (`${API_URL}/players/${puppyId}`)
    const result = await response.json()
    const pupInfo = result.data.player
    return pupInfo
  } catch (err) {
    console.error(`Oh no, trouble fetching player #${puppyId}!`, err);
  }
}

export { fetchAllPlayers, fetchSinglePlayer }
