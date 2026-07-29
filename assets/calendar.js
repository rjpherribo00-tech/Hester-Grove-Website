document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('calGrid');
  const label = document.getElementById('calLabel');
  const panel = document.getElementById('calPanel');
  if (!grid) return;

  const MONTH_NAMES = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const today = new Date();
  let year = 2026;
  let month = 0; // default to January 2026; if current date is within 2026, jump to it
  if (today.getFullYear() === 2026){ month = today.getMonth(); }

  function render(){
    label.textContent = `${MONTH_NAMES[month]} ${year}`;
    grid.innerHTML = '';
    ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].forEach(d => {
      const el = document.createElement('div');
      el.className = 'cal-dow';
      el.textContent = d;
      grid.appendChild(el);
    });

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i=0; i<firstDay; i++){
      const empty = document.createElement('div');
      empty.className = 'cal-cell empty';
      grid.appendChild(empty);
    }

    for (let day=1; day<=daysInMonth; day++){
      const cell = document.createElement('div');
      cell.className = 'cal-cell';
      const isToday = today.getFullYear()===year && today.getMonth()===month && today.getDate()===day;
      if (isToday) cell.classList.add('today');

      const num = document.createElement('div');
      num.className = 'num';
      num.textContent = day;
      cell.appendChild(num);

      const events = getEventsForDay(year, month, day);
      if (events.length){
        const dots = document.createElement('div');
        dots.className = 'cal-dots';
        const hasEvent = events.some(e => !e.isBirthday);
        const hasBday = events.some(e => e.isBirthday);
        if (hasEvent){ const d = document.createElement('span'); d.className='dot dot-event'; dots.appendChild(d); }
        if (hasBday){ const d = document.createElement('span'); d.className='dot dot-birthday'; dots.appendChild(d); }
        cell.appendChild(dots);
      }

      cell.addEventListener('click', () => showDay(day, events));
      grid.appendChild(cell);
    }
  }

  function showDay(day, events){
    if (!events.length){
      panel.classList.remove('open');
      return;
    }
    panel.innerHTML = `<h3>${MONTH_NAMES[month]} ${day}, ${year}</h3>`;
    events.forEach(e => {
      const item = document.createElement('div');
      item.className = 'cal-event-item';
      item.innerHTML = `
        <span class="tag" style="background:${e.isBirthday ? 'var(--grove)' : 'var(--gold)'}"></span>
        <div>
          <div class="label">${e.title}</div>
          ${e.time ? `<div class="time">${e.time}</div>` : ''}
        </div>`;
      panel.appendChild(item);
    });
    panel.classList.add('open');
  }

  document.getElementById('calPrev').addEventListener('click', () => {
    month--; if (month < 0){ month = 11; year--; }
    panel.classList.remove('open');
    render();
  });
  document.getElementById('calNext').addEventListener('click', () => {
    month++; if (month > 11){ month = 0; year++; }
    panel.classList.remove('open');
    render();
  });

  render();
});
