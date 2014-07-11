(function () {
    'use strict';

    describe('Point', function () {
        var Pt = SVGroovy.Point;
        describe('initialisation', function () {
            it('from two coordinates', function () {
                var pt = Pt(2, 3);
                expect(pt.x).to.equal(2);
                expect(pt.y).to.equal(3);
            });
        });
    });
})();