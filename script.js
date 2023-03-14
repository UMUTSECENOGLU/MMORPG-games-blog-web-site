const form = document.querySelector('#message-form');
const messageList = document.querySelector('#message-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const message = document.querySelector('#message-input').value;

  const li = document.createElement('li');
  li.textContent = message;

  messageList.appendChild(li);

  document.querySelector('#message-input').value = '';
});

