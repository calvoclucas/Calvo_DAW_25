 var baseURL = "https://rickandmortyapi.com/api/character";
 var resultsContainer = document.getElementById("results");
 var getAllBtn = document.getElementById("get-all");
 var filterForm = document.getElementById("filter-form");
 var paginationContainer = document.getElementById("pagination");

 function renderCharacters(characters) {
     resultsContainer.innerHTML = "";
     characters.forEach(function(char) {
         var card = document.createElement("div");
         card.className = "card";
         card.innerHTML =
             '<img src="' + char.image + '" alt="' + char.name + '">' +
             '<h3>' + char.name + '</h3>' +
             '<p>Status: ' + char.status + '</p>' +
             '<p>Species: ' + char.species + '</p>' +
             '<p>Gender: ' + char.gender + '</p>';
         resultsContainer.appendChild(card);
     });
 }

 function showError(message) {
     resultsContainer.innerHTML = '<p style="color: red; text-align:center;">' + message + '</p>';
 }

 function fetchAllCharacters(url, collected, callback) {
     fetch(url)
         .then(function(response) {
             if (!response.ok) throw new Error("Error al obtener los personajes");
             return response.json();
         })
         .then(function(data) {
             collected = collected.concat(data.results);
             if (data.info.next) {
                 fetchAllCharacters(data.info.next, collected, callback);
             } else {
                 callback(collected);
             }
         })
         .catch(function(error) {
             showError(error.message);
         });
 }


 filterForm.addEventListener("submit", function(e) {
     e.preventDefault();
     var name = document.getElementById("name").value;
     var status = document.getElementById("status").value;
     var species = document.getElementById("species").value;
     var type = document.getElementById("type").value;
     var gender = document.getElementById("gender").value;

     var params = new URLSearchParams();
     if (name) params.append("name", name);
     if (status) params.append("status", status);
     if (species) params.append("species", species);
     if (type) params.append("type", type);
     if (gender) params.append("gender", gender);

     var fullURL = baseURL + "/?" + params.toString();
     fetchFiltered(fullURL);
 });

 function fetchFiltered(url) {
     fetch(url)
         .then(function(response) {
             if (!response.ok) throw new Error("No se encontraron personajes.");
             return response.json();
         })
         .then(function(data) {
             renderCharacters(data.results);
             setupPagination(data.info, url);
         })
         .catch(function(error) {
             showError(error.message);
         });
 }

 getAllBtn.addEventListener("click", function() {
     fetchFiltered(baseURL);
 });


 function setupPagination(info, currentURL) {
     paginationContainer.innerHTML = "";
     var baseAndQuery = currentURL.split("?");
     var base = baseAndQuery[0];
     var query = baseAndQuery[1] || "";

     for (var i = 1; i <= info.pages; i++) {
         (function(page) {
             var btn = document.createElement("button");
             btn.textContent = page;
             btn.className = "page-btn";
             btn.addEventListener("click", function() {
                 var params = new URLSearchParams(query);
                 params.set("page", page);
                 fetchFiltered(base + "?" + params.toString());
             });
             paginationContainer.appendChild(btn);
         })(i);
     }
 }