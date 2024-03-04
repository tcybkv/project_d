const cardsContainer = document.getElementById('cards-container');
// const xhr = new XMLHttpRequest();
// xhr.open('GET', '../data/characters.json', true);

const request = async () => {
    try {
        const response = await fetch('../data/characters.json')
        const data = await response.json()
        data.forEach(character => {
            const { name, age, character_photo, about } = character;

            const card = document.createElement('div');
            card.classList.add('card');

            const img = document.createElement('img');
            img.src = character_photo;
            img.alt = `${name} photo`;

            const nameElem = document.createElement('h3');
            nameElem.textContent = name;

            const ageElem = document.createElement('p');
            ageElem.textContent = `Age: ${age}`;

            const aboutElem = document.createElement('span');
            aboutElem.textContent = `${about}`;

            card.appendChild(img);
            card.appendChild(nameElem);
            card.appendChild(ageElem);
            card.appendChild(aboutElem);

            cardsContainer.appendChild(card);
        })
    }catch (e) {
        console.error(e)
    }
}
request()
// xhr.onload = function () {
//     if (xhr.status >= 200 && xhr.status < 300) {
//         const characters = JSON.parse(xhr.responseText);
//         characters.forEach(character => {
//             const { name, age, character_photo, about } = character;
//
//             const card = document.createElement('div');
//             card.classList.add('card');
//
//             const img = document.createElement('img');
//             img.src = character_photo;
//             img.alt = `${name} photo`;
//
//             const nameElem = document.createElement('h3');
//             nameElem.textContent = name;
//
//             const ageElem = document.createElement('p');
//             ageElem.textContent = `Age: ${age}`;
//
//             const aboutElem = document.createElement('span');
//             aboutElem.textContent = `${about}`;
//
//             card.appendChild(img);
//             card.appendChild(nameElem);
//             card.appendChild(ageElem);
//             card.appendChild(aboutElem);
//
//             cardsContainer.appendChild(card);
//         });
//     } else {
//         console.error('Request failed with status:', xhr.status);
//     }
// };

// xhr.onerror = function () {
//     console.error('Error fetching characters');
// };
//
// xhr.send();
