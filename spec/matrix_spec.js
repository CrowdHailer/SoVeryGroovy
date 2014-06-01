describe('Matrix', function(){
  var Mx = SVGroovy.Matrix;
  describe('initialisation', function(){
    it('should initialise to identity by default', function(){
      var mx = Mx();
      expect(mx.a).toEqual(1);
    });
    it('should be possible to create a scaling matrix', function(){
      var mx = Mx.scaling(2);
      expect(mx.a).toEqual(2);
    });
  });
});