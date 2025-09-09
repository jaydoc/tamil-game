const baseAudioUrl = "https://jaydoc.github.io/tamil-game/audio/";

const words = [
  { tamil: 'அம்மா', transliteration: 'Amma', audio: 'amma.mp3' },
  { tamil: 'அப்பா', transliteration: 'Appa', audio: 'appa.mp3' },
  { tamil: 'மகன்', transliteration: 'Makan', audio: 'makan.mp3' },
  { tamil: 'மகள்', transliteration: 'Makaḷ', audio: 'makal.mp3' },
  { tamil: 'அண்ணன்', transliteration: 'Aṇṇaṉ', audio: 'annan.mp3' },
  { tamil: 'அக்கா', transliteration: 'Akkā', audio: 'akka.mp3' },
  { tamil: 'தம்பி', transliteration: 'Tampi', audio: 'tampi.mp3' },
  { tamil: 'தங்கை', transliteration: 'Taṅkai', audio: 'tangkai.mp3' },
  { tamil: 'தாத்தா', transliteration: 'Tāttā', audio: 'tatta.mp3' },
  { tamil: 'பாட்டி', transliteration: 'Pāṭṭi', audio: 'patti.mp3' },
  { tamil: 'பெரியப்பா', transliteration: 'Periyappā', audio: 'periyappa.mp3' },
  { tamil: 'சித்தப்பா', transliteration: 'Cittappā', audio: 'citappa.mp3' },
  { tamil: 'பெரியம்மா', transliteration: 'Periyammā', audio: 'periyamma.mp3' },
  { tamil: 'சித்தி', transliteration: 'Citti', audio: 'citti.mp3' },
  { tamil: 'மாமா', transliteration: 'Māmā', audio: 'mama.mp3' },
  { tamil: 'அத்தை', transliteration: 'Attai', audio: 'attai.mp3' }
];

const container = document.getElementById("word-container");

words.forEach(word => {
  const card = document.createElement("div");
  card.className = "card";

  const tamilText = document.createElement("div");
  tamilText.className = "tamil";
  tamilText.innerText = word.tamil;

  const translitText = document.createElement("div");
  translitText.className = "translit";
  translitText.innerText = word.transliteration;

  const playButton = document.createElement("button");
  playButton.innerText = "🔊";
  playButton.onclick = () => {
    const audio = new Audio(`${baseAudioUrl}${word.audio}`);
    audio.play();
  };

  card.appendChild(tamilText);
  card.appendChild(translitText);
  card.appendChild(playButton);

  container.appendChild(card);
});
