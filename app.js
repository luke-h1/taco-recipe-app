const API_URL = `http://taco-randomizer.herokuapp.com/random/?full-taco=true`;
const outputEl = document.getElementById("container");

async function fetchTacoData() {
  const res = await fetch(`${API_URL}`);
  const json = await res.json();
  return json;
}

async function showTacos() {
  const data = await fetchTacoData();
  console.log(data);
  let output = "";
  for (let i = 0; i < 20; i++) {
    let output = "";
    output += `
    <div class="card">
    <h1 class="name">${data.name}</h1>
    <p class="recipe">${data.recipe}</p>
    <div class="url-container">
      <a href="#">${data.url}</a>
    </div>
  </div>
    
    
    `;
    outputEl.innerHTML = output;
  }


}

// EVENT LISTENERS
document.addEventListener("DOMContentLoaded", showTacos);
