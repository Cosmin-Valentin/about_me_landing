document.querySelector('.header-trigger')?.addEventListener('click', () => {
  document.getElementById('header')?.classList.toggle('is-open')
})

const heading = document.querySelector('.projects .scroll-heading')
const projectsInner = document.querySelector('.projects-inner')
const lastFrame = document.querySelector(
  '.projects-inner .variant:last-of-type .framer'
)

if (heading && projectsInner && lastFrame) {
  const threshold = lastFrame.offsetHeight
  const headingHeight = heading.offsetHeight

  window.addEventListener('scroll', () => {
    adjustHeadingHeight()
    handleScaling()
  })

  function adjustHeadingHeight() {
    const headingBottom = heading.getBoundingClientRect().bottom
    const projectsBottom = projectsInner.getBoundingClientRect().bottom
    const distance = projectsBottom - headingBottom

    if (distance < threshold) {
      heading.style.height = `${threshold + headingHeight}px`
    } else {
      heading.style.height = 'auto'
    }
  }

  function handleScaling() {
    const framers = document.querySelectorAll('.framer')

    framers.forEach((framer, index) => {
      const rect = framer.getBoundingClientRect()
      const isStuck = rect.top <= 100 && rect.bottom > 100

      if (index < framers.length - 1) {
        const nextFramer = framers[index + 1]
        const nextRect = nextFramer.getBoundingClientRect()
        const framerMidPoint = rect.top + rect.height / 2

        if (isStuck && nextRect.top <= framerMidPoint) {
          framer.classList.add('scaled')
        } else if (nextRect.top > framerMidPoint) {
          framer.classList.remove('scaled')
        }
      }
    })
  }
}

document.querySelector('.header-link').addEventListener('click', function (e) {
  e.preventDefault()
  if (window.innerWidth < 1025) {
    document.getElementById('header')?.classList.toggle('is-open')
  }
  document
    .querySelector('section.projects')
    .scrollIntoView({ behavior: 'smooth', block: 'start' })
})
