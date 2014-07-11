(function(){
    'use strict';

    describe('Matrix', function () {
        var Mx = SVGroovy.Matrix;
        describe('initialisation', function(){
            it('should initialise to identity by default', function(){
                var mx = Mx();
                expect(mx.a).to.equal(1);
            });
            it('should be possible to create a scaling matrix', function(){
                var mx = Mx.toScale(2);
                expect(mx.a).to.equal(2);
            });
            it('should be possible to create a translating matrix', function(){
                var mx = Mx.toTranslate({x: 2, y: 3});
                expect(mx.a).to.equal(1);
                expect(mx.e).to.equal(2);
                expect(mx.f).to.equal(3);
            });
        });
    });
}());