var SVGroovy = {};
(function(parent){
  "use strict";

  var darkSVG = document.createElementNS("http://www.w3.org/2000/svg", 'svg');

  function create(x, y){
    if (isObj(x)) {
      if (x.x) {
        return createFromCoordinate(x);
      } else if (x.pageX) {
        return createFromPagePoint(x);
      } else if (x.deltaX) {
        return createFromDisplacementVector(x);
      }
    }
    var tmp = darkSVG.createSVGPoint();
    tmp.x = x || 0;
    tmp.y = y || 0;
    return tmp;
  }

  function createFromCoordinate(point){
    return create(point.x, point.y);
  }

  function createFromPagePoint(pagePoint){
    return create(pagePoint.pageX, pagePoint.pageY);
  }

  function createFromDisplacementVector(pagePoint){
    return create(pagePoint.deltaX, pagePoint.deltaY);
  }

  function add(p){
    return function(q){
      return create(p.x + q.x, p.y + q.y);
    };
  }

  function subtract(p){
    return function(q){
      return create(p.x - q.x, p.y - q.y);
    };
  }

  function negate(p){
    return function(q){
      q = q || create();
      return create(q.x - p.x, q.y - p.y);
    };
  }

  function scalar(a){
    return function(q){
      return create(a * q.x, a * q.y);
    };
  }

  function min(p){
    return function(q){
      var x = (p.x < q.x)? p.x : q.x;
      var y = (p.y < q.y)? p.y : q.y;
      return create(x, y);
    };
  }

  function max(p){
    return function(q){
      var x = (p.x > q.x)? p.x : q.x;
      var y = (p.y > q.y)? p.y : q.y;
      return create(x, y);
    };
  }

  function matrixTransform(m){
    return function(q){
      return q.matrixTransform(m);
    };
  }

  parent.Point = _.extend({
    createFromCoordinate: createFromCoordinate,
    createFromPagePoint: createFromPagePoint,
    createFromDisplacementVector: createFromDisplacementVector,
    add: add,
    subtract: subtract,
    negate: negate,
    scalar: scalar,
    min: min,
    max: max,
    matrixTransform: matrixTransform
  })(create);
}(SVGroovy));
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