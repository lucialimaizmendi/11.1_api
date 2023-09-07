let video = document.getElementsByTagName("video")

fetch("https://owen-wilson-wow-api.onrender.com/wows/random")
  .then(function(response) {
    if (!response.ok) {
      throw new Error('Error en la solicitud HTTP: ' + response.status);
    }
    return response.text();
  })
  .then(function(data) {
    console.log(JSON.parse(data));
    video[0].src = JSON.parse(data)[0].video['480p'];
    video[0].load();
  })
  .catch(function(error) {
    console.error('Error: ' + error);
  });

var playButton = document.getElementById('play');

playButton.addEventListener('click', function() {
  video.play();
});