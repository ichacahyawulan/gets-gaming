class DataSource {
  static selectCategory(category) {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '01ff28d0c3msh9a75264b511cf27p1e0094jsn4eb9dd6e2c22',
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