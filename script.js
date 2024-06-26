document
  .getElementById("getAllCharacters")
  .addEventListener("click", function () {
    fetch("https://rickandmortyapi.com/api/character")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        displayCharacters(data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

document
  .getElementById("filterCharacters")
  .addEventListener("click", function () {
    var name = document.getElementById("name").value;
    var status = document.getElementById("status").value;
    var species = document.getElementById("species").value;
    var type = document.getElementById("type").value;
    var gender = document.getElementById("gender").value;

    var url = "https://rickandmortyapi.com/api/character/?";

    if (name) {
      url += "name=" + name + "&";
    }
    if (status) {
      url += "status=" + status + "&";
    }
    if (species) {
      url += "species=" + species + "&";
    }
    if (type) {
      url += "type=" + type + "&";
    }
    if (gender) {
      url += "gender=" + gender + "&";
    }

    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        displayCharacters(data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

function displayCharacters(characters) {
  var charactersDiv = document.getElementById("characters");
  charactersDiv.innerHTML = "";

  if (characters) {
    characters.forEach(function (character) {
      var characterDiv = document.createElement("div");
      characterDiv.classList.add("character");
      characterDiv.innerHTML =
        "<h3>" +
        character.name +
        "</h3>" +
        "<p>" +
        character.status +
        " - " +
        character.species +
        " - " +
        character.gender +
        "</p>" +
        "<p>" +
        character.type +
        "</p>" +
        '<img src="' +
        character.image +
        '" alt="' +
        character.name +
        '">';
      charactersDiv.appendChild(characterDiv);
    });
  } else {
    charactersDiv.innerHTML =
      "<p>No existe un personaje con los filtros seleccionados</p>";
  }
}
