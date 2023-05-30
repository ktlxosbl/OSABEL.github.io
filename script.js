const classmates = [
  { name: "Alde, Charies Ann A.", website: "https://berlinalde.github.io/My-Profile/" },
  { name: "Baclay,John Edzel.", website: "https://jebaclay.github.io/edstory.github.io/Home.html" },
  { name: "Bonghanoy,Krsitine.", website: "https://ttiinneeee.github.io/Kristine/" },
  { name: "Grodillo, Marc Joseph", website: "https://sephusmarcus.github.io/Portfolio/" },
  { name: "Sevilla,Cristina.", website: "https://kurisuteina.github.io/XOXO/" },
  { name: "Indig,Rica G.", website: "https://ricaindig.github.io/portfolio/" },
  { name: "Osabel,Kate Alexis S.", website: "https://ktlxosbl.github.io/PORTFOLIO/" },
  { name: "Camacho, Merry Jean.", website: "https://mjcamacho26.github.io/mjcamacho2023/" },
  { name: "Parawan,Arianne.", website: "https://enn4ira.github.io/arianne/" },
  { name: "Sanoy, Sheila .", website: "https://sanoylovesyou.github.io/PORTFOLIO/" },
  { name: "Ruben, Merzi.", website: "https://merzrubs.github.io/Chii-Portfolio/" },
  { name: "Fernandez,Fabian Blake", website: "https://faabbbb.github.io/Fabby/" },
  { name: "Enot, Van Humphrey D.", website: "https://vanenot.github.io/vanhumphrey/home.html" },
  { name: "Dano, John Carlo.", website: "https://surikku05.github.io/dano/" },
  { name: "Despi, Kessel", website: "https://kessel26.github.io/kessel05/" },
];

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const searchResults = document.getElementById("searchResults");

searchButton.addEventListener("click", performSearch);

function performSearch() {
  const searchQuery = searchInput.value.trim().toLowerCase();
  const filteredClassmates = classmates.filter(classmate =>
    classmate.name.toLowerCase().includes(searchQuery)
  );

  renderSearchResults(filteredClassmates);
}

searchInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    performSearch();
  }
});

function renderSearchResults(results) {
  searchResults.innerHTML = "";

  if (results.length === 0) {
    const noResultsItem = document.createElement("li");
    noResultsItem.classList.add("no-results");
    noResultsItem.textContent = "No results found.";
    searchResults.appendChild(noResultsItem);
  } else {
    results.forEach(result => {
      const listItem = document.createElement("li");
      listItem.classList.add("search-result");
      const link = document.createElement("a");
      link.href = result.website;
      link.target = "_blank"; // Open link in a new tab
      link.textContent = result.name;
      listItem.appendChild(link);
      searchResults.appendChild(listItem);
    });
  }
}

document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });