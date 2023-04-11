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
  element.addEventListener('click', () => {
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

    detailPopup.classList.toggle('hide');
  });
});
