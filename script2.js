// fetch the dogs list
function getDogs() {
    fetch('http://localhost:3000/dogs')
        .then(function (response) {
            // Trasform server response to get the dogs
            response.json().then(function (dogs) {
                appendDogsToDOM(dogs);
            });
        });
};

function appendDogsToDOM(dogs) {
    // create and append tags
    for (let i = 0; i < dogs.length; i++) {
        // create image obj
        let img = document.createElement('img');
        img.src = dogs[i].img;
        // create name obj
        let name = document.createElement('p');
        name.innerText = dogs[i].name;

        // create a container for img and name
        let container = document.createElement('div');
        // append elements to container
        container.appendChild(img);
        container.appendChild(name);

        // append container to DOM (list div)
        list.appendChild(container);
    }
}

getDogs();
