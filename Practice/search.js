function search_animal() {
  let animals = document.getElementsByClassName("animals");
  let inputEl = document.getElementById("searchbar").value;
  inputEl = inputEl.toLowerCase();

  for (let i = 0; i < animals.length; i++) {
    if (!animals[i].innerHTML.toLocaleLowerCase().includes(inputEl)) {
      animals[i].style.display = "none";
    } else {
      animals[i].style.display = "block";
    }
  }
}
