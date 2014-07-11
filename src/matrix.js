(function(parent){
  "use strict";

  function interpolate(s) {
    var i = 0;
    return function(args){
      return s.replace(/%(?:\(([^)]+)\))?([%diouxXeEfFgGcrs])/g, function (match, v, t) {
        if (t === "%") {return "%";}
        return args[v || i++];
      });
    };
  }

  var darkSVG = document.createElementNS("http://www.w3.org/2000/svg", 'svg');

  function create(){
    return darkSVG.createSVGMatrix();
  }

  parent.Matrix = create;
  parent.Matrix.toScale = function(scalar){
    return create().scale(scalar);
  };
  parent.Matrix.toTranslate = function(point){
    return create().translate(point.x, point.y);
  };
  parent.Matrix.asCss = function(matrix){
    return interpolate('matrix(%(a)s, %(b)s, %(c)s, %(d)s, %(e)s, %(f)s)')(matrix || create());
  };
  parent.Matrix.asCss3d = function(matrix) {
    return interpolate('matrix3d(%(a)s, %(b)s, 0, 0, %(c)s, %(d)s, 0, 0, 0, 0, 1, 0, %(e)s, %(f)s, 0, 1)')(matrix || create());
  };
}(SVGroovy));