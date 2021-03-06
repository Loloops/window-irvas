const images = () => {
  const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImage = document.createElement('img');
  
  imgPopup.classList.add('popupImg');
  
  workSection.appendChild(imgPopup);

  imgPopup.style.justifyContent = 'center';
  imgPopup.style.alignItems = 'center';
  imgPopup.style.display = 'none';
  
  imgPopup.appendChild(bigImage)

  workSection.addEventListener('click', (e) => {
    e.preventDefault();

    let target = e.target;

    if(target && target.classList.contains('preview')) {
      imgPopup.style.display = 'flex';
      bigImage.classList.add('myimage');
      document.body.style.overflow = 'hidden';
      const path = target.parentNode.getAttribute('href')
      bigImage.setAttribute('src', path);
    }

    if (target && target.matches('div.popupImg')) {
      imgPopup.style.display = 'none';
      bigImage.classList.remove('myimage');
      document.body.style.overflow = '';
    }
  })
}
export default images;