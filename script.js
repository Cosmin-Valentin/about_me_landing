const header = document.getElementById('header')
const headerTrigger = document.querySelector('.header-trigger')

headerTrigger.addEventListener('click', () => {
  header.classList.toggle('is-open')
})

const heading = document.querySelector('.projects .scroll-heading')
const projectsInner = document.querySelector('.projects-inner')
const lastFrame = document.querySelector(
  '.projects-inner .variant:last-of-type .framer'
)
const threshold = lastFrame.offsetHeight

window.addEventListener('scroll', () => {
  const headingBottom = heading.getBoundingClientRect().bottom
  const projectsBottom = projectsInner.getBoundingClientRect().bottom
  const distance = projectsBottom - headingBottom

  if (distance < threshold) {
    heading.style.height = `${threshold + 100}px`
  } else {
    heading.style.height = 'auto'
  }
})
