const apiUrl = "/animes";

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const animeList = document.getElementById("animeList");

        data.forEach(anime => {
            const animeCard = document.createElement("div");
            animeCard.classList.add("anime-card");

            const animeImage = document.createElement("img");
            animeImage.classList.add("anime-image");
            animeImage.src = anime.image;
            animeCard.appendChild(animeImage);

            const animeName = document.createElement("h2");
            animeName.textContent = anime.name;
            animeCard.appendChild(animeName);

            const animeDescription = document.createElement("p");
            animeDescription.textContent = anime.description;
            animeCard.appendChild(animeDescription);

            const characterList = document.createElement("ul");
            characterList.classList.add("character-list");

            anime.characters.forEach(character => {
                const characterItem = document.createElement("li");
                characterItem.classList.add("character");

                const characterImage = document.createElement("img");
                characterImage.classList.add("character-image");
                characterImage.src = character.image;

                const characterName = document.createElement("span");
                characterName.textContent = character.name;

                characterItem.appendChild(characterImage);
                characterItem.appendChild(characterName);
                characterList.appendChild(characterItem);
            });

            animeCard.appendChild(characterList);
            animeList.appendChild(animeCard);
        });
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });