// Script to toggle mobile navigation
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('show');
      // Animate hamburger icon
      hamburger.classList.toggle('open');
    });
  }

  // Replace image sources and backgrounds with inlined base64 data URIs.
  // The variables (e.g. LOGO_DATA_URI) are defined in image_data.js. This
  // approach avoids having to upload binary assets separately, which is helpful
  // when deploying the site via GitHub Pages UI.
  if (typeof LOGO_DATA_URI !== 'undefined') {
    document.querySelectorAll('.logo-img').forEach(function(img) {
      img.src = LOGO_DATA_URI;
    });
  }
  if (typeof HERO_DATA_URI !== 'undefined') {
    document.querySelectorAll('.hero').forEach(function(heroEl) {
      heroEl.style.backgroundImage = 'url(' + HERO_DATA_URI + ')';
    });
  }
  // Home page treehouse images
  var homeImgs = document.querySelectorAll('#home-gallery img');
  if (homeImgs && homeImgs.length >= 3 && typeof TREEHOUSE1_DATA_URI !== 'undefined') {
    homeImgs[0].src = TREEHOUSE1_DATA_URI;
    homeImgs[1].src = TREEHOUSE2_DATA_URI;
    homeImgs[2].src = TREEHOUSE3_DATA_URI;
  }
  // Gallery page images
  var galleryImgs = document.querySelectorAll('.gallery img');
  if (galleryImgs && galleryImgs.length >= 3 && typeof GALLERY1_DATA_URI !== 'undefined') {
    galleryImgs[0].src = GALLERY1_DATA_URI;
    galleryImgs[1].src = GALLERY2_DATA_URI;
    galleryImgs[2].src = GALLERY3_DATA_URI;
  }
});
