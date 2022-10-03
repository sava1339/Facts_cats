var s = 'sd'
console.log(localStorage.getItem('cat'));
console.log(s)
function cat(el) {
  s = el;
  window.localStorage.setItem('cat', s);
}
