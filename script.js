const hamburger = document.querySelector('.bars');
const navMenu = document.querySelector('nav');
const closeIcon = document.querySelector('.xicon');
const links = document.querySelectorAll('.links');
const workS = document.querySelector('.work');
const form = document.querySelector('.form');


const popUpWindowModal = (props) => `<div class="overlay" id="overlay">
  <div class="modalWindow">
    <div class="modalWindowChildWrapper wrapper-1">
        <div class="project">
          <h1 class="project-modal-title">${props.title}</h1>
          <img src="./images/IconCancel.svg" alt="" class="pIcon project--close_icon" />
        </div>
        <ul class="technology-list">
          ${props.tags.map((eachSkill) => `<li class="skills">${eachSkill}</li>`).join('')}
        </ul>
      </div>
      <div class="modalWindowChildWrapper wrapper-2">
        <img src=${props.image} alt="" class="pIcon modalWindowChildWrapper--Img">
        <div class="modalWindow_sub--child">
          ${window.innerWidth < 768 ? `<p class="modalWindow_sub--child--desc">${props.full_desc.split(' ').slice(0, 60).join(' ')}</p>` : `<p class="modalWindow_sub--child--desc">${props.full_desc}</p>`}
          <ul class="modalWindow_sub--child--btn_wrapper">
            <li class="btn_wrapper--list">
              <a href="#" target="_blank" rel="noopener noreferrer" class="btn_wrapper--modal-btn">See Live <img src="./images/IconExport.svg" alt="" /></a>
            </li>
            <li class="btn_wrapper--list">
              <a href="#"  target="_blank" rel="noopener noreferrer" class="btn_wrapper--modal-btn">See Project <img src="./images/IconGitHub.svg" alt="" /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>`;

  const ConvertStringToHTML = (str) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(str, 'text/html');
    return doc.body;
  };

  const projectCardList = {
    featured: {
      title: 'Multi-Post Stories',
      short_desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      full_desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
      image: './images/Img-Placeholder.jpg',
      tags: ['css', 'html', 'bootstrap', 'ruby'],
    },
    cards: [
      {
        id: 1,
        title: 'Profesional Art Printing Data-1',
        short_desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
        full_desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
        image: './images/popup.png',
        tags: ['html', 'bootstrap', 'ruby'],
      },
      {
        id: 2,
        title: 'Profesional Art Printing Data-2',
        short_desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
        full_desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
        image: './images/popup.png',
        tags: ['html', 'bootstrap', 'ruby'],
      },
      {
        id: 3,
        title: 'Profesional Art Printing Data-3',
        short_desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
        full_desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
        image: './images/popup.png',
        tags: ['html', 'bootstrap', 'ruby'],
      },
      {
        id: 4,
        title: 'Profesional Art Printing Data-4',
        short_desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
        full_desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
        image: './images/popup.png',
        tags: ['html', 'bootstrap', 'ruby'],
      },
      {
        id: 5,
        title: 'Profesional Art Printing Data-5',
        short_desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
        full_desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
        image: './images/popup.png',
        tags: ['html', 'bootstrap', 'ruby'],
      },
      {
        id: 6,
        title: 'Profesional Art Printing Data-6',
        short_desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
        full_desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
        image: './images/popup.png',
        tags: ['html', 'bootstrap', 'ruby'],
      }
    ],
  };

  const featuredHtml = `<div class="feature">
  <img src=${projectCardList.featured.image} class="yoga-image" alt="">
  <div class="project-detail">
    <h3 class="project-title">${projectCardList.featured.title}</h3>
    <p class="project-text">${projectCardList.featured.short_desc}</p>
    <ul class="languages">
    ${projectCardList.featured.tags
      .map((tagName) => `<li class="skills">${tagName}</li>`)
      .join('')}
    </ul>
    <button class="see-project-button" type="button">See Project</button>
  </div>
</div>`;

console.log(projectCardList.featured)
workS.appendChild(
  ...ConvertStringToHTML(featuredHtml).children,
);

const projectUnorderedList = document.createElement('ul');
projectUnorderedList.className = 'random-projects';

hamburger.addEventListener('click', () => {
    hamburger.classList.remove('bars');
    navMenu.classList.add('active');
    closeIcon.classList.add('show');
});

closeIcon.addEventListener('click', () => {
    closeIcon.classList.remove('show');
    navMenu.classList.remove('active');
    hamburger.classList.add('bars');
  });
  
  links.forEach((n) => n.addEventListener('click', () => {
    navMenu.classList.remove('active');
    closeIcon.classList.remove('show');
    hamburger.classList.add('bars');
  }));

  const popUpHandler = (obj) => {
    document.body.prepend(...ConvertStringToHTML(popUpWindowModal(obj)).children);
  };
  

  const projectWorkList = projectCardList.cards.map(
    (li) => `<li class="projects">
    <div class="project-description">
      <h3 class="project-title2">${li.title}</h3>
      <p class="project-text2">
        ${li.short_desc}
      </p>
      <ul class="lang">
      ${li.tags.map((tagName) => `<li class="skills2">${tagName}</li>`).join('')}
      </ul>
    </div>
    <button class="see2 proj_id-${li.id}" type="button">See Project</button>
  </li>`,
  );

  projectWorkList.forEach((eachList) => {
    projectUnorderedList.appendChild(...ConvertStringToHTML(eachList).children);
  });
  workS.appendChild(projectUnorderedList);
  
  workS.addEventListener('click', (e) => {
    const getElement = e.target;
    console.log(getElement)
    if (getElement.nodeName.toLowerCase() === 'button' && (getElement.className.includes('see-project-button') || getElement.className.includes('see2'))) {
      if (getElement.className.includes('proj_id')) {
        popUpHandler(projectCardList.cards[Number(getElement.classList[1].split('-')[1]) - 1]);
      } else {
        popUpHandler(projectCardList[getElement.classList[1]]);
      }
    }
  });

  document.body.addEventListener('click', (e) => {
    const overlayModal = document.getElementById('overlay');
    if (e.target.nodeName.toLowerCase() === 'img') {
      if (e.target.className.includes('project--close_icon')) {
        overlayModal.remove();
      }
    }
  });
  