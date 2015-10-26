// slider nav
sliderNext = function() {
    $('.slick').slick('slickNext'); 
};

$(document).ready(function() {
	
	// disable gesture
	$('body').hammer().bind('none contextmenu', function(ev) {
		ev.preventDefault();
	});
	
	// firefly #1
    var beziers = BezierPlugin.bezierThrough([{x:0, y:0}, {x:250, y:400}, {x:500, y:0}]);
    console.log(beziers);
    var fly = document.getElementById("firefly");
    TweenMax.to(fly, 10, {bezier:{type:"thru", values:[
        {x:100, y:250},
        {x:300, y:0},
        {x:500, y:400},
        {x:400, y:200},
        {x:500, y:300},
        {x:800, y:200},
        {x:500, y:500}
    ], autoRotate:true}, ease:Power1.easeInOut});
    
    // timing
    $('.title-animation-elm').hide();
    window.setTimeout(function() {
		$('.title-animation-elm').fadeIn().textillate({
			in: {
				effect: 'bounceIn'
			}
		});
    }, 5000);
    window.setTimeout(function() {
		$('.step-1').animate({
			marginTop: '-800px'
		}, 5000, function() {
			goToStep(2);
		});
    }, 8000);
    window.setTimeout(function() {
		goToStep(3);
    }, 20000);
    window.setTimeout(function() {
		goToStep(4);
    }, 23000);
    window.setTimeout(function() {
		goToStep(5);
    }, 40000);
	
	// steps
	$.step = 1;
	$('.next').on('click', function() {
		goToStep($.step);
	});
	var goToStep = function(step) {
		$.step = step;
		if (step == 6) {
			step = 3;
		}
		$('.step').fadeOut();
		$('.step-'+step).fadeIn();
		
		if (step == 3) {
			// slick slider
			$('.slick').slick({
				arrows: false,
				fade: true,
				draggable: false
			});
			run6();
		}
		if (step == 4) {
			$('svg:eq(1)').fadeOut();
		}
		step++;
	}
		
});


	
	// slick dragn drop
	/*$('.slideshow-dragndrop').on('click', function() {
		$('.slick').slick('slickNext');    
	});*/
	
	// firefly #1
    /*var r = Raphael("firefly-1"),
        set = r.set(),
        c = r.circle(200, 200, 10).attr({fill: "#ffff00"});
    run1 = function () {
        var ex = 'elastic',
            ey = '>';
        c.stop().animate({
            "0%": {cx: 0, cy: 0, easing: ex, opacity: 0},
            "30%": {cx: 300, cy: 200, easing: ex, opacity: .3},
            "70%": {cx: 100, cy: 400, easing: ex, opacity: 1},
            "100%": {cx: 800, cy: 500, easing: ex}
        }, 15000);
    };*/

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