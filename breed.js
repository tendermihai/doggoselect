async function getAllBreeds() {
  let data = await fetch("https://dog.ceo/api/breeds/list/all");
  let conv = await data.json();
  attachOptions(conv);
}

let dog = "";

function attachOptions(data) {
  let breeds = Object.keys(data.message);

  console.log("aici");
  let select = document.querySelector(".breeds");

  for (let i = 0; i < breeds.length; i++) {
    let option = document.createElement("option");
    option.classList.add("options");
    option.textContent = breeds[i];

    select.appendChild(option);
  }
}

getAllBreeds();

const dogImg = document.querySelector(".dog-image");

function getDog() {
  fetch(`https://dog.ceo/api/breed/${dog}/images`)
    .then((data) => data.json())
    .then((response) => {
      if (response.status === "success") {
        const randomDog =
          response.message[Math.floor(Math.random() * response.message.length)];
        dogImg.src = randomDog;
      }
    });
}

function dogSelected(event) {
  dog = event.target.value;
  getDog(dog);
}
