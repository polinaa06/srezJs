"use strict"

let navElems = document.querySelectorAll('.nav_elem');

navElems.forEach(navElem => {
    let subnav = navElem.querySelector('.subnav');
    let btn = navElem.querySelector('.nav_btn');

    navElem.addEventListener('mouseenter', function () {
        subnav.classList.add('active');
        btn.classList.add('active');
    })

    navElem.addEventListener('mouseleave', function () {
        subnav.classList.remove('active');
        btn.classList.remove('active');
    })
})


let sliderBody = document.querySelector('.slider__body');
let sliderNav = document.querySelector('.slider__nav');
let sliderImages = document.querySelector('.slider__images');
let sliderItems = Array.from(document.querySelectorAll('.slider__item'));
let sliderDots = Array.from(document.querySelectorAll('.slider__dot'));

sliderNav.addEventListener('click', function (event) {
    let targetArrow = event.target.closest('.slider__arrow');
    if (!targetArrow) return;

    let currentActiveImage = document.querySelector('.slider__item.active');
    let currentActiveIndex = sliderItems.indexOf(currentActiveImage);

    currentActiveImage.classList.remove('active');
    document.querySelector('.slider__dot.active').classList.remove('active');

    changeActive(targetArrow, currentActiveIndex);

    let newActiveImage = document.querySelector('.slider__item.active');
    let newActiveIndex = sliderItems.indexOf(newActiveImage);

    scrollSlider(newActiveIndex);
})
function scrollSlider(index) {
    sliderImages.style.transform = `translateX(${-100 * index}%)`
}
function changeActive(arrow, currentIndex) {
    if (arrow.classList.contains('left')) {
        if (currentIndex == 0) {
            sliderItems.at(-1).classList.add('active');
            sliderDots.at(-1).classList.add('active');
        } else {
            sliderItems[currentIndex - 1].classList.add('active');
            sliderDots[currentIndex - 1].classList.add('active');
        }
    } else {
        if (currentIndex == sliderItems.length - 1) {
            sliderItems[0].classList.add('active');
            sliderDots[0].classList.add('active');
        } else {
            sliderItems[currentIndex + 1].classList.add('active');
            sliderDots[currentIndex + 1].classList.add('active');
        }
    }
}

sliderNav.addEventListener('click', function (event) {
    let targetDot = event.target.closest('.slider__dot');
    if (!targetDot) return;

    if (targetDot.classList.contains('active')) return;

    document.querySelector('.slider__dot.active').classList.remove('active');
    targetDot.classList.add('active');
    document.querySelector('.slider__item.active').classList.remove('active');

    sliderItems[targetDot.dataset.index].classList.add('active');
    scrollSlider(targetDot.dataset.index);
})


document.addEventListener('DOMContentLoaded', function () {
    var tabButtons = document.querySelectorAll('.tab-btn');
    var tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {

            tabButtons.forEach(function (btn) {
                btn.classList.remove('active');
            });
            tabPanes.forEach(function (pane) {
                pane.classList.remove('active');
            });

            this.classList.add('active');
            tabPanes[index].classList.add('active');
        });
    });
});


document.querySelector('.faq').addEventListener('click', function (event) {
    let target = event.target.closest('.faq_item');
    if (!target) return;

    target.classList.toggle('active');
    let p = target.querySelector('p');
    let h4 = target.querySelector('.faq_h4');
    if (target.classList.contains('active')) {
        p.style.height = p.scrollHeight + 'px';
        h4.style.transform = 'rotate(45deg)';
    } else {
        p.style.height = '';
        h4.style.transform = 'rotate(0deg)';
    }
})


let phone = document.querySelector(".item-view"); 
let faqBlock = document.querySelector(".faq-block"); 
 
let observer = new IntersectionObserver( 
    (entries) => { 
        entries.forEach((entry) => { 
            if (entry.isIntersecting) { 
                phone.classList.add("show"); 
            } else { 
                phone.classList.remove("show"); 
            } 
        }); 
    }, 
    { 
        threshold: 0.1, 
    } 
); 
 
observer.observe(faqBlock);



var modal = document.getElementById("myModal");

var span = document.getElementsByClassName("close")[0];

window.onload = function () {
  setTimeout(function () {
    modal.style.display = "block";
  }, 3000);
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

