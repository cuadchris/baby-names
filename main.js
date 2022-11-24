let babyName = document.getElementById("name");

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
  babyName.innerText = data[0];
};
