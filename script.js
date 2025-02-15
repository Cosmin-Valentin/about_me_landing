const header = document.getElementById('header')
const headerTrigger = document.querySelector('.header-trigger')

headerTrigger.addEventListener('click', () => {
  header.classList.toggle('is-open')
})
