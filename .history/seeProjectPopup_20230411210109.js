const seeProject = document.querySelectorAll('.see-project');
const detailPopup = document.querySelector('.detail-popup');
const closeIcon = document.querySelector('#detail-popup-x')

closeIcon.addEventListener('click', () => {
    detailPopup.classList.toggle('hide');
});

seeProject.forEach((element) => {
    element.addEventListener('click', () => {
        detailPopup.classList.toggle('hide');
    });
});
