async function getAllBreeds() {
  let data = await fetch("https://dog.ceo/api/breeds/list/all");
  let conv = await data.json();
  attachOptions(conv);
}

function attachOptions(data) {
  let breeds = Object.keys(data.message);

  console.log("aici");
  let select = document.querySelector(".breeds");

  for (let i = 0; i < breeds.length; i++) {
    let option = document.createElement("option");

    option.textContent = breeds[i];

    select.appendChild(option);
  }
}

getAllBreeds();
