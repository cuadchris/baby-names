let content = document.getElementById("content");

const options = {
  method: "GET",
  headers: {
    "X-API-Key": "McmSisnJZm52lpdxYajUuA==0f4desvEA3dutB9w",
  },
};

const getData = async () => {
  const response = await fetch(
    "https://api.api-ninjas.com/v1/babynames?gender=girl",
    options
  );
  const data = await response.json();
  content.innerHTML =
    '<ul class = "my-3 list list-group list-group-flush">' +
    data
      .map(function (name) {
        return "<li>" + "<h5>" + name + "</h5>" + "</li>";
      })
      .join("") +
    "</ul>";
};
