var run6 = function() {
var searchDl = 1;
var l = 0;

// Creates canvas 320 × 200 at 10, 50
var r = Raphael(0, 0, $(window).width(), $(window).height());

var parts = parseInt($(window).width() / 152);

var partRest = $(window).width() - (parts * 152);

var pathSVG = "M" + parseInt(partRest * 2 + partRest / 2) + "," + ($(window).height() - 100);

for (var i = 0; i < parts; i++) {
  pathSVG += " c0,0,10-20,30-20 s30,20,30,20 c0,0,10,20,30,20 c20-0,30-20,30-20";
}

var p = r.path(pathSVG).attr({stroke: "#ffffff", "stroke-dasharray": "-", opacity: 0.1 }),
  pt = p.getPointAtLength(l);
  e = r.ellipse(pt.x, pt.y, 10, 10).attr({stroke: "none", fill: "#ffffaa"}),
  e2 = r.ellipse(pt.x, pt.y, 100, 100).attr({stroke: "none", fill: "#00ffff", opacity: 0}),
  totLen = p.getTotalLength(),

e.glow({width: 30, color: "#ffffff"});

var storyParts = $("div.story.active .slick div").length,
  partLength = parseInt(totLen / storyParts);

var partCircles = [];

for (var i = 0; i < storyParts; i++) {
  var partPoint = p.getPointAtLength(totLen - (i * partLength));
  r.circle(partPoint.x, partPoint.y, 2).attr({stroke: "none", fill: "#ffffaa"});
  partCircles[i] = parseInt(partPoint.x);
}

var partCirclesLength = partCircles.length,
  lastPartIdx = 0;

start = function () {
  // storing original coordinates
  this.ox = this.attr("cx");
  this.oy = this.attr("cy");
  // this.attr({opacity: 1});
},
move = function (dx, dy) {
  var tmpPt = {
      x : this.ox + dx,
      y : this.oy + dy
  };
  // move will be called with dx and dy
  l = gradSearch(l, tmpPt);
  pt = p.getPointAtLength(l);
  this.attr({cx: pt.x, cy: pt.y});
  e.attr({cx: pt.x, cy: pt.y});
  $("svg > path:not(:eq(0))").remove();
  e.glow({width: 30, color: "#ffffff"});
  var curX = parseInt(pt.x);
  var maxIdx = 0;
  for (var i = 0; i < partCirclesLength; i++) {
    if (partCircles[i] < curX) {
      maxIdx++;
    }
  }
  if (maxIdx > lastPartIdx) {
    sliderNext(maxIdx);
  }
  else if (maxIdx < lastPartIdx) {
    sliderPrev(maxIdx);
  }
  lastPartIdx = maxIdx;
},
up = function () {
  // restoring state
  // this.attr({opacity: 1});
},
gradSearch = function (l0, pt) {
  l0 = l0 + totLen;
  var l1 = l0,
      dist0 = dist(p.getPointAtLength(l0 % totLen), pt),
      dist1,
      searchDir;

  if (dist(p.getPointAtLength((l0 - searchDl) % totLen), pt) >
     dist(p.getPointAtLength((l0 + searchDl) % totLen), pt)) {
      searchDir = searchDl;
  } else {
      searchDir = -searchDl;
  }

  l1 += searchDir;
  dist1 = dist(p.getPointAtLength(l1 % totLen), pt);
  while (dist1 < dist0) {
      dist0 = dist1;
      l1 += searchDir;
      dist1 = dist(p.getPointAtLength(l1 % totLen), pt);
  }
  l1 -= searchDir;

  return (l1 % totLen);
},
dist = function (pt1, pt2) {
  var dx = pt1.x - pt2.x;
  var dy = pt1.y - pt2.y;
  return Math.sqrt(dx * dx + dy * dy);
};

e2.drag(move, start, up);

};

// $("svg > defs").append("<filter id='f1' x='-50%' y='-50%' width='200%' height='200%'><feOffset result='offOut' in='SourceAlpha' dx='2' dy='2' /><feGaussianBlur result='blurOut' in='offOut' stdDeviation='10' /><feBlend in='SourceGraphic' in2='blurOut' mode='normal' /></filter>")
//
// $("svg > ellipse(1)").filter("f1");
