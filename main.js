let contnet = document.querySelector('.links-container')
let navbar = document.querySelector('nav')

fetch('./data.json').then(response => response.json()).then(data => {
  data.forEach(e => {
    let headTitle = document.createElement('h3')
    headTitle.textContent = e.headTitle

    let section = document.createElement('section')
    section.id = headTitle.textContent.toLowerCase()
    section.style.paddingTop = '20px'
    section.style.paddingBottom = '20px'
    section.appendChild(headTitle)

    contnet.appendChild(section)
    
    // create 'navbar links' based on 'number of categories'
    let navLink = document.createElement('a')
    navLink.textContent = headTitle.textContent
    navLink.setAttribute('href', `#${section.id}`)
    navbar.appendChild(navLink)

    let websites = document.createElement('div')
    websites.classList.add('webs')
    section.appendChild(websites)

    e.links.forEach(e => {
      let linkBox = document.createElement('a')
      linkBox.setAttribute('href', e.link)
      linkBox.setAttribute('target', '_blank')
      let box = document.createElement('div')
      box.classList.add('bg')
      let logoImg = document.createElement('img')
      logoImg.setAttribute('src', `./images/${e.logo}`)
      box.appendChild(logoImg)
      linkBox.appendChild(box)
      websites.appendChild(linkBox)
    })
  
  })

  // add 'active class' to 'target link'
  let navbarToArray = document.querySelectorAll('nav a')
  navbarToArray.forEach(link => {
    link.addEventListener('click', (e) => {
      navbarToArray.forEach(link => {
        link.classList.remove('active')
      })
      e.target.classList.add('active')
    })
  })

})


// ----------------------------------------------------------------------------

let menuIcon = document.querySelector('.menu-icon')
let closeIcon = document.querySelector('.close-icon')
let overlay = document.querySelector('.overlay')

menuIcon.addEventListener('click', () => {
  overlay.style.display = 'block'
  navbar.style.transform = 'translateX(0)'
})

const closeMenu = () => {
  overlay.style.display = 'none'
  navbar.style.transform = 'translateX(100%)'
}

closeIcon.onclick = closeMenu
overlay.onmouseup = closeMenu

document.onkeyup = (e) => {
  if (e.key === 'Escape')
    closeMenu()
}

// scroll to top
let scrollUp = document.querySelector('.scrollUp')
window.onscroll = function () { 
  window.scrollY > 800
    ? scrollUp.style.transform = 'translateY(0)'
    : scrollUp.style.transform = 'translateY(200%)'
}
scrollUp.onclick = () => { scrollTo(0, 0) }