/*  PROGRAM  */
const programData = [
  {
    id: 1,
    programIcon: 'fa-circle-play',
    programName: 'Lecture',
    programInfo: 'Listen to the speakers from various disciplines of life. Sharing opportunities for young talents.',
  },
  {
    id: 2,
    programIcon: 'fa-house-laptop',
    programName: 'Workshop',
    programInfo: 'An intensive group discussion from Educators, Subject Matter Experts, Managers, and Leaders.',
  },
  {
    id: 3,
    programIcon: 'fa-globe',
    programName: 'Network',
    programInfo: 'Be part of networking icebreaker questions, speed networking ideas, or assignments to meet people.',
  },
  {
    id: 4,
    programIcon: 'fa-laptop',
    programName: 'Forum',
    programInfo: 'Share you thoughts and opinions with captains of industry for each topic',
  },
  {
    id: 5,
    programIcon: 'fa-circle-nodes',
    programName: 'Exhibition',
    programInfo: 'Appreciate display of works of art or items of interest at the conference.',
  },
];

const program = document.querySelector('.program-container');

for (let i = 0; i < programData.length; i += 1) {
  program.innerHTML += `<div class="program-category">
  <i class="fa-solid ${programData[i].programIcon}"></i>
  <h2 class="program-name">${programData[i].programName}</h2>
  <p class="program-info">${programData[i].programInfo}</p>                
</div>`;
}

/*  SPEAKERS  */

const speakerDetails = [
  {
    id: 1,
    speakerImage: 'images/BunmiDavies.PNG',
    speakerName: 'Bunmi Davies',
    speakerProfile: 'Producer/Director',
    speakerBio: 'Bunmi Davies is an entertainment producer and director. He is an alumni of the University of Lagos, Nigeria.',
  },
  {
    id: 2,
    speakerImage: 'images/RahmahOlaide.PNG',
    speakerName: 'Akanji Rahmah',
    speakerProfile: 'Founder, Olaide Ologe',
    speakerBio: 'Akanji Rahmah is popularly known as \'Umm Rayhaan\'. She is the founder of fashion outfit \'Olaide-Ologe\'.',
  },
  {
    id: 3,
    speakerImage: 'images/StephenAkintayo.PNG',
    speakerName: 'Stephen Akintayo',
    speakerProfile: 'GMD/CEO GText Global',
    speakerBio: 'GText is a global company with office in 4 continents of the world. GText heaquarters is in Lagos, Nigeria.',
  },
  {
    id: 4,
    speakerImage: 'images/PASSPORT.JPG',
    speakerName: 'Hammed Adisa',
    speakerProfile: 'Software Developer, Microverse',
    speakerBio: 'An inspiring software developer from Nigeria. He is an Alumni of the University of Port Harcourt, Nigeria.',
  },
  {
    id: 5,
    speakerImage: 'images/HalimaDangote.PNG',
    speakerName: 'Halima Dangote',
    speakerProfile: 'Group Executive Director Commercial of Dangote Industries Limited.',
    speakerBio: 'A Business Director at Dangote Group, An African industrial conglomerate present in over 17 countries.',
  },
  {
    id: 6,
    speakerImage: 'images/EstherIgbekele.PNG',
    speakerName: 'Esther Igbekele',
    speakerProfile: 'Song Writer',
    speakerBio: 'A musician and vocalist, a native of Orile-Iganmu, Lagos State. Her genre of music is the gospel category.',
  },
];

const speaker = document.querySelector('.speakers-container');

for (let i = 0; i < speakerDetails.length; i += 1) {
  speaker.innerHTML += `<div class="speaker-details">
  <div class="speaker-photo">
      <img src="${speakerDetails[i].speakerImage}" alt="${speakerDetails[i].speakerName}">
  </div>
  
  <div class="speaker-info">
      <h2 class="speaker-name">${speakerDetails[i].speakerName}</h2>
      <h3 class="speaker-profile">${speakerDetails[i].speakerProfile}</h3>
      <p class="speaker-bio">${speakerDetails[i].speakerBio}</p>
  </div>        
</div>`;
}

/*  DOM ELEMENTS  */
const body = document.querySelector('body');
const toggleMenu = document.createElement('div');
toggleMenu.setAttribute('class', 'toggleMenu');
toggleMenu.setAttribute('id', 'toggleMenu');
const aAbout = document.createElement('a');
aAbout.href = '#about';
const toggleAbout = document.createElement('p');
toggleAbout.setAttribute('class', 'toggle-items');
toggleAbout.innerHTML = 'About';
const aProgram = document.createElement('a');
aProgram.href = '#program';
const toggleProgram = document.createElement('p');
toggleProgram.setAttribute('class', 'toggle-items');
toggleProgram.innerHTML = 'Program';
const aJoin = document.createElement('a');
aJoin.href = '#join';
const toggleJoin = document.createElement('p');
toggleJoin.setAttribute('class', 'toggle-items');
toggleJoin.innerHTML = 'Join';
const aSponsor = document.createElement('a');
aSponsor.href = '#sponsor';
const toggleSponsor = document.createElement('p');
toggleSponsor.setAttribute('class', 'toggle-items');
toggleSponsor.innerHTML = 'Sponsor';
const aNews = document.createElement('a');
aNews.href = '#news';
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
