const R2_VIDEO_BASE = 'https://pub-ad9fb4da42554181962318b31aa70fe2.r2.dev/assets/video/';
const videoUrl = filename => `${R2_VIDEO_BASE}${encodeURIComponent(filename)}`;

const projects = {
  moon: {
    title: 'MOON ILLUSTRATED', year: '2026', format: 'MIXED-MEDIA FILM', runtime: '00:33',
    image: './assets/images/moon-illustrated.jpg',
    media: [{ id: 'film', label: 'FILM', src: videoUrl('moon-illustrated.mp4'), poster: './assets/images/moon-illustrated.jpg', runtime: '00:33' }],
    description: 'I do not often get to make a project with my brother, so I knew I had to make this one count. It was my first major attempt at mixed-media and hand-drawn techniques, and it took a lot of planning, scheduling, and separate stages to finish. The process took forever, but every bit of that time paid off. I especially enjoyed lighting the piano and guitar scenes, and this is probably the most visually impressive project I have made so far.'
  },
  'three-truths': {
    title: 'THREE TRUTHS AND A LIE', year: '2026', format: 'SHORT FILM', runtime: '06:04', role: 'CO-DIRECTOR OF PHOTOGRAPHY',
    image: './assets/images/projects/three-truths-and-a-lie-poster.jpg',
    defaultMedia: 'trailer',
    media: [
      { id: 'trailer', label: 'TRAILER', src: videoUrl('Three Truths and a Lie Trailer.mp4'), poster: './assets/images/projects/three-truths-and-a-lie-poster.jpg', runtime: '00:27' },
      { id: 'film', label: 'FULL FILM', src: videoUrl('ThreeTruthsAndALie Film.mov'), poster: './assets/images/projects/three-truths-and-a-lie-poster.jpg', runtime: '06:04' }
    ],
    description: 'Directed by Jennifer Zhu, this was the biggest project I had worked on. Ryan Fong and I brought the story visually to life as co-directors of photography. I put everything into the storyboard and shot list, three days on set, and countless hours of editing so the finished film matched what I had imagined. The restaurant scenes remain my favourite because of the work, pressure, and difficult external environment behind them. More than anything, the project taught me how to make a film within a much larger team.'
  },
  psychosis: {
    title: 'PSYCHOSIS', year: '2026', format: 'FIRST SHORT FILM', runtime: '05:04', role: 'CO-DIRECTOR',
    image: './assets/images/psychosis-overlay.jpg',
    defaultMedia: 'trailer',
    media: [
      { id: 'trailer', label: 'TRAILER', src: videoUrl('PSYCHOSIS FINAL TRAILER.mp4'), poster: './assets/images/psychosis/trailer-poster.png', runtime: '00:41' },
      { id: 'film', label: 'FULL FILM', src: videoUrl('PSYCHOSIS_FINAL_web.mp4'), poster: './assets/images/psychosis/full-film-poster.png', runtime: '05:04' }
    ],
    description: 'This was my first actual short film, and my team ran into plenty of issues that my co-director Ryan Fong and I had to solve ourselves. I am grateful it happened that way because working through those problems taught me more than any previous video project: directing, compositing, editing, sound design, storyboarding, and especially gaffing. Seeing the storyboard become a real film made this feel like my first true step from videography into filmmaking. I carried those lessons directly into the much larger short film that followed.'
  },
  athletics: {
    title: 'UTSC ATHLETICS DOCUMENTARY', year: '2025', format: 'DOCUMENTARY / SOCIAL CAMPAIGN', runtime: '09:32', role: 'CO-LEAD / CAMERA / PRE-PRODUCTION',
    image: './assets/images/projects/utsc-athletics.jpg',
    defaultMedia: 'documentary',
    media: [
      { id: 'documentary', label: 'DOCUMENTARY', src: './assets/video/UTSC Athletics Documentary.mp4', poster: './assets/images/projects/utsc-athletics.jpg', runtime: '09:32' },
      { id: 'social', label: 'SOCIAL CUT', src: './assets/video/UTSC Athletics - Social Cut Version.mp4', poster: './assets/images/projects/utsc-athletics.jpg', runtime: '01:13' }
    ],
    description: 'This is the full UTSC 2024–2025 athletics documentary that my coworker and mentor Kumaran and I co-led. Kumaran handled most of the post-production, while we shared major responsibilities across interviews, regular-season filming, pre-production, and the vision for the story. It was a major learning curve, from presenting our direction to executives to preparing interview questions for coaches and players. I later handled post-production for the faster social cut, which is included here as the campaign version rather than a separate project.'
  },
  'first-year': {
    title: 'MY FIRST FULL YEAR AS A FILMMAKER', year: '2026', format: '2025 SHOWREEL', runtime: '00:08',
    image: './assets/images/projects/showreel-2025.jpg',
    media: [{ id: 'showreel', label: 'SHOWREEL', src: videoUrl('showreel-2025.mp4'), poster: './assets/images/projects/showreel-2025.jpg', runtime: '00:49' }],
    description: 'Man... it has been a full year already? Looking back, 2025 was a year of taking whatever opportunities appeared, messing up, and learning a ton from every attempt. I picked up new skills, met so many like-minded people, and came away with an even stronger passion for filmmaking. I could not ask for much more from my first full year, and I am excited to see where that momentum takes me in 2026.'
  },
  badminton: {
    title: 'CINEMATIC BADMINTON', year: '2025', format: 'SPORT / VISUAL EFFECTS', runtime: '00:50', role: 'DIRECTOR',
    image: './assets/images/projects/cinematic-badminton.jpg',
    media: [{ id: 'film', label: 'FILM', src: videoUrl('cinematic-badminton.mp4'), poster: './assets/images/projects/cinematic-badminton.jpg', runtime: '00:50' }],
    description: 'Badminton has been one of my biggest passions since I was a kid, so getting to direct and film my friends and me playing in a tournament was a no-brainer. It gave me the chance to combine two things I genuinely love. I spent a lot of time learning combinations of effects for the edit, and some individual frames took way, way too long. But that was also the point: pushing through those difficult frames was how I learned.'
  },
  toronto: {
    title: 'TORONTO?', year: '2025', format: 'TRAVEL FILM / MONTREAL', runtime: '00:49',
    image: './assets/images/projects/toronto.jpg',
    media: [{ id: 'film', label: 'FILM', src: videoUrl('toronto-film.mp4'), poster: './assets/images/projects/toronto.jpg', runtime: '00:49' }],
    description: 'This came from my first trip to Montreal with friends, where I overshot practically everything I passed because it was all new to me. I planned the video before arriving, then called it “Toronto?” because the journey begins there and because Montreal looked surprisingly familiar once I arrived. I loved the final flow and used the edit to experiment much more with sound effects. It took longer than most of my videos, but the response it received on social media made that time feel worthwhile.'
  },
  enki: {
    title: "ENKI'S WARNING", year: '2025', format: 'UNIVERSITY SHORT FILM', runtime: '00:54', role: 'DIRECTOR',
    image: './assets/images/projects/enkis-warning.jpg',
    media: [{ id: 'film', label: 'FILM', src: videoUrl("Enki's Warning - Chadwin.mp4"), poster: './assets/images/projects/enkis-warning.jpg', runtime: '00:54' }],
    description: 'For a university Mesopotamian Myth course, I had to create an art project that represented a story. I used that assignment as an opportunity to recreate the Sumerian myth of the “Atrahasis Flood” as a short film. Directing the entire project by myself pushed me into many things I had never done before, and I learned a huge amount from having to carry the film all the way through on my own.'
  },
  'good-old-days': {
    title: 'THE GOOD OLD DAYS ARE GONE', year: '2024', format: 'CAPTIVATE SUBMISSION', runtime: '01:04',
    image: './assets/images/projects/good-old-days.jpg',
    media: [{ id: 'film', label: 'FILM', src: videoUrl('The Good Old Days Are Gone.mp4'), poster: './assets/images/projects/good-old-days.jpg', runtime: '01:04' }],
    description: "I shot this on my old Panasonic Lumix FZ300 for UTSC Captivate 2024's Storytelling Competition. The idea came from realizing that I had been living in the past so much that it was stopping me from enjoying the present. That personal feeling became the central message of the film: the good old days may be gone, but constantly looking backward can make you miss the life that is still happening now."
  },
  'blue-mountain': {
    title: 'BLUE MOUNTAIN CLIMB', year: '2025', format: 'TRAVEL FILM', runtime: '00:35',
    image: './assets/images/projects/blue-mountain.jpg',
    media: [{ id: 'film', label: 'FILM', src: videoUrl('Blue Mountain Climb - Tek It.mp4'), poster: './assets/images/projects/blue-mountain.jpg', runtime: '00:35' }],
    description: 'I decided to climb Blue Mountain, so bringing a camera along felt obvious. It became one of my most enjoyable experiences, combining the climb with beautiful views and shots I was excited to find along the way. Even though the event itself was small, I spent a lot of time shaping the edit in the style I enjoy most. It remains one of my favourite videos and marked one year since I first picked up a camera with the intention of making films.'
  },
  'final-days': {
    title: 'FINAL DAYS OF 2024', year: '2024', format: 'MEMORY FILM', runtime: '00:56',
    image: './assets/images/projects/final-days-2024.jpg',
    media: [{ id: 'film', label: 'FILM', src: videoUrl('bored, end of 2024 vid.mp4'), poster: './assets/images/projects/final-days-2024.jpg', runtime: '00:56' }],
    description: 'I filmed the final days of 2024 purely to preserve memories while testing shot angles and effects I had never tried before. It was also the first video I shot on the Sony FX30 after saving for the camera. That combination of a personal moment, a new tool, and the freedom to experiment made the project especially meaningful to me. It became my favourite video at the time and an important marker of how I wanted my work to feel.'
  },
  'first-videography': {
    title: 'MY FIRST VIDEOGRAPHY PROJECT', year: '2024', format: 'PERSONAL FILM', runtime: '00:40',
    image: './assets/images/projects/first-videography.jpg',
    media: [{ id: 'film', label: 'FILM', src: videoUrl('My First Videography Project.mp4'), poster: './assets/images/projects/first-videography.jpg', runtime: '00:40' }],
    description: 'This began as a typical summer day, but it was also the first time I used a camera with the clear intention of turning the footage into a video afterward. Making it brought back my love of content creation and video editing. More importantly, it sparked the drive that pushed me toward videography and the film projects that followed.'
  },
  'no-surprises': {
    title: 'NO SURPRISES', year: '2024', format: 'COTTAGE TRIP FILM', runtime: '00:39',
    image: './assets/images/projects/no-surprises.jpg',
    media: [{ id: 'film', label: 'FILM', src: videoUrl('No Surprises - Cottage Trip.mp4'), poster: './assets/images/projects/no-surprises.jpg', runtime: '00:39' }],
    description: 'I made this recap during a cottage trip with my family, shortly after completing My First Videography Project. It gave me another chance to experiment with unfamiliar angles and camera techniques. The contrast between the happy memories and the much grimmer feeling of the song still feels slightly unsettling to me, but that tension is also what makes the piece memorable as an early experiment.'
  },
  'listening-mac': {
    title: 'LISTENING TO MAC DEMARCO FEELS LIKE', year: '2025', format: 'CINEMATOGRAPHY STUDY', runtime: '00:21', role: 'CINEMATOGRAPHER',
    image: './assets/images/projects/listening-mac.jpg',
    media: [{ id: 'film', label: 'FILM', src: videoUrl('listening to mac demarco feels like.mp4'), poster: './assets/images/projects/listening-mac.jpg', runtime: '00:21' }],
    description: 'I made this with one of the first filmmakers I met at UTSC. It was part of my effort to move from simply recording events toward cinematography, directing how I wanted each shot to look. I experimented with more deliberate lighting and new visual effects, and I especially liked the outro. The final piece came close to what I had imagined during pre-production.'
  },
  'utsc-bball': {
    title: 'UTSC VS. UTM BBALL SEMIFINALS', year: '2025', format: 'SPORTS RECAP', runtime: '00:29', role: 'CAMERA / EDIT',
    image: './assets/images/projects/utsc-bball.jpg',
    media: [{ id: 'film', label: 'FILM', src: videoUrl('utsc-vs-utm-bball-semifinals.mp4'), poster: './assets/images/projects/utsc-bball.jpg', runtime: '00:29' }],
    description: 'By this project I was starting to understand how to film fast-paced events and capture the shots I actually wanted. Editing basketball footage that I had filmed myself felt surreal because I had spent years editing NBA clips sourced from YouTube. The assignment connected that earlier editing practice with the real event coverage I was beginning to create on my own.'
  },
  convocation: {
    title: "SO WHAT'S NEXT? UOFT CONVOCATION", year: '2025', format: 'UNIVERSITY / CORPORATE FILM', runtime: '01:09', role: 'VIDEOGRAPHER / EDITOR',
    image: './assets/images/projects/convocation.jpg',
    media: [{ id: 'film', label: 'FILM', src: videoUrl('uoft-convocation.mp4'), poster: './assets/images/projects/convocation.jpg', runtime: '01:09' }],
    description: 'Filming convocation gave me the chance to capture a wide range of emotions and responses in a setting that was more corporate than my personal work, but still genuinely fun. The project involved many revisions and taught me a great deal about that kind of production workflow. I am especially grateful to Lisa for being patient with me on my first video project working at U of T.'
  },
  'movies-uoft': {
    title: 'MOVIES FILMED AT U OF T', year: '2025', format: 'UNIVERSITY SOCIAL FILM', runtime: '00:38', role: 'EDITOR / MOTION GRAPHICS',
    image: './assets/images/projects/movies-uoft.jpg',
    media: [{ id: 'film', label: 'FILM', src: './assets/video/movies-filmed-at-uoft.mp4', poster: './assets/images/projects/movies-uoft.jpg', runtime: '00:38' }],
    description: 'I had seen earlier U of T videos built around this concept before I worked there, so it was an honour to add my own version to the series. I had a lot of fun with the stickers and motion graphics, and I especially liked developing the opening around the “GENIUS” intro. The project let me put my own visual spin on an established format.'
  },
  'cinematic-studying': {
    title: 'CINEMATIC STUDYING', year: '2025', format: 'IMPROMPTU VIDEOGRAPHY', runtime: '00:33',
    image: './assets/images/projects/cinematic-studying.jpg',
    media: [{ id: 'film', label: 'FILM', src: videoUrl('cinematic studying.mp4'), poster: './assets/images/projects/cinematic-studying.jpg', runtime: '00:33' }],
    description: 'This came from a random day studying downtown with a friend when I suddenly wanted to practise videography. There was no plan or pre-production, and it became one of the fastest videos I had made. I still liked it a lot because it was created completely on the go. It was a small project made for the simple enjoyment of filming and editing.'
  },
  'syzygy-market': {
    title: 'SYZYGY SUSTAINABLE MARKET', year: '2025', format: 'EVENT RECAP',
    image: './assets/images/year-film.jpg',
    description: 'This was my first time filming an event like the SYZYGY Sustainable Market, so I used it to experiment with angles that could keep the recap engaging. The experience also made one weakness very clear: several shots stayed on screen too long and slowed the piece down. Recognizing that pacing problem became one of the most useful lessons I took from the edit.'
  },
  'syzygy-ai': {
    title: 'SYZYGY AI TOOLS WORKSHOP', year: '2025', format: 'EVENT RECAP', runtime: '00:36',
    image: './assets/images/projects/syzygy-ai.jpg',
    media: [{ id: 'film', label: 'FILM', src: videoUrl('sizigi ai workshop recap.mp4'), poster: './assets/images/projects/syzygy-ai.jpg', runtime: '00:36' }],
    description: 'This recap covered SYZYGY’s AI Tools Workshop with a professor and student guest speaker. It was a difficult event to film because the room had extremely low light, but that limitation pushed me to experiment with new approaches. I also liked the final flow of the video, and the project gave me more experience finding workable images in conditions that were far from ideal.'
  }
};

const rows = [...document.querySelectorAll('.project-row')];
rows.forEach((row, index) => row.style.setProperty('--archive-i', index));
const workSection = document.querySelector('.work');
const workFeature = document.querySelector('.work-feature');
const preview = document.querySelector('.work-preview img');
const video = document.querySelector('.work-preview video');
const playButton = document.querySelector('.media-play');
const playLabel = playButton.querySelector('span');
const mediaSelector = document.querySelector('.media-selector');
const mediaButtons = [...mediaSelector.querySelectorAll('[data-media]')];
const mediaDivider = mediaSelector.querySelector('[data-media-divider]');
const mediaRuntime = mediaSelector.querySelector('.media-runtime');
const counter = document.querySelector('.work-counter');
const detail = document.querySelector('.work-detail');
const detailTitle = detail.querySelector('h3');
const detailIndex = detail.querySelector('.detail-index');
const description = detail.querySelector('.detail-description');
let activeProjectId = 'moon';
let pendingProjectId = activeProjectId;
let activeMedia = 'film';
let mediaTimer;
let projectEntranceTimer;
let projectRenderToken = 0;
const projectMediaMemory = new Map();

const setMeta = (name, value) => {
  const container = detail.querySelector(`[data-meta="${name}"]`);
  const output = detail.querySelector(`[data-detail="${name}"]`);
  if (container) container.hidden = !value;
  if (output) output.textContent = value || '';
};

const formatRuntime = duration => {
  if (!Number.isFinite(duration)) return '';
  const total = Math.round(duration);
  const minutes = Math.floor(total / 60);
  const seconds = total % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

const getProjectMedia = project => {
  return project.media || [];
};

const prepareVideo = (project, requestedMedia) => {
  const media = getProjectMedia(project);
  const selected = media.find(item => item.id === requestedMedia) || media[0];
  video.pause();
  try { video.currentTime = 0; } catch {}
  video.hidden = true;
  preview.hidden = false;
  mediaSelector.hidden = media.length < 2;
  mediaDivider.hidden = media.length < 2;
  playButton.hidden = !selected;
  mediaButtons.forEach((button, index) => {
    const item = media[index];
    button.hidden = !item;
    if (!item) return;
    button.dataset.media = item.id;
    button.innerHTML = `<i aria-hidden="true"></i>${item.label}`;
    button.setAttribute('aria-pressed', String(item.id === selected?.id));
  });
  if (selected) {
    activeMedia = selected.id;
    projectMediaMemory.set(activeProjectId, selected.id);
    video.src = selected.src;
    video.poster = selected.poster;
    preview.src = selected.poster;
    preview.alt = `${project.title} ${selected.label.toLowerCase()} poster`;
    video.setAttribute('aria-label', `${project.title} ${selected.label.toLowerCase()}`);
    playButton.setAttribute('aria-label', `Play ${project.title} ${selected.label.toLowerCase()}`);
    playLabel.textContent = `PLAY ${selected.label}`;
    mediaRuntime.value = selected.runtime ? `${selected.label} / ${selected.runtime}` : `${selected.label} / LOADING`;
    setMeta('runtime', selected.runtime || project.runtime);
    video.load();
  } else {
    activeMedia = 'film';
    mediaRuntime.value = '';
    video.removeAttribute('src');
    video.load();
  }
};

const waitForPoster = src => new Promise(resolve => {
  if (!src) { resolve(); return; }
  const image = new Image();
  let settled = false;
  const finish = () => {
    if (settled) return;
    settled = true;
    resolve();
  };
  image.addEventListener('load', finish, { once: true });
  image.addEventListener('error', finish, { once: true });
  image.src = src;
  if (image.complete) finish();
  window.setTimeout(finish, 500);
});

const renderProject = async (key, index, animate = true) => {
  pendingProjectId = key;
  const project = projects[key];
  if (!project) return;
  const token = ++projectRenderToken;
  const rememberedMedia = projectMediaMemory.get(key);
  const requestedMedia = rememberedMedia || project.defaultMedia || getProjectMedia(project)[0]?.id;
  const selectedMedia = getProjectMedia(project).find(item => item.id === requestedMedia) || getProjectMedia(project)[0];
  const nextPoster = selectedMedia?.poster || project.image;
  video.pause();
  if (animate) workFeature.classList.add('is-changing');
  if (animate) await Promise.all([new Promise(resolve => window.setTimeout(resolve, 260)), waitForPoster(nextPoster)]);
  if (token !== projectRenderToken) return;
  activeProjectId = key;
  workSection?.style.setProperty('--archive-shift-x', `${((index % 5) - 2) * 1.6}%`);
  workSection?.style.setProperty('--archive-shift-y', `${((index % 4) - 1.5) * 1.2}%`);
  preview.src = nextPoster;
  preview.alt = `${project.title} project preview`;
  counter.textContent = `ARCHIVE ${String(index + 1).padStart(2, '0')} / ${String(rows.length).padStart(2, '0')}`;
  detailIndex.textContent = `ARCHIVE ENTRY ${String(index + 1).padStart(2, '0')}`;
  detailTitle.textContent = project.title;
  detail.querySelector('[data-detail="format"]').textContent = project.format;
  detail.querySelector('[data-detail="year"]').textContent = project.year;
  setMeta('runtime', project.runtime);
  setMeta('role', project.role);
  description.textContent = project.description;
  prepareVideo(project, requestedMedia);
  rows.forEach((item, rowIndex) => {
    const selected = rowIndex === index;
    item.classList.toggle('active', selected);
    item.setAttribute('aria-pressed', String(selected));
  });
  window.clearTimeout(projectEntranceTimer);
  workFeature.classList.remove('is-changing', 'is-entering');
  if (animate) {
    void workFeature.offsetWidth;
    workFeature.classList.add('is-entering');
    projectEntranceTimer = window.setTimeout(() => workFeature.classList.remove('is-entering'), 920);
  }
};

rows.forEach((row, index) => {
  const activateProject = () => {
    if (pendingProjectId !== row.dataset.project) renderProject(row.dataset.project, index);
  };
  row.addEventListener('click', activateProject);
  row.addEventListener('keydown', event => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    activateProject();
  });
});

mediaButtons.forEach(button => button.addEventListener('click', () => {
  const project = projects[activeProjectId];
  if (!project || button.dataset.media === activeMedia) return;
  window.clearTimeout(mediaTimer);
  document.querySelector('.work-media').classList.add('is-switching');
  mediaTimer = window.setTimeout(() => {
    prepareVideo(project, button.dataset.media);
    requestAnimationFrame(() => document.querySelector('.work-media').classList.remove('is-switching'));
  }, 140);
}));

playButton.addEventListener('click', async () => {
  if (!video.getAttribute('src')) return;
  preview.hidden = true;
  video.hidden = false;
  playButton.hidden = true;
  try { await video.play(); } catch { preview.hidden = false; video.hidden = true; playButton.hidden = false; }
});

video.addEventListener('loadedmetadata', () => {
  const project = projects[activeProjectId];
  const selected = getProjectMedia(project).find(item => item.id === activeMedia);
  if (!selected) return;
  const runtime = formatRuntime(video.duration);
  if (runtime) {
    selected.runtime = runtime;
    mediaRuntime.value = `${selected.label} / ${runtime}`;
    setMeta('runtime', runtime);
  }
});

video.addEventListener('ended', () => {
  video.hidden = true;
  preview.hidden = false;
  playButton.hidden = false;
});

renderProject('moon', 0, false);

const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.mobile-menu');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  menu.hidden = open;
  document.body.classList.toggle('menu-open', !open);
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}));

const lens = document.querySelector('.lens');
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const lensEnabled = false;
if (lensEnabled && !reduced && finePointer) {
  let targetX = -200, targetY = -200, x = -200, y = -200;
  window.addEventListener('pointermove', event => {
    targetX = event.clientX - 66;
    targetY = event.clientY - 66;
    lens.style.opacity = '1';
  }, { passive: true });
  window.addEventListener('pointerleave', () => lens.style.opacity = '0');
  const follow = () => {
    x += (targetX - x) * .13;
    y += (targetY - y) * .13;
    lens.style.transform = `translate3d(${x}px,${y}px,0)`;
    requestAnimationFrame(follow);
  };
  requestAnimationFrame(follow);
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const approachSection = entry.target.closest('.statement');
    if (approachSection && entry.isIntersecting) {
      approachSection.classList.add('in-view');
      approachSection.querySelectorAll('.statement-label,.statement h2,.statement-small,.collage').forEach(element => element.classList.add('in-view'));
      observer.unobserve(entry.target);
    } else if (!approachSection) {
      entry.target.classList.toggle('in-view', entry.isIntersecting);
      if (entry.target.matches('.work-layout') && entry.isIntersecting) {
        entry.target.closest('.work')?.classList.add('archive-in-view');
      }
    }
  });
}, { threshold: .12 });
document.querySelectorAll('.statement-label,.statement h2,.statement-small,.collage,.work-layout,.project-index,.process-grid,.capabilities,.contact h2').forEach(el => observer.observe(el));

const hero = document.querySelector('.hero');
if (hero && !reduced) {
  let heroExitFrame = 0;
  const updateHeroExit = () => {
    const progress = Math.min(1, Math.max(0, window.scrollY / (hero.offsetHeight * .82)));
    const signature = Math.max(0, 1 - progress * 2.25);
    const visual = Math.max(0, 1 - Math.max(0, progress - .16) * 1.55);
    hero.style.setProperty('--signature-opacity', signature.toFixed(3));
    hero.style.setProperty('--signature-y', `${(-20 * (1 - signature)).toFixed(2)}px`);
    hero.style.setProperty('--visual-opacity', visual.toFixed(3));
    hero.style.setProperty('--visual-y', `${(-16 * (1 - visual)).toFixed(2)}px`);
    hero.style.setProperty('--hero-progress', progress.toFixed(3));
    heroExitFrame = 0;
  };
  window.addEventListener('scroll', () => {
    if (!heroExitFrame) heroExitFrame = requestAnimationFrame(updateHeroExit);
  }, { passive: true });
  updateHeroExit();
}

const approach = document.querySelector('.statement');
if (approach && !reduced) {
  let approachFrame = 0;
  const updateApproachScene = () => {
    const rect = approach.getBoundingClientRect();
    const progress = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / (window.innerHeight * 1.45)));
    const depth = Math.min(1, Math.max(0, -rect.top / Math.max(1, rect.height - window.innerHeight)));
    approach.style.setProperty('--approach-progress', progress.toFixed(3));
    approach.style.setProperty('--approach-depth', depth.toFixed(3));
    approachFrame = 0;
  };
  window.addEventListener('scroll', () => {
    if (!approachFrame) approachFrame = requestAnimationFrame(updateApproachScene);
  }, { passive: true });
  window.addEventListener('resize', updateApproachScene, { passive: true });
  updateApproachScene();
}

const frameBridge = document.querySelector('.frame-bridge--hold');
if (frameBridge) {
  frameBridge.dataset.interaction = 'ready';
  const comparison = frameBridge.querySelector('.hold-comparison');
  const finalImage = frameBridge.querySelector('.hold-final');
  const processImage = frameBridge.querySelector('.hold-process img');
  const instruction = frameBridge.querySelector('.hold-instruction');
  const frameCounter = frameBridge.querySelector('.hold-frame-meta--right');
  const artifact = frameBridge.querySelector('.hold-artifact');
  const selector = frameBridge.querySelector('.hold-selector');
  const pairButtons = [...frameBridge.querySelectorAll('[data-hold-pair]')];
  const pairs = {
    moon: {
      title: 'Moon Illustrated', number: '01',
      final: './assets/images/behind%20the%20scenes/moon%20illustrated%20final%20crop.png',
      process: './assets/images/behind%20the%20scenes/moon%20illustrated%20bts.png',
      finalAlt: 'Finished Moon Illustrated mixed-media frame',
      processAlt: 'Behind-the-scenes creation of the Moon Illustrated frame'
    },
    'three-truths': {
      title: 'Three Truths and a Lie', number: '02',
      final: './assets/images/behind%20the%20scenes/three%20truths%20and%20a%20lie%20final%20result%20%232.png',
      process: './assets/images/behind%20the%20scenes/three%20truths%20and%20a%20lie%20bts%20%232.jpg',
      finalAlt: 'Finished cinematic frame from Three Truths and a Lie',
      processAlt: 'Studio lighting, camera, and crew behind Three Truths and a Lie'
    }
  };

  Object.values(pairs).forEach(pair => [pair.final, pair.process].forEach(src => { const image = new Image(); image.src = src; }));
  let held = false;
  let switchTimer = 0;
  const setHeld = value => {
    held = value;
    comparison.classList.toggle('is-held', value);
    comparison.setAttribute('aria-pressed', String(value));
    instruction.textContent = value ? 'VIEWING PROCESS' : 'HOLD TO REVEAL PROCESS';
  };
  comparison.addEventListener('pointerdown', event => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    setHeld(true);
  });
  comparison.addEventListener('pointerup', () => setHeld(false));
  comparison.addEventListener('pointercancel', () => setHeld(false));
  comparison.addEventListener('pointerleave', () => { if (held) setHeld(false); });
  window.addEventListener('pointerup', () => { if (held) setHeld(false); });
  comparison.addEventListener('keydown', event => {
    if ((event.code === 'Space' || event.code === 'Enter') && !event.repeat) {
      event.preventDefault();
      setHeld(true);
    }
  });
  comparison.addEventListener('keyup', event => {
    if (event.code === 'Space' || event.code === 'Enter') {
      event.preventDefault();
      setHeld(false);
    }
  });
  comparison.addEventListener('blur', () => setHeld(false));

  const activatePair = button => {
    const pair = pairs[button.dataset.holdPair];
    if (!pair || button.classList.contains('is-active')) return;
    setHeld(false);
    window.clearTimeout(switchTimer);
    artifact.classList.add('is-switching');
    switchTimer = window.setTimeout(() => {
      finalImage.src = pair.final;
      finalImage.alt = pair.finalAlt;
      processImage.src = pair.process;
      processImage.alt = pair.processAlt;
      frameCounter.textContent = `FRAME ${pair.number} / 02`;
      comparison.dataset.pair = button.dataset.holdPair;
      comparison.setAttribute('aria-label', `Hold to reveal the process image for ${pair.title}`);
      pairButtons.forEach(item => {
        const active = item === button;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      requestAnimationFrame(() => requestAnimationFrame(() => artifact.classList.remove('is-switching')));
    }, reduced ? 0 : 150);
  };
  selector.addEventListener('click', event => {
    const button = event.target.closest('[data-hold-pair]');
    if (button && selector.contains(button)) activatePair(button);
  });
}

const processJourney = document.querySelector('.process-journey');
if (processJourney) {
  const stageButtons = [...processJourney.querySelectorAll('[data-process-stage]')];
  const imageSlots = [...processJourney.querySelectorAll('[data-process-image]')];
  const stageIndex = processJourney.querySelector('[data-process-index]');
  const stageSignal = processJourney.querySelector('[data-process-signal]');
  const stageNote = processJourney.querySelector('[data-process-note]');
  const stages = {
    idea: {
      index: '01 / IDEA', signal: 'ORIGIN POINT', note: 'Most projects start with one visual question.',
      images: [
        ['./assets/images/process/idea/idea%20-%2001%20-%20close%20up%20of%20storyboard.png', 'Close-up of a storyboard at the idea stage'],
        ['./assets/images/process/idea/idea%20-%2002%20-%20full%20storyboard.png', 'Full storyboard used to plan a film'],
        ['./assets/images/process/idea/idea%20-%2004%20-%20moon%20illustrated%20information%20document.png', 'Moon Illustrated pre-production document']
      ]
    },
    shoot: {
      index: '02 / SHOOT', signal: 'CAPTURE PHASE', note: 'Camera, light, movement, blocking, and the decisions that happen on set.',
      images: [
        ['./assets/images/process/shoot/shoot%20-%2002%20-%20helping%20set%20up%20rig.jpg', 'Helping assemble a camera rig during production'],
        ['./assets/images/process/shoot/Shoot%20-%2003%20-%20camera%20work.png', 'Operating the camera during a shoot']
      ]
    },
    edit: {
      index: '03 / EDIT', signal: 'ASSEMBLY / RECONSTRUCTION', note: 'This is usually where the idea starts becoming something stranger.',
      images: [
        ['./assets/images/process/edit/edit%20%231%20-%20after%20effects%20-%20blue%20mountain%20climb.png', 'After Effects work on Blue Mountain Climb'],
        ['./assets/images/process/edit/edit%20%232%20-%20premiere%20pro%20-%20schooled-up%20ad.png', 'Premiere Pro timeline for the Schooled Up advertisement'],
        ['./assets/images/process/edit/edit%20%233%20-%20contact%20sheet%20for%20moon%20illustrated.jpg', 'Moon Illustrated contact sheet during post-production']
      ]
    },
    finish: {
      index: '04 / FINISH', signal: 'FINAL SIGNAL', note: 'The last pass is about making every decision feel intentional.',
      images: [
        ['./assets/images/process/finish/finish%2001%20-%20blue%20mountain%20frame%20from%20animation.png', 'Finished animation frame from Blue Mountain Climb'],
        ['./assets/images/process/finish/finish%2002%20-%20three%20truths%20and%20a%20lie%20movie%20poster.JPG', 'Finished Three Truths and a Lie movie poster'],
        ['./assets/images/process/finish/finish%2003-%20psychosis%20movie%20poster.png', 'Finished Psychosis movie poster']
      ]
    }
  };
  let processTimer = 0;
  const activateStage = button => {
    const key = button.dataset.processStage;
    const stage = stages[key];
    if (!stage || button.classList.contains('is-active')) return;
    window.clearTimeout(processTimer);
    processJourney.classList.add('is-changing');
    processTimer = window.setTimeout(() => {
      processJourney.dataset.stage = key;
      processJourney.classList.toggle('has-two-images', stage.images.length === 2);
      stageIndex.textContent = stage.index;
      stageSignal.textContent = stage.signal;
      stageNote.textContent = stage.note;
      imageSlots.forEach((image, index) => {
        const source = stage.images[index];
        if (source) {
          image.src = source[0];
          image.alt = source[1];
        } else {
          image.removeAttribute('src');
          image.alt = '';
        }
      });
      stageButtons.forEach(item => {
        const active = item === button;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      requestAnimationFrame(() => requestAnimationFrame(() => processJourney.classList.remove('is-changing')));
    }, reduced ? 0 : 220);
  };
  stageButtons.forEach(button => {
    button.addEventListener('click', () => activateStage(button));
    button.addEventListener('keydown', event => {
      if ((event.code === 'Enter' || event.code === 'Space') && !event.repeat) {
        event.preventDefault();
        activateStage(button);
      }
    });
  });
}
