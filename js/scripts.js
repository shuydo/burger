// const burger = document.getElementById('burger');
// console.log(burger);
burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  nav.classList.toggle("active");
  document.body.classList.toggle("lock");
})