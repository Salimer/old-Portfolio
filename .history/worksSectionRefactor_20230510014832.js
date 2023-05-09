const projects = [
  {
    featuredImage: 'Assets/detailTop.svg',
    name: 'RLCS event<br>landing page',
    technologies: ['BootStrap', 'CSS', 'JavaScript'],
    description: "RLCS landing page is a project to market, sell tickets and more about a hypotetical event of Rocket League. The featured teams section shows full dynamic elements created using javascript in the desktop version. while only shows 2 elements and a user can click on see more to expand the list. Built with Bootstrap, CSS and JavaScript.",
    linkToLiveVersion: 'https://youtu.be/dQw4w9WgXcQ',
    linkToSource: 'https://youtu.be/dQw4w9WgXcQ',
  },
  {
    featuredImage: 'Assets/detailTop.svg',
    name: 'Multi-Post Stories<br>Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML', 'Python'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.<br><br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    linkToLiveVersion: 'https://youtu.be/dQw4w9WgXcQ',
    linkToSource: 'https://youtu.be/dQw4w9WgXcQ',
  },
  {
    featuredImage: 'Assets/detailTop.svg',
    name: 'Multi-Post Stories<br>Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.<br><br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    linkToLiveVersion: 'https://youtu.be/dQw4w9WgXcQ',
    linkToSource: 'https://youtu.be/dQw4w9WgXcQ',
  },
  {
    featuredImage: 'Assets/detailTop.svg',
    name: 'Keeping track of<br>hundreds of components',
    technologies: ['GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.<br><br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    linkToLiveVersion: 'https://youtu.be/dQw4w9WgXcQ',
    linkToSource: 'https://youtu.be/dQw4w9WgXcQ',
  },
  {
    featuredImage: 'Assets/detailTop.svg',
    name: 'Multi-Post Stories<br>Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML', 'Python'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.<br><br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    linkToLiveVersion: 'https://youtu.be/dQw4w9WgXcQ',
    linkToSource: 'https://youtu.be/dQw4w9WgXcQ',
  },
  {
    featuredImage: 'Assets/detailTop.svg',
    name: 'Multi-Post Stories<br>Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.<br><br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    linkToLiveVersion: 'https://youtu.be/dQw4w9WgXcQ',
    linkToSource: 'https://youtu.be/dQw4w9WgXcQ',
  },
];

// Define an array of class names for the container elements
const classNames = ['works-one', 'works-two', 'works-three', 'works-four', 'works-five', 'works-six'/* add more as needed */];

let count = 0;
// Iterate over the array using forEach
projects.forEach((project) => {
  // Create the container element with the current class name
  const container = document.createElement('div');
  container.classList.add('grid-container', classNames[count]);

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
  cardTitle.innerHTML = project.name;
  cardBottomHalf.appendChild(cardTitle);

  // Create the technologies ul element and append to the card bottom half
  const technologies = document.createElement('ul');
  technologies.classList.add('work-technologies');
  cardBottomHalf.appendChild(technologies);

  // Create the technologies list items and append to the technologies ul element
  project.technologies.forEach((item) => {
    const technology = document.createElement('li');
    technology.classList.add('grey-button');
    technology.innerHTML = item;
    technologies.appendChild(technology);
  });

  // Create the see project button element and append to the card bottom half
  const seeProjectButton = document.createElement('button');
  seeProjectButton.classList.add('see-project', 'green-button');
  seeProjectButton.innerHTML = 'See project';
  seeProjectButton.setAttribute('type', 'button'); // specify the type attribute
  cardBottomHalf.appendChild(seeProjectButton);

  // Append the container element to the div with class "works"
  const works = document.querySelector('.works');
  works.appendChild(container);
  count += 1;
});

// 'see project' popup

const seeProject = document.querySelectorAll('.see-project');
const detailPopup = document.querySelector('.detail-popup');
const closeIcon = document.querySelector('#detail-popup-x');
const closeIconDesktop = document.querySelector('#detail-popup-x-desktop');

closeIcon.addEventListener('click', () => {
  detailPopup.classList.toggle('hide');
  const destruction = document.querySelectorAll('.detail-item2 span, .technologies li, .detail-item4 p');
  for (let i = 0; i < destruction.length; i += 1) {
    destruction[i].parentNode.removeChild(destruction[i]);
  }
});

closeIconDesktop.addEventListener('click', () => {
  detailPopup.classList.toggle('hide');
  const destruction = document.querySelectorAll('.detail-item2 span, .technologies li, .detail-item4 p');
  for (let i = 0; i < destruction.length; i += 1) {
    destruction[i].parentNode.removeChild(destruction[i]);
  }
});

seeProject.forEach((element) => {
  element.addEventListener('click', (event) => {
    let i;
    const workClassNumber = event.target.closest('.grid-container');
    if (workClassNumber.classList.contains('works-one')) i = 0;
    else if (workClassNumber.classList.contains('works-two')) i = 1;
    else if (workClassNumber.classList.contains('works-three')) i = 2;
    else if (workClassNumber.classList.contains('works-four')) i = 3;
    else if (workClassNumber.classList.contains('works-five')) i = 4;
    else if (workClassNumber.classList.contains('works-six')) i = 5;

    // Create the span element and append it to the title of the detail popup
    const detailTitle = document.createElement('span');
    detailTitle.innerHTML = projects[i].name;
    document.querySelector('.detail-item2').appendChild(detailTitle);

    // Create the technologies element and append them to the detail popup
    projects[i].technologies.forEach((item) => {
      const detailTechnologies = document.createElement('li');
      detailTechnologies.classList.add('grey-button');
      detailTechnologies.innerHTML = item;
      document.querySelector('.technologies').appendChild(detailTechnologies);
    });

    // Create the description element and append it to the detail popup
    const detailDescription = document.createElement('p');
    detailDescription.innerHTML = projects[i].description;
    document.querySelector('.detail-item4').appendChild(detailDescription);

    // Add the see more and see source links
    const seeLive = document.querySelector('#see-live');
    const seeSource = document.querySelector('#see-source');
    seeLive.setAttribute('href', projects[i]);
    seeSource.setAttribute('href', 'https://example.com');

    detailPopup.classList.toggle('hide');
  });
});
