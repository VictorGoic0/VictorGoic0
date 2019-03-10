class TabLink {
  constructor(tab) {
    this.tab = tab;
    this.leftButton = this.tab.querySelector('.left-button');
    this.rightButton = this.tab.querySelector('.right-button');
    this.tabs = document.querySelectorAll('.work');


    this.leftButton.addEventListener('click', () => this.leftButtonPress());
    this.rightButton.addEventListener('click', () => this.rightButtonPress());
  }
  rightButtonPress() {
    const tabs = this.tabs;
    const length = tabs.length;
    let i=0;

    for (i; i<length; i++) {
      if (tabs[length-1].id === 'work') {
        tabs[length-1].id = '';
        tabs[length-1].classList.remove('active');
        tabs[length-1].style.display = 'none';
        tabs[0].id = 'work';
        tabs[0].classList.add('active');
        tabs[0].style.display = 'inline-block';
        TweenMax.from(tabs[0].querySelector('.content'), .4, {x: 1500, opacity: 0});
        break;
      }

      if (tabs[i].id === 'work') {
        tabs[i].id = '';
        tabs[i].classList.remove('active');
        tabs[i].style.display = 'none';
        tabs[i+1].id = 'work';
        tabs[i+1].classList.add('active');
        tabs[i+1].style.display = 'inline-block';
        TweenMax.from(tabs[i+1].querySelector('.content'), .4, {x: 1500, opacity: 0});
        break;
      }
    }
  }
  leftButtonPress() {
    const tabs = this.tabs;
    const length = tabs.length;
    let i=length-1;

    for (i; i>=0; i--) {
      if (tabs[0].id === 'work') {
        tabs[0].id = '';
        tabs[0].classList.remove('active');
        tabs[0].style.display = 'none';
        tabs[length-1].id = 'work';
        tabs[length-1].classList.add('active');
        tabs[length-1].style.display = 'inline-block';
        TweenMax.from(tabs[length-1].querySelector('.content'), .4, {x: -1500, opacity: 0});
        break;
      }

      if (tabs[i].id === 'work') {
        tabs[i].id = '';
        tabs[i].classList.remove('active');
        tabs[i].style.display = 'none';
        tabs[i-1].id = 'work';
        tabs[i-1].classList.add('active');
        tabs[i-1].style.display = 'inline-block';
        TweenMax.from(tabs[i-1].querySelector('.content'), .4, {x: -1500, opacity: 0});
        break;
      }
    }
  }
}

const tabsSelect = document.querySelectorAll('.work');
const tabs = tabsSelect.forEach(tab => new TabLink(tab));
tabsSelect.forEach(tab => TweenMax.to(tab.querySelector('.content'), .1, {opacity: 1, x:0}))
