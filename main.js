

 
    const googleMapsClient = require('@google/maps').createClient({
        key: 'YOUR-KEY',
        Promise: Promise
      });
      
      googleMapsClient.geocode({address: '1600 Amphitheatre Parkway, Mountain View, CA'})
        .asPromise()
        .then((response) => {
          console.log('latitude: ' + response.json.results[0].geometry.location.lat);
          console.log('longitude: '+ response.json.results[0].geometry.location.lng);
        })
        .catch((err) => {
          console.log(err);
        });