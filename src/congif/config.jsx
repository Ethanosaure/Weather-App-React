export async function API(location) {
  const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${location}&days=1`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0df32aefb3msh0052a0ea8bccf19p191813jsn042008c53eff",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
