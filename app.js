// Clase simple que encapsula la lógica del contador (POO)
class Counter {
  constructor(initial = 0) {
    this.value = initial;
  }

  increment() {
    this.value += 1;
  }

  decrement() {
    this.value -= 1;
  }

  toString() {
    return String(this.value);
  }
}

// Instancia y manipulación del DOM
const counter = new Counter(0);

const countEl = document.getElementById('count');
const incBtn = document.getElementById('increase');
const decBtn = document.getElementById('decrease');
const title = document.getElementById('title');

function render() {
  countEl.textContent = counter.toString();
  countEl.style.color = counter.value >= 0 ? 'green' : 'crimson';
  title.textContent = `likes: ${counter.value}`;
}

incBtn.addEventListener('click', () => {
  counter.increment();
  render();
});

decBtn.addEventListener('click', () => {
  counter.decrement();
  render();
});

render();
