const tabs = (
  headerSelector,
  tabSelector,
  contentSelector,
  activeClass,
  display = 'block'
) => {
  const header = document.querySelector(headerSelector),
    tab = document.querySelectorAll(tabSelector),
    content = document.querySelectorAll(contentSelector);

  function hideTabContent() {
    content.forEach((item) => {
      item.style.display = 'none';
      // item.classList.remove('show');
      // item.classList.add('hide');
    });

    tab.forEach((item) => {
      item.classList.remove(activeClass);
    });
  }

  function showTabContent(i = 0) {
    content[i].style.display = display;
    tab[i].classList.add(activeClass);
    // content[i].classList.remove('hide');
    // content[i].classList.add('show');
  }

  hideTabContent();
  showTabContent();

  header.addEventListener('click', (e) => {
    const target = e.target;
    if (
      target.classList.contains(tabSelector.replace(/\./, '')) ||
      target.parentNode.classList.contains(tabSelector.replace(/\./, ''))
    ) {
      tab.forEach((item, i) => {
        if (target == item || target.parentNode == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
};

export default tabs;

