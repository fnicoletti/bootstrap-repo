describe('controllers', function () {
    var mainController;
    beforeEach(angular.mock.module('angularDirectives'));
    beforeEach(inject(function ($controller, webDevTec, toastr) {
        webDevTec.data = [null, null, null, null, null];
        spyOn(toastr, 'info').and.callThrough();
        mainController = $controller('MainController');
    }));
    it('should have a timestamp creation date', function () {
        expect(mainController.creationDate > 0).toBeTruthy();
    });
    it('should define animate class after delaying timeout ', inject(function ($timeout) {
        $timeout.flush();
        expect(mainController.classAnimation).toEqual('rubberBand');
    }));
    it('should show a Toastr info and stop animation when invoke showToastr()', inject(function (toastr) {
        mainController.showToastr();
        expect(toastr.info).toHaveBeenCalled();
        expect(mainController.classAnimation).toEqual('');
    }));
    it('should define more than 5 awesome things', function () {
        expect(mainController.awesomeThings.length === 5).toBeTruthy();
    });
});
