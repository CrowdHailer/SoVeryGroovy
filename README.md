SoVeryGroovy
============

### Minimal library to make create native SVG objects, point and matrix


Installation
============

Available on bower. Install to you project using

```
bower install --save SoVeryGroovy
```

Usage
=====
#### Point
A point can be generated from several inputs, all of the following will produce the same SVGPoint

```
SVGroovy.Point(2, 3)
SVGroovy.Point({x: 2, y: 3})
SVGroovy.Point({pageX: 2, pageY: 3})
SVGroovy.Point({deltaX: 2, deltaY: 3})
```

Points can be added, subtracted, scaled, condensed to bounding box or transformed using SVGMAtrix. see source.

#### Matrix
Both scaling and translating matrixes can be created

```
SVGroovy.Matrix.toScale(3)
SVGroovy.Matrix.toTranslate({x: 2, y: 3})
```

Tests
=====
Tests are run in karma using jasmine 2.0

To run test navigate to root directory and run `karma start`

```
cd SoVeryGroovy
karma start
```