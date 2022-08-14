// ***2. display all the country's flags, country name, region, sub-region, population with Restcountries API.***

console.log("2.Rest Countries API");
// url = https://restcountries.com/v3.1/all

//fetch data for South asia countries:
async function getData() {
  try {
    const data = await fetch("https://restcountries.com/v2/regionalbloc/SAARC");
    let countries = await data.json();
    for (let index in countries) {
      //   console.log("Country Name: " + countries[index].name.common);   if used for ALL countries
      console.log("Country Name: " + countries[index].name);
      console.log("Flag: " + countries[index].flags.png);
      console.log("Region: " + countries[index].region);
      console.log("Sub-region: " + countries[index].subregion);
      console.log("Population: " + countries[index].population);
    }
  } catch (error) {
    console.log(error);
  }
}
getData();
