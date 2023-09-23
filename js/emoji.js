// Getting random emoji
const emojis = ['😊', '🥲', '💩', '🤩', '😇', '😇', '🤠', '🥸', '😎', '🧐', '🙃', '😌', '😔', '😵‍💫', '😵', '😵', '😳', '😫'];
const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

// Updating emoji in placeholder
const placeholder = document.getElementById('emoji-placeholder');
placeholder.innerHTML = randomEmoji;