// script.js
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const display = document.getElementById('display');

// Number of items
const totalItems = items.length;

// Angle between items in the carousel
const angle = 360 / totalItems;
let currentAngle = 0;

// Arrange items in a circular layout
items.forEach((item, index) => {
  const rotateAngle = index * angle;
  item.style.transform = `rotateY(${rotateAngle}deg) translateZ(300px)`;
});

// Handle next button click
document.getElementById('next').addEventListener('click', () => {
  currentAngle -= angle; // Rotate carousel to the next item
  carousel.style.transform = `rotateY(${currentAngle}deg)`;
  updateDisplay();
  scaleCharacter('next');
});

// Handle previous button click
document.getElementById('prev').addEventListener('click', () => {
  currentAngle += angle; // Rotate carousel to the previous item
  carousel.style.transform = `rotateY(${currentAngle}deg)`;
  updateDisplay();
  scaleCharacter('prev');
});

// Update the display section with the active character
function updateDisplay() {
  const activeIndex = Math.abs(Math.round(currentAngle / angle)) % totalItems;
  const activeCharacter = items[activeIndex].id;

  let message = '';
  let color = '';

  switch (activeCharacter) {
    case 'ironman':
      message = 'Iron Man: Genius, Billionaire, Playboy, Philanthropist.';
      color = '#ff4500';
      break;
    case 'captainamerica':
      message = 'Captain America: The First Avenger and Leader of the Team.';
      color = '#0056b3';
      break;
    case 'thor':
      message = 'Thor: The God of Thunder, Protector of the Realms.';
      color = '#00bfff';
      break;
    case 'hulk':
      message = 'Hulk: The Strongest Avenger with a Temper!';
      color = '#228b22';
      break;
    case 'spiderman':
      message = 'Spider-Man: Your Friendly Neighborhood Superhero!';
      color = '#ff0000';
      break;
  }
  
  display.textContent = message;
  display.style.color = color;
}

// Function to scale the active character on next/prev click
function scaleCharacter(direction) {
  const activeIndex = Math.abs(Math.round(currentAngle / angle)) % totalItems;
  const activeItem = items[activeIndex];

  // Reset all characters scale
  items.forEach(item => {
    item.style.transform = item.style.transform.replace(' scale(1.2)', '');
  });

  // Scale the current item
  if (direction === 'next') {
    activeItem.style.transform += ' scale(1.2)';
  } else if (direction === 'prev') {
    activeItem.style.transform += ' scale(1.2)';
  }
}

// Initialize the display with the first item
updateDisplay();
