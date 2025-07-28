const fadeElems = document.querySelectorAll('.fade-in');

const showOnScroll = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); 
    }
  });
};

const observer = new IntersectionObserver(showOnScroll, {
  threshold: 0.2
});

fadeElems.forEach(elem => {
  observer.observe(elem);
});

const loading = document.getElementById('loading');

window.onload = function() {
  setTimeout(() => {
    loading.classList.add('loaded');
  }, 2000); 
};

$(function () {
    $(window).on('scroll', function () {
        let scroll = $(window).scrollTop();
        let skillsOffset = $('#skillsSec').offset().top;
        let skillsHeight = $('#skillsSec').outerHeight();
        let navLinks = $('.nav ul li a');

        const topBuffer = 65;   // 上に入るタイミング調整
        const bottomBuffer = 70; // 下に抜けるタイミング調整（←ここが追加ポイント！）

        if (
            scroll >= skillsOffset - topBuffer &&
            scroll < skillsOffset + skillsHeight - bottomBuffer
        ) {
            navLinks.removeClass('active');
            $('.nav ul li a').addClass('active');
        } else {
            $('.nav ul li a').removeClass('active');
        }
    });
});