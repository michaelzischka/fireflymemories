// slider nav
var sliderPrev = function(slide) {
    $('.story.active .slick').slick('slickGoTo', slide); 
};
var sliderNext = function(slide) {
    $('.story.active .slick').slick('slickGoTo', slide); 
};

$(document).ready(function() {
	
	// disable gesture
	$('body').hammer().bind('none contextmenu', function(ev) {
		ev.preventDefault();
	});
    
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
			closeEyesChain();
			goToStep(2);
		});
    }, 8000);
    
    // chain
    var closeEyesChain = function() {
		flyaround2();				
		$('.track-end').removeClass('hide').hide();
		window.setTimeout(function() {
			$('.track-start').fadeOut();
			window.setTimeout(function() {				
				$('.track-end').fadeIn();
			}, 4000);
			window.setTimeout(function() {	
				goToStep(3);
			}, 12000);
	    }, 7000);  
    }
	
	// restart
	$('.restart').on('click', function() {
		closeEyesChain();
	});
	
	// firefly
	var beziers = BezierPlugin.bezierThrough([{x:0, y:0}, {x:250, y:400}, {x:500, y:0}]);
	var flyaround1 = function() {
	    TweenMax.to($('#firefly'), 10, {bezier:{type:"thru", values:[
	        {x:100, y:250},
	        {x:300, y:0},
	        {x:500, y:400},
	        {x:400, y:200},
	        {x:500, y:300},
	        {x:800, y:200},
	        {x:500, y:500}
	    ], autoRotate:true}, ease:Power1.easeInOut});
	};
	flyaround1();
	var flyaround2 = function() {
	    TweenMax.to($('#firefly'), 5, {bezier:{type:"thru", values:[
	        {x:500, y:500},
	        {x:800, y:200},
	        {x:140, y:600}
	    ], autoRotate:true}, ease:Power1.easeInOut});
	};
	var flyaround3 = function() {
	    TweenMax.to($('#firefly'), 5, {bezier:{type:"thru", values:[
	        {x:140, y:600},
	        {x:859, y:597}
	    ], autoRotate:true}, ease:Power1.easeInOut});
	};	
	var flyaround4 = function() {
		$('#firefly').fadeIn();
	    TweenMax.to($('#firefly'), 5, {bezier:{type:"thru", values:[
	        {x:859, y:597},
	        {x:800, y:200},
	        {x:140, y:600},
	        {x:800, y:200}
	    ], autoRotate:true}, ease:Power1.easeInOut});
	};	
	var flyaround5 = function() {
	    TweenMax.to($('#firefly'), 20, {bezier:{type:"thru", values:[
	        {x:800, y:200},
	        {x:859, y:597},
	        {x:800, y:200},
	        {x:140, y:600},
	        {x:140, y:600}
	    ], autoRotate:true}, ease:Power1.easeInOut});
	};			
    
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
		if (step == 2) {
			$('.step-1 audio').animate({
				volume: 0	
			}, 4000);
			window.setTimeout(function() {
				$('.forest-full').animate({
					opacity: 1
				}, 7);
				$('.forest-left, .forest-right').addClass('active');
			}, 5000); // eyes closing time
		}
		if (step == 3) {
			if ($('svg').length == 0) {
				var audioSeconds = 90;
			} else {
				$('.story-1').removeClass('active'); 
				$('.story-2').addClass('active'); 
				$('svg').remove();
				var audioSeconds = 55;
			}	
			$('.story.active audio').get(0).currentTime = 0;
			$('.story.active audio').get(0).play();
			run6();	
			$('#firefly').fadeOut('fast');
			flyaround3();
			$('svg').fadeIn('slow');
		    window.setTimeout(function() {
				goToStep(4);
		    }, audioSeconds * 1000);
			$('.story.active .slick').slick({
				arrows: false,
				fade: true,
				draggable: false
			}).on('beforeChange', function(event, slick, currentSlide, nextSlide){
				if ($('.slick-active video').length == 1) {
					$('.slick-active video').get(0).pause();
				}
			}).on('afterChange', function(event, slick, currentSlide){
				if ($('.slick-active video').length == 1) {
					$('.slick-active video').get(0).play();
				}
			});
		}
		if (step == 4) {
			$('.step-3 audio').get(0).pause();
			$('svg').fadeOut();
			flyaround4();
		    window.setTimeout(function() {
				goToStep(5);
		    }, 10000); 
			$('.haiku p').fadeIn().textillate({
				in: {
					effect: 'bounceIn'
				}
			});
		}
		if (step == 5) {
			flyaround5();
		}
		step++;
	}
	
	// debug
	$('.play').on('click', function() {
		$('.story.active audio').get(0).currentTime = 0;
		$('.story.active audio').get(0).play();
	});
		
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

