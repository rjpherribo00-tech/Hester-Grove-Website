// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links){
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? '✕' : '☰';
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.textContent = '☰';
    }));
  }

  // Hero light rays + motes (signature element)
  const rays = document.querySelector('.rays');
  if (rays){
    const count = 7;
    for (let i=0;i<count;i++){
      const r = document.createElement('div');
      r.className = 'ray';
      const left = 8 + (i * (84/(count-1)));
      r.style.left = left + '%';
      r.style.setProperty('--a', (-6 + Math.random()*12) + 'deg');
      r.style.animationDelay = (i * 0.7) + 's';
      rays.appendChild(r);
    }
  }
  const motes = document.querySelector('.motes');
  if (motes){
    for (let i=0;i<22;i++){
      const m = document.createElement('div');
      m.className = 'mote';
      m.style.left = Math.random()*100 + '%';
      m.style.top = 30 + Math.random()*60 + '%';
      m.style.animationDuration = (5 + Math.random()*6) + 's';
      m.style.animationDelay = (Math.random()*5) + 's';
      motes.appendChild(m);
    }
  }
});

// Gallery link: added to the menu and footer of every page
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav-links');
  if (nav && !nav.querySelector('a[href="gallery.html"]')) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = 'gallery.html';
    a.setAttribute('data-key', 'gallery');
    a.textContent = 'Gallery';
    li.appendChild(a);
    const give = nav.querySelector('a[href="give.html"]');
    nav.insertBefore(li, give ? give.parentElement : null);
  }
  const explore = Array.from(document.querySelectorAll('.footer-grid h4')).find(h => h.textContent.trim() === 'Explore');
  if (explore && !document.querySelector('.footer-grid a[href="gallery.html"]')) {
    const link = document.createElement('a');
    link.href = 'gallery.html';
    link.textContent = 'Photo Gallery';
    explore.parentElement.appendChild(link);
  }
});
