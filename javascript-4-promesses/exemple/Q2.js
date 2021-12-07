Promise = require('bluebird');

wait = function(time) { 
  return new Promise(function(resolve, reject) {
    if (time > 3000) {
      reject('erreur');
    } else {
      setTimeout(resolve, time);
    }
  }); 
} 

wait(2000)
.then(
  function() {
    console.log('Bonjour');
  })
.catch(function(res) { console.log('Erreur', res);})

wait(4000)
.then(
  function() {
    console.log('Bonjour');
  })
.catch(function(res) { console.log('Erreur', res);})

