/* -------------Mobile menu----------------*/

const nav = document.querySelector('.mobile-menu');
const openButton = document.querySelector('#open');
const closeButton = document.querySelector('#close');

openButton.addEventListener('click', () => {
  nav.classList.add('visible');
});

closeButton.addEventListener('click', () => {
  nav.classList.remove('visible');
});

const menuLinks = document.querySelectorAll(".mobile-menu a[href^='#']");

menuLinks.forEach((menulink) => {
  menulink.addEventListener('click', () => {
    nav.classList.remove('visible');
  });
});

/* ------------------------------------------------------*/

const cowboys = [
  {
    name: 'Zeke Thurston',
    age: '28',
    description: '#3 World Saddle Bronc Riding',
    image: 'Capstone-img/ZEKE_THURSTON_01.png',
    from: 'Big Valley, AB',
  },
  {
    name: 'Stetson Wright',
    age: '23',
    description: '#2 World Bull Riding',
    image: 'Capstone-img/Stetson_Wright_2022_NFR_SB_.png',
    from: 'Milford, UT',
  },
  {
    name: 'Caleb Smidt',
    age: '33',
    description: '#3 World Tie-down Roping',
    image: 'Capstone-img/CALEB_SMIDT_TD_2022_71.png',
    from: 'Bellville, TX',
  },
  {
    name: 'Logan Hay',
    age: '26',
    description: '#17 World Saddle Bronc Riding',
    image: 'Capstone-img/Logan_Hay_2022_NFR_SB.png',
    from: 'Wildwood AB',
  },
  {
    name: 'Patrick Smith',
    age: '43',
    description: '#10 World Team Roping',
    image: 'Capstone-img/Patrick_Smith.png',
    from: 'Lipan, Tx',
  },
  {
    name: 'Tanner Tomlinson',
    age: '22',
    description: '#11 World Team Roping',
    image: 'Capstone-img/Tanner_Tomlinson_2022_NFR_TR.png',
    from: 'Angleton, TX',
  },
];

const cowboysContainer = document.querySelector('#cowboys-container');

cowboys.forEach((project) => {
  const projectCard = document.createElement('div');
  projectCard.classList.add('project-card');

  const projectImage = document.createElement('img');
  projectImage.src = project.image;
  projectImage.alt = project.name;
  projectCard.appendChild(projectImage);

  const projectDetails = document.createElement('div');
  projectDetails.classList.add('project-details');
  projectCard.appendChild(projectDetails);

  const projectName = document.createElement('h3');
  projectName.textContent = project.name;
  projectDetails.appendChild(projectName);

  const projectAge = document.createElement('p');
  projectAge.textContent = project.age;
  projectAge.classList.add('project-age');
  projectDetails.appendChild(projectAge);

  const projectFrom = document.createElement('p');
  projectFrom.textContent = project.from;
  projectFrom.classList.add('project-from');
  projectDetails.appendChild(projectFrom);

  const projectDescription = document.createElement('p');
  projectDescription.textContent = project.description;
  projectDescription.classList.add('project-description');
  projectDetails.appendChild(projectDescription);

  cowboysContainer.appendChild(projectCard);
});
