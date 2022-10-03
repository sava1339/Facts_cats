var s = 'sd'
console.log(localStorage.getItem('cat'));
function cat(el) {
  s = el;
  window.localStorage.setItem('cat', s);
}
