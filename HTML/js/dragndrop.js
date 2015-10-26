var run6 = function() {
var searchDl = 1;
var l = 0;

// Creates canvas 320 × 200 at 10, 50
var r = Raphael(10, 50, 1024, 800);

var p = r.path("M34.13,573.781 c0,0,12.079-17.691,33.031-17.762s29.577,11.389,31.32,17.543c1.624,5.735,9.755,15.61,30.706,15.447 c20.951-0.163,32.786-17.905,32.786-17.905s12.202-17.691,33.154-17.763s29.577,11.389,31.32,17.543 c1.624,5.735,9.755,15.61,30.706,15.447c20.951-0.163,30.967-15.549,30.967-15.549s12.079-17.691,33.031-17.762 c20.951-0.071,29.577,11.389,31.32,17.543c1.624,5.735,9.755,15.61,30.706,15.447c20.951-0.163,32.786-17.905,32.786-17.905 s12.202-17.691,33.154-17.763s29.577,11.389,31.32,17.543c1.624,5.735,9.755,15.61,30.706,15.447 c20.951-0.163,30.474-15.052,30.474-15.052s12.079-17.691,33.031-17.762c20.951-0.071,29.577,11.389,31.32,17.543 c1.624,5.735,9.755,15.61,30.706,15.447c20.951-0.163,32.786-17.905,32.786-17.905s12.202-17.691,33.154-17.763 c20.951-0.071,29.577,11.389,31.32,17.543c1.624,5.735,9.755,15.61,30.706,15.447c20.951-0.163,32.786-17.905,32.786-17.905").attr({stroke: "#ffffaa"}),
  pt = p.getPointAtLength(l);
  e = r.ellipse(pt.x, pt.y, 10, 10).attr({stroke: "none", fill: "#ffff00"}),
  totLen = p.getTotalLength(),


start = function () {
  // storing original coordinates
  this.ox = this.attr("cx");
  this.oy = this.attr("cy");
  this.attr({opacity: 1});
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
  console.log('x=' + pt.x + ', y=' + pt.y);
},
up = function () {
  // restoring state
  this.attr({opacity: 1});
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

e.drag(move, start, up);
};
