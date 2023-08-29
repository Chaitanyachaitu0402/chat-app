const socket = io();

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.getElementById('input');
  const message = input.value;
  socket.emit('chat message', message);
  input.value = '';
});

socket.on('chat message', (message) => {
  const messages = document.getElementById('messages');
  const li = document.createElement('li');
  li.textContent = message;
  messages.appendChild(li);
});
