const projects = [
    {
      featuredImage: "Assets/detailTop.svg",
      name: "Keeping track of<br>hundreds of components",
      technologies: ['Ruby on Rails', 'CSS', 'JavaScript'],
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.<br><br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
      linkToLiveVersion: "https://youtu.be/dQw4w9WgXcQ",
      linkToSource: "https://youtu.be/dQw4w9WgXcQ"
    },
    {
        featuredImage: "Assets/detailTop.svg",
        name: "Multi-Post Stories<br>Gain+Glory",
        technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML', 'Python'],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.<br><br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
        linkToLiveVersion: "https://youtu.be/dQw4w9WgXcQ",
        linkToSource: "https://youtu.be/dQw4w9WgXcQ"
      },
      {
        featuredImage: "Assets/detailTop.svg",
        name: "Multi-Post Stories<br>Gain+Glory",
        technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.<br><br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
        linkToLiveVersion: "https://youtu.be/dQw4w9WgXcQ",
        linkToSource: "https://youtu.be/dQw4w9WgXcQ"
      },
      {
        featuredImage: "Assets/detailTop.svg",
        name: "Keeping track of<br>hundreds of components",
        technologies: ['Codekit', '', 'JavaScript'],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.<br><br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
        linkToLiveVersion: "https://youtu.be/dQw4w9WgXcQ",
        linkToSource: "https://youtu.be/dQw4w9WgXcQ"
      },
      {
          featuredImage: "Assets/detailTop.svg",
          name: "Multi-Post Stories<br>Gain+Glory",
          technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML', 'Python'],
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.<br><br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
          linkToLiveVersion: "https://youtu.be/dQw4w9WgXcQ",
          linkToSource: "https://youtu.be/dQw4w9WgXcQ"
        },
        {
          featuredImage: "Assets/detailTop.svg",
          name: "Multi-Post Stories<br>Gain+Glory",
          technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.<br><br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
          linkToLiveVersion: "https://youtu.be/dQw4w9WgXcQ",
          linkToSource: "https://youtu.be/dQw4w9WgXcQ"
        }
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
  cardBottomHalf.appendChild(seeProjectButton);

  // Append the container element to the div with class "works"
  const works = document.querySelector('.works');
  works.appendChild(container);
  count++;
});
