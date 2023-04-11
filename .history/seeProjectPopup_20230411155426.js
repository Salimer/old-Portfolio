const seeProject = document.querySelectorAll('.see-project');
const detailPopup = document.querySelector('.detail-popup');
const closeIcon = document.querySelector('#detail-popup-x')

seeProject.forEach((element) => {
    element.addEventListener('click', () => {
        detailPopup.classList.toggle('hide');
    });
});


closeIcon.addEventListener('click', () => {
    detailPopup.classList.toggle('hide');
});
