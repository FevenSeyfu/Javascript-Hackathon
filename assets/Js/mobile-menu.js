const hamburgerBtn = document.getElementById('menu-icon');
const cancleBtn = document.getElementById('cancle-icon');
const mobileScreen = window.matchMedia('screen and (max-width:768px)');
const mainBody = document.getElementById('main-body');
const mobileMenu = document.getElementById('mobile-menu');
// featured speakers container variable
const featuredSpeakerContainer = document.getElementById('featured-speakers-container');
// const desktopScreen = window.matchMedia('screen and (min-width:768px)');

function displayMobileMenu() {
  if (mobileScreen.matches) {
    mainBody.classList.replace('show', 'hide');
    mobileMenu.classList.replace('hide', 'show');
    mobileMenu.classList.add('mobile-menu-style');
  }
}

function hideMobileMenu() {
  mobileMenu.classList.replace('show', 'hide');
  mainBody.classList.replace('hide', 'show');
}

hamburgerBtn.addEventListener('click', displayMobileMenu);
cancleBtn.addEventListener('click', hideMobileMenu);

// creat object for featured speakers
const featuredSpeaker = [
  {
    id: 1,
    name: 'Jelle Adad',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi praesentium officiis voluptatem obcaecati.',
    image: 'assets/images/featured-speakers/speaker_avatar-1.png',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex exercitationem vel vitae nostrum!',
  },
  {
    id: 2,
    name: 'Baldewin Luan',
    title: 'Iusto, voluptatem, vero commodi quae omnis temporibus asperiores possimus exercitationem repellendus',
    image: 'assets/images/featured-speakers/speaker_avatar-2.png',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex exercitationem vel vitae nostrum!',
  },
  {
    id: 3,
    name: 'Jerry S. Levan',
    title: "daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: 'assets/images/featured-speakers/speaker_avatar-3.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi praesentium officiis voluptatem obcaecati. Iusto, voluptatem, vero commodi quae omnis temporibus asperiores possimus exercitationem repellendus optio voluptate praesentium! Voluptatum, dignissimos assumenda!',
  },
  {
    id: 4,
    name: 'Lidya Nasih',
    title: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: 'assets/images/featured-speakers/speaker_avatar-4.png',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex exercitationem vel vitae nostrum!',
  },
  {
    id: 5,
    name: 'Oliver Horvatinčić',
    title: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: 'assets/images/featured-speakers/speaker_avatar-5.png',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex exercitationem vel vitae nostrum!',
  },
  {
    id: 6,
    name: 'Jian Jen',
    title: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: 'assets/images/featured-speakers/speaker_avatar-6.png',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex exercitationem vel vitae nostrum!',
  },
];
function addFeaturedSpeaker() {
  const speakers = Object.keys(featuredSpeaker);
  speakers.forEach((speaker) => {
    const card = document.createElement('div');
    card.classList.add('speaker-card');
    featuredSpeakerContainer.append(card);
    card.innerHTML = `<div class="speaker-img">
        <img src="${featuredSpeaker[speaker].image}" alt="Speakers photo" class="speaker-avatar">
      </div>
      <div class="speaker-description-container">
        <h4 class="speaker-name" id="speaker-name">${featuredSpeaker[speaker].name}</h4>
          <p class="speaker-description primary"  id="speaker-qualification">${featuredSpeaker[speaker].title}</p>
            <div class="row"><hl class="divider-dark"></hl></div>
              <p class="speaker-description dark">${featuredSpeaker[speaker].description}</p>
            </div>`;
  });
}

window.addEventListener('DOMContentLoaded', () => {
  addFeaturedSpeaker();
});