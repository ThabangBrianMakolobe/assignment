window.addEventListener('DOMContentLoaded', function() {
  var breadcrumb = document.getElementById('breadcrumb');

  function updateBreadcrumb() {
    var sections = document.querySelectorAll('article');
    var visibleSection = null;

    for (var i = 0; i < sections.length; i++) {
      var section = sections[i];
      var rect = section.getBoundingClientRect();

      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        visibleSection = section;
        break;
      }
    }

    breadcrumb.innerHTML = '';

    if (visibleSection) {
      var sectionTitle = visibleSection.querySelector('h1');
      var sectionId = visibleSection.id;

      if (sectionTitle) {
        var crumb = document.createElement('a');
        crumb.href = '#' + sectionId;
        crumb.textContent = sectionTitle.textContent;
        breadcrumb.appendChild(crumb);
      }
    }
  }

  window.addEventListener('scroll', updateBreadcrumb);
  window.addEventListener('resize', updateBreadcrumb);
  updateBreadcrumb();
});


document.addEventListener("DOMContentLoaded", function() {
				  const slides = document.querySelectorAll(".slide");
				  let currentIndex = 0;

				  function showSlide(index) {
					slides.forEach((slide) => {
					  slide.classList.remove("active");
					});

					slides[index].classList.add("active");
				  }

				  function nextSlide() {
					currentIndex = (currentIndex + 1) % slides.length;
					showSlide(currentIndex);
				  }

				  // Automatically advance to the next slide every 3 seconds
				  setInterval(nextSlide, 3000);

				  // Show the first slide initially
				  showSlide(currentIndex);
				});