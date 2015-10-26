$(document).ready(function() {
	
	// set mobile status
	var mobile = 1;
	function detectMobile() {
		if ($('.check-device').css('fontSize') == '1px') {
			mobile = 1; // phone
		} else if ($('.check-device').css('fontSize') == '2px') {
			mobile = 2; // tablet
		} else {
			mobile = 0; // desktop
		}
	}
	detectMobile();
	
	// disable gesture
	$('body').hammer().bind('none contextmenu', function(ev) {
		ev.preventDefault();
	});
	
	// textillate
	$('.title-animation-elm').textillate({
		in: {
			effect: 'bounceIn'
		}
	});
	
	// steps
	var step = 1;
	$('.next').on('click', function() {
		console.log('hey');
		if (step == 9) {
			step = 3;
		}
		step++;
		$('.step').fadeOut();
		$('.step-'+step).fadeIn();
		
		if (step == 6) {
			// slick slider
			$('.slick').slick({
				arrows: false,
				fade: true
			});
		}
	});
		
});

window.onload = function() {
      var img = document.getElementById('img');
      img.crossOrigin = "Anonymous";
      var tracker = new tracking.ObjectTracker(['face', 'eye', 'mouth']);
      tracker.setStepSize(1.7);
      tracking.track('#img', tracker);
      tracker.on('track', function(event) {
        event.data.forEach(function(rect) {
          window.plot(rect.x, rect.y, rect.width, rect.height);
        });
      });
      window.plot = function(x, y, w, h) {
        var rect = document.createElement('div');
        document.querySelector('.demo-container').appendChild(rect);
        rect.classList.add('rect');
        rect.style.width = w + 'px';
        rect.style.height = h + 'px';
        rect.style.left = (img.offsetLeft + x) + 'px';
        rect.style.top = (img.offsetTop + y) + 'px';
      };
    };