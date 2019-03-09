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
    console.log(this.tab)
    console.log(this.tabs);

    for (i; i<length; i++) {
      if (tabs[length-1].id === 'work') {
        tabs[length-1].id = '';
        tabs[length-1].classList.remove('active');
        tabs[length-1].style.display = 'none';
        tabs[0].id = 'work';
        tabs[0].classList.add('active');
        tabs[0].style.display = 'inline-block';
        break;
      }

      if (tabs[i].id === 'work') {
        tabs[i].id = '';
        tabs[i].classList.remove('active');
        tabs[i].style.display = 'none';
        tabs[i+1].id = 'work';
        tabs[i+1].classList.add('active');
        tabs[i+1].style.display = 'inline-block';
        break;
      }
    }
    //tabs.forEach( tab => TweenMax.from(tab, 1, {x: tab.width, ease: Power3.easeOut}));
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
        break;
      }

      if (tabs[i].id === 'work') {
        tabs[i].id = '';
        tabs[i].classList.remove('active');
        tabs[i].style.display = 'none';
        tabs[i-1].id = 'work';
        tabs[i-1].classList.add('active');
        tabs[i-1].style.display = 'inline-block';
        break;
      }
    }
    //tabs.forEach( tab => TweenMax.from(tab, 1, {x: -tab.width, ease: Power3.easeOut}));
  }
}

const tabsSelect = document.querySelectorAll('.work');
const tabs = tabsSelect.forEach(tab => new TabLink(tab));
