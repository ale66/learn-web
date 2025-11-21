// Cookie helpers (simple)
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (encodeURIComponent(value) || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
  }
  return null;
}

// Replace any class on an element that starts with 'season-' with a new season class.
function replaceSeasonClass(el, newSeasonClass) {
  var toRemove = [];
  el.classList.forEach(function(c) {
    if (c.startsWith('season-')) toRemove.push(c);
  });
  toRemove.forEach(function(c) { el.classList.remove(c); });
  el.classList.add(newSeasonClass);
}

// Main function called by all buttons
function changeSeason(season) {
  if (!season) return;
  var newClass = 'season-' + season;

  // Find all elements that currently have a season-... class.
  var candidates = document.querySelectorAll('[class*="season-"]');

  candidates.forEach(function(el) {
    replaceSeasonClass(el, newClass);
  });

  // Also apply the season class to the body so global background/colors apply
  replaceSeasonClass(document.body, newClass);

  // Persist preference in cookie for 365 days
  setCookie('preferred-season', season, 365);

  // Reflect active state on buttons
  document.querySelectorAll('.controls .btn').forEach(function(b) {
    b.setAttribute('aria-pressed', 'false');
  });
  var activeBtn = document.getElementById('btn-' + season);
  if (activeBtn) activeBtn.setAttribute('aria-pressed', 'true');
}

// On load, restore season from cookie (if any), otherwise default
document.addEventListener('DOMContentLoaded', function() {
  var saved = getCookie('preferred-season');
  if (!saved) saved = 'default';
  changeSeason(saved);
});
