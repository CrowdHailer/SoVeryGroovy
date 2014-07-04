describe('Matrix', function(){
  'use strict';

  var Mx = SVGroovy.Matrix;
  describe('initialisation', function(){
    it('should initialise to identity by default', function(){
      var mx = Mx();
      expect(mx.a).toEqual(1);
    });
    it('should be possible to create a scaling matrix', function(){
      var mx = Mx.toScale(2);
      expect(mx.a).toEqual(2);
    });
    it('should be possible to create a translating matrix', function(){
      var mx = Mx.translating(2, 3);
      expect(mx.a).toEqual(1);
      expect(mx.e).toEqual(2);
      expect(mx.f).toEqual(3);
    });
  });
});