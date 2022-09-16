class DataSource {
  static selectCategory(category) {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '[Insert your RapidAPI Key]',
        'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
      }
    };

    return fetch(`https://mmo-games.p.rapidapi.com/games?category=${category}`, options)
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          if (responseJson) {
            const chunkSize = 20; //only get 20
            const chunks = []
            for (let i = 0; i < responseJson.length; i += chunkSize) {
              const chunk = responseJson.slice(i, i + chunkSize);
              chunks.push(chunk);
            }
            return Promise.resolve(chunks[0]);
          } else {
            return Promise.reject(`${category} is not found`);
          }
        });
  }
}
  
export default DataSource;
