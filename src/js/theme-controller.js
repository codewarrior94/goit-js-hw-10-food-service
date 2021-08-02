import { refs, Theme } from './references';

refs.themeSwitcher.addEventListener('change', onThemeSwitchChange);

refs.body.classList.add(
  localStorage.getItem('theme') ? localStorage.getItem('theme') : Theme.LIGHT,
);

if (refs.body.classList.value === Theme.DARK) {
  refs.themeSwitcher.checked = true;
}

function onThemeSwitchChange(e) {
  if (e.target.checked) {
    localStorage.setItem('theme', Theme.DARK);
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
    return;
  }

  localStorage.setItem('theme', Theme.LIGHT);
  refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
}
