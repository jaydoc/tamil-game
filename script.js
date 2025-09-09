document.addEventListener('DOMContentLoaded', () => {
  const uravinar = [
    { name: "அம்மா", file: "amma.mp3" },
    { name: "அப்பா", file: "appa.mp3" },
    { name: "அண்ணன்", file: "annan.mp3" },
    { name: "அக்கா", file: "akka.mp3" },
    { name: "தம்பி", file: "tampi.mp3" },
    { name: "தங்கை", file: "tangkai.mp3" },
    { name: "மகன்", file: "makan.mp3" },
    { name: "மகள்", file: "makal.mp3" },
    { name: "தாத்தா", file: "tatta.mp3" },
    { name: "பாட்டி", file: "patti.mp3" },
    { name: "சித்தப்பா", file: "citappa.mp3" },
    { name: "சித்தி", file: "citti.mp3" },
    { name: "மாமா", file: "mama.mp3" },
    { name: "அத்தை", file: "attai.mp3" },
    { name: "பெரியப்பா", file: "periyappa.mp3" },
    { name: "பெரியம்மா", file: "periyamma.mp3" }
  ];

  const container = document.getElementById('game-container');

  if (!container) {
    console.error('Game container not found');
    return;
  }

  uravinar.forEach(person => {
    const card = document.createElement('div');
    card.className = 'card';
    card.textContent = person.name;

    card.addEventListener('click', () => {
      const audio = new Audio(`audio/${person.file}`);
      audio.play();
    });

    container.appendChild(card);
  });
});
