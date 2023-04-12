// Define an array of class names for the container elements
const classNames = ['works-one', 'works-two', 'works-three', /* add more as needed */];

// Iterate over the array using forEach
classNames.forEach((className) => {
  // Create the container element with the current class name
  const container = document.createElement('div');
  container.classList.add('grid-container', className);

  // Create the card top half element and append to the container
  const cardTopHalf = document.createElement('div');
  cardTopHalf.classList.add('card-top-half');
  container.appendChild(cardTopHalf);

  // Create the card bottom half element and append to the container
  const cardBottomHalf = document.createElement('div');
  cardBottomHalf.classList.add('card-bottom-half');
  container.appendChild(cardBottomHalf);

  // Create the card title span element and append to the card bottom half
  const cardTitle = document.createElement('span');
  cardTitle.classList.add('card-title');
  cardTitle.innerHTML = 'Multi-Post Stories<br>Gain+Glory';
  cardBottomHalf.appendChild(cardTitle);

  // Create the technologies ul element and append to the card bottom half
  const technologies = document.createElement('ul');
  technologies.classList.add('work-technologies');
  cardBottomHalf.appendChild(technologies);

  // Create the technologies list items and append to the technologies ul element
  const ruby = document.createElement('li');
  ruby.classList.add('grey-button');
  ruby.innerHTML = 'Ruby on Rails';
  technologies.appendChild(ruby);

  const css = document.createElement('li');
  css.classList.add('grey-button');
  css.innerHTML = 'CSS';
  technologies.appendChild(css);

  const javascript = document.createElement('li');
  javascript.classList.add('grey-button');
  javascript.innerHTML = 'JavaScript';
  technologies.appendChild(javascript);

  const html = document.createElement('li');
  html.classList.add('grey-button');
  html.innerHTML = 'HTML';
  technologies.appendChild(html);

  // Create the see project button element and append to the card bottom half
  const seeProjectButton = document.createElement('button');
  seeProjectButton.classList.add('see-project', 'green-button');
  seeProjectButton.innerHTML = 'See project';
  cardBottomHalf.appendChild(seeProjectButton);

  // Append the container element to the div with class "works-cards"
  const worksCards = document.querySelector('.works');
  worksCards.appendChild(container);
});
