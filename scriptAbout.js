/*  DOM ELEMENTS  */
const body = document.querySelector('body');
const toggleMenu = document.createElement('div');
toggleMenu.setAttribute('class', 'toggleMenu');
toggleMenu.setAttribute('id', 'toggleMenu');
const aAbout = document.createElement('a');
aAbout.href = '/about.html';
const toggleAbout = document.createElement('p');
toggleAbout.setAttribute('class', 'toggle-items');
toggleAbout.innerHTML = 'About';
const aProgram = document.createElement('a');
aProgram.href = '/index.html#program';
const toggleProgram = document.createElement('p');
toggleProgram.setAttribute('class', 'toggle-items');
toggleProgram.innerHTML = 'Program';
const aJoin = document.createElement('a');
aJoin.href = '/index.html#join';
const toggleJoin = document.createElement('p');
toggleJoin.setAttribute('class', 'toggle-items');
toggleJoin.innerHTML = 'Join';
const aSponsor = document.createElement('a');
aSponsor.href = '/about.html#sponsor';
const toggleSponsor = document.createElement('p');
toggleSponsor.setAttribute('class', 'toggle-items');
toggleSponsor.innerHTML = 'Sponsor';
const aNews = document.createElement('a');
aNews.href = '/about.html#news';
const toggleNews = document.createElement('p');
toggleNews.setAttribute('class', 'toggle-items');
toggleNews.innerHTML = 'News';

toggleMenu.append(aAbout);
aAbout.append(toggleAbout);
toggleMenu.append(aProgram);
aProgram.append(toggleProgram);
toggleMenu.append(aJoin);
aJoin.append(toggleJoin);
toggleMenu.append(aSponsor);
aSponsor.append(toggleSponsor);
toggleMenu.append(aNews);
aNews.append(toggleNews);

/*  TOGGLE MENU */

const hamburger = document.querySelector('.hamburger');
const toggleItems = [];

toggleItems.push(aAbout);
toggleItems.push(aProgram);
toggleItems.push(aJoin);
toggleItems.push(aSponsor);
toggleItems.push(aNews);

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  if (document.querySelector('.toggleMenu')) {
    toggleMenu.remove(toggleMenu);
  } else {
    body.append(toggleMenu);
  }
});

toggleItems.forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  toggleMenu.remove(toggleMenu);
}));
