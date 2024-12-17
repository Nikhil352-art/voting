document.getElementById('pollForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('pollTitle').value;
    const options = document.getElementById('pollOptions').value.split(',').map(option => option.trim());

    createPoll(title, options);
    this.reset();
});

function createPoll(title, options) {
    const pollList = document.getElementById('pollList');
    const pollItem = document.createElement('li');
    pollItem.classList.add('poll-item');

    const pollContent = `<strong>${title}</strong><br>Options: ${options.join(', ')}<br>`;
    const endButton = `<button onclick="endPoll(this)">End Poll</button>`;

    pollItem.innerHTML = pollContent + endButton;
    pollList.appendChild(pollItem);
}

function endPoll(button) {
    const pollItem = button.parentElement;
    pollItem.remove();
}