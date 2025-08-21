async function getMovie() {
  const nomeFilme = document.getElementById('filme').value;

  if (!nomeFilme) {
    document.getElementById('resultado').innerHTML = "<p>Digite um filme válido!</p>";
    return;
  }

  try {
    const resposta = await axios.get(`https://www.omdbapi.com/?t=${nomeFilme}&apikey=222731b8&plot=short`);

    if (resposta.data.Response === "False") {
      document.getElementById('resultado').innerHTML = "<p>Filme não encontrado 😢</p>";
      return;
    }

    const filme = resposta.data;

    document.getElementById('resultado').innerHTML = `
      <h2>${filme.Title} (${filme.Year})</h2>
      <img src="${filme.Poster}" alt="Poster do filme">
      <p><b>Gênero:</b> ${filme.Genre}</p>
      <p><b>Duração:</b> ${filme.Runtime}</p>
      <p><b>Nota IMDb:</b> ⭐ ${filme.imdbRating}</p>
      <p><b>Sinopse:</b> ${filme.Plot}</p>
    `;
  } catch (error) {
    console.error(error);
    document.getElementById('resultado').innerHTML = "<p>Erro ao buscar filme 🚨</p>";
  }
}
