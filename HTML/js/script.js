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
			$('.slick').slick({
				arrows: false,
				fade: true
			});
		}
	});
	
	// slick slider
	$('.slick').slick({
		arrows: false,
		fade: true,
		draggable: false
	});
	
	// slick dragn drop
	$('.slideshow-dragndrop').on('click', function() {
		$('.slick').slick('slickNext');    
	});
	
	// firefly #1
    var r = Raphael("firefly-1"),
        set = r.set(),
        c = r.circle(200, 200, 10).attr({fill: "#ffff00"}),
        path = r.path("M34.13,273.781 c0,0,12.079-17.691,33.031-17.762s29.577,11.389,31.32,17.543c1.624,5.735,9.755,15.61,30.706,15.447 c20.951-0.163,32.786-17.905,32.786-17.905s12.202-17.691,33.154-17.763s29.577,11.389,31.32,17.543 c1.624,5.735,9.755,15.61,30.706,15.447c20.951-0.163,30.967-15.549,30.967-15.549s12.079-17.691,33.031-17.762 c20.951-0.071,29.577,11.389,31.32,17.543c1.624,5.735,9.755,15.61,30.706,15.447c20.951-0.163,32.786-17.905,32.786-17.905 s12.202-17.691,33.154-17.763s29.577,11.389,31.32,17.543c1.624,5.735,9.755,15.61,30.706,15.447 c20.951-0.163,30.474-15.052,30.474-15.052s12.079-17.691,33.031-17.762c20.951-0.071,29.577,11.389,31.32,17.543 c1.624,5.735,9.755,15.61,30.706,15.447c20.951-0.163,32.786-17.905,32.786-17.905s12.202-17.691,33.154-17.763 c20.951-0.071,29.577,11.389,31.32,17.543c1.624,5.735,9.755,15.61,30.706,15.447c20.951-0.163,32.786-17.905,32.786-17.905");
    run1 = function () {
        var ex = 'elastic',
            ey = '>';
        c.stop().animate({
            "0%": {cx: 0, cy: 0, easing: ex, opacity: 0},
            "30%": {cx: 300, cy: 200, easing: ex, opacity: .3},
            "70%": {cx: 100, cy: 400, easing: ex, opacity: 1},
            "100%": {cx: 800, cy: 500, easing: ex}
        }, 15000);
    };
    c.cx = 500;
    
    // timing
    run1();
    $('.title-animation-elm').hide();
    window.setTimeout(function() {
	 
		// textillate
		$('.title-animation-elm').fadeIn().textillate({
			in: {
				effect: 'bounceIn'
			}
		});
		
    }, 7000);
		
});

/*window.onload = function() {
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
    };*/

