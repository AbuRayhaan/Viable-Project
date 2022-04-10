const programData = [
    {
    id: 1,
    programIcon: 'fa-circle-play',
    programName: 'Lecture',
    programInfo: 'Listen to the sakers from various countries about the messages of sharig and opening.',
    },
    {
    id: 2,
    programIcon: 'fa-house-laptop',
    programName: 'Lecture',
    programInfo: 'Listen to the sakers from various countries about the messages of sharig and opening.',
    },
    id: 3,
    programIcon: 'fa-globe',
    programName: 'Lecture',
    programInfo: 'Listen to the sakers from various countries about the messages of sharig and opening.',
    },
    {
    id: 4,
    programIcon: 'fa-laptop',
    programName: 'Workshop',
    programInfo: 'Listen to the sakers from various countries about the messages of sharig and opening.',
    },
    id: 5,
    programIcon: 'fa-circle-nodes',
    programName: 'Lecture',
    programInfo: 'Listen to the sakers from various countries about the messages of sharig and opening.',
    },
];

const work = document.querySelector('#work');

for (let i = 0; i < projectData.length; i += 1) {
  work.innerHTML += `<ul class="project-works">
  <li class="project-image-container">
    <img src="${projectData[i].projectImageURL}" alt="Tonic" class="mobile-image">
  </li>

  <li class="project-body-block">
    <h2 class="project-title">${projectData[i].projectName}</h2>
    <div class="project-info">
      <span class="project-info-items canopy">${projectData[i].projectInfo}</span>
      <img src="./images/Counter.svg" alt="counter">
      <span class="project-info-items">${projectData[i].projectDev}</span>
      <img src="./images/Counter.svg" alt="counter">
      <span class="project-info-items">${projectData[i].projectYear}</span>
    </div>
    <p class="project-primary-text">${projectData[i].projectDesc}</p>
    <ul class="tags">
      <li class="tag">${projectData[i].projectLang1}</li>
      <li class="tag">${projectData[i].projectLang2}</li>
      <li class="tag">${projectData[i].projectLang3}</li>
    </ul>
    <button class="button popUp-button" data-id="3" type="button">See Project</button>
  </li>
</ul>`;
}