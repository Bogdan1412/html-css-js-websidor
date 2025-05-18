const images = () => {
  const imgPopup = document.createElement('div'),
    workSection = document.querySelector('.works'),
    bigImage = document.createElement('img');

  imgPopup.classList.add('popup');
  imgPopup.style.cssText = `
    display: none;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1000;
  `;

  bigImage.style.maxWidth = '90%';
  bigImage.style.maxHeight = '90%';

  imgPopup.appendChild(bigImage);
  workSection.appendChild(imgPopup);

  workSection.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target;

    if (target && target.classList.contains('preview')) {
      const path = target.closest('a')?.getAttribute('href');
      if (path) {
        bigImage.setAttribute('src', path);
        imgPopup.style.display = 'flex';
				document.body.style.overflow = 'hidden';
      }
    }

    if (target === imgPopup) {
      imgPopup.style.display = 'none';
			document.body.style.overflow = '';
    }
  });
};

export default images;
