describe('Matrix', function(){
  var Mx = SVGroovy.Matrix;
  describe('initialisation', function(){
    it('should initialise to identity by default', function(){
      var mx = Mx();
      expect(mx.a).toEqual(1);
    });
    
  });
});