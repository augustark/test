function mapDoubleTap() {
  const elementSelected = document.querySelectorAll('.app li a')
  Array.from(elementSelected).forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      if (window.innerWidth < 1200 && window.innerWidth > 991) {
        e.preventDefault();
        let a = e.currentTarget
        if (a.classList.contains('open')) {
          let url = a.attributes.href.value
          let target = typeof a.attributes.target === 'undefined' ? '_self' : a.attributes.target
          window.open(url, target)
        } else {
          let openedAnchor = document.querySelector('.app li a.open')
          a.classList.toggle('open')
          openedAnchor?.classList.remove('open')
        }
      }
    })
  })
}

mapDoubleTap()