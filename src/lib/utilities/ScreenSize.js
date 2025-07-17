function updateScreenSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    document.body.setAttribute('data-screen-size', `${width}px x ${height}px`);
  }
  
  updateScreenSize();
  window.addEventListener('resize', updateScreenSize);
  