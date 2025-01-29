// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "I dreamed a day", time: 25 },
  { text: "That God will surface", time: 27 },
  { text: "To retrieve His nails", time: 31 },
  { text: "And open your heart", time: 34 },
  { text: "You'll say you're mine", time: 38 },
  { text: "For the ages", time: 42 },
  { text: "Just open your heart", time: 45 },
  { text: "And say (I swear on the cross)", time: 51 },
  { text: "Can you promise this to the grave?", time: 60 },
  { text: "You'll take my name", time: 67 },
  { text: "Can you promise me?", time: 73 },
  { text: "Over seas and over mountains", time: 81 },
  { text: "A thousand years", time: 88 },
  { text: "I've waited for her", time: 91 },
  { text: "To say the lines", time: 94 },
  { text: "(From this day forward)", time: 98 },
  { text: "Just open your heart", time: 100 },
  { text: "And say (I swear on the cross)", time: 147 },
  { text: "Can you promise that to the grave?", time: 156 },
  { text: "You'll take my name", time: 164 },
  { text: "Can you promise me?", time: 170 },
  { text: "All this time I prayed for this day to come true", time: 200 },
  { text: "No one knows how deeper waves we have waded through", time: 211 },
  { text: "I wish I could take your hand", time: 224 },
  { text: "And make it true", time: 230 },
  { text: "No one knows how far apart we′ve stayed to get through", time: 238 },
  { text: "I wish I could take your hand and make it true", time: 251 },
  { text: "Cause no one knows how far apart we′ve stayed to get through", time: 264 },
  { text: "Can you say (I swear on the cross)", time: 277 },
  { text: "Can you promise that to the grave?", time: 286 },
  { text: "You'll take my name", time: 293 },
  { text: "Can you promise me?", time: 299 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 1
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);