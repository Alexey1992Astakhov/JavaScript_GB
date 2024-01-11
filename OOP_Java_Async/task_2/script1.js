const dogs = document.querySelector('.dogs');

console.log(dogs);

function getDogs() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
        let image = document.createElement("img");
        image.src = data.message;
        dogs.appendChild(image);
    })
}

document.addEventListener("DOMContentLoaded", () => {
    let counter = 0;
    const interval = setInterval(() => {
        getDogs();
        counter++;
        if (counter === 10) {
            clearInterval(interval);
        }
    }, 3000);
})

