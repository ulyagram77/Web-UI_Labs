const images = document.querySelectorAll('.pictures__img img');
const infoInput = document.querySelector('.info input');

images.forEach((image) => {
    image.addEventListener('mouseover', () => {
        const altText = image.getAttribute('alt');

        infoInput.value = `Інформація про авто: ${altText}`;
    });

    image.addEventListener('mouseout', () => {
        infoInput.value = '';
    });
});
