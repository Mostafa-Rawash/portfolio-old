$(document).ready(() => {
  owl();
  text_animation();
  increas_Numbers();
  shuffle();
});



function shuffle() {

  $('.Portfolio  ul li ').on('click', function () {
    let test = $(this).data('class');
    
    $(this).addClass('active').siblings().removeClass('active');
    
    
    if (test === 'all') {
      $('.all-img .filterDiv').css('opacity' , 1 );

    }
    else{
      $('.all-img .filterDiv').css('opacity' , 0.1 );
      $($(this).data('class')).parent().css('opacity' , 1 );
    }
console.log(test);
  }
  )
  }










function increas_Numbers() {
  $(".count").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).data("value"),
        },
        {
          duration: 1000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(Math.floor(this.Counter)));
          },
        }
      );
  });
}

function owl() {
  let owl = $('.owl-carousel');
  owl.owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    margin: 10,
    autoplay: false,

  });
}

function text_animation() {
  let TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function () {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    let that = this;
    let delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    let elements = document.getElementsByClassName('txt-rotate');
    for (let i = 0; i < elements.length; i++) {
      let toRotate = elements[i].getAttribute('data-rotate');
      let period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    let css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };


}
