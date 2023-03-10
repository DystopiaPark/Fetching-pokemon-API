document.querySelector("#search").addEventListener("click", getPokemon);

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
  return string.toLowerCase();
}

function getPokemon(e) {
  const name = document.querySelector("#pokemonName").value;
  const pokemonName = lowerCaseName(name);
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".pokemonBox").innerHTML = `
     <div>
          <img
            src="${data.sprites.other["official-artwork"].front_default}"
            alt="${capitalizeFirstLetter(data.name)}"
          />
        </div>
        <div class="pokemonInfo">
          <h1>${capitalizeFirstLetter(data.name)}</h1>
          <p>Weight: ${data.weight}</p>
          <p>Height: ${data.height}</p>
          <p>Ability 1: ${data.abilities[0].ability.name}</p>
          <p>Ability 2: ${data.abilities[1].ability.name}</p>
        </div>
     `;
    })
    .catch((err) => {
      console.log("Pokemon not found", err);
    });
  e.preventDefault();
}
