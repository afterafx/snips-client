const snippets = document.getElementById('snippets');

snippets.style.backgroundColor = 'red';

const h2 = snippets.querySelector('h2');
h2.style.fontSize = '100px';

console.log(snippets.innerHTML);

setInterval(() => {
  // create a new element
  const button = document.createElement('button');
  button.innerText = 'Answer Survey';
  button.addEventListener('click', survey);
  // add it to the page
  document.body.append(button);
}, 2000);

function survey() {
  prompt('How are you enjoying my time?');
}

function aggressiveButton(button) {
  button.innerHTML = `${button.innerHTML.toUpperCase()} please`;
}
