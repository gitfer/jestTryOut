describe('Unit: paginationService', function() {
    var logmock = function() {
        return {
            warn: sinon.spy(),
            info: sinon.spy()
        };
    };
    var _items;

    beforeEach(angular.mock.module('test', function($provide) {
        $provide.factory('$log', logmock);
        _items = ['a', 'b', 'c', '1', '2', '3', 'A', 'B', 'C', 'D'];
    }));

    it('can get an istance', inject(['paginationService', function(sut) {
        expect(sut).toBeDefined();
    }]));

    it('getPaginatedItems items minori di paginazione ritorna tutti gli items', inject(['$log', 'paginationService', function($log, sut) {
        var paginatedData = sut.getPaginatedItems(_items);
        expect(paginatedData.data.length === _items.length);
        expect(paginatedData.totalPages).toBe(1);
    }]));

    it('getPaginatedItems items maggiori di paginazione ritorna items paginati', inject(['$log', 'paginationService', function($log, sut) {
        var paginatedData = sut.getPaginatedItems(_items, 1, 3);
        expect(paginatedData.data.length).toBe(3);
        expect(paginatedData.totalPages).toBe(4);
    }]));

    it('getPaginatedItems items 2a pagina ritorna items della 2a pagina', inject(['$log', "paginationService", function($log, sut) {
        var paginatedData = sut.getPaginatedItems(_items, 2, 3);
        expect(paginatedData.data.length).toBe(3);
        expect(paginatedData.data[0]).toBe('1');
        expect(paginatedData.data[1]).toBe('2');
        expect(paginatedData.data[2]).toBe('3');
    }]));

    it("getPaginatedItems items in pagina inferiori a count_per_page ritorna items disponibili", inject(["$log", "paginationService", function($log, sut) {
        var paginatedData = sut.getPaginatedItems(_items, 3, 4);
        expect(paginatedData.totalPages).toBe(3);
        expect(paginatedData.data.length).toBe(2);
        expect(paginatedData.data[0]).toBe('C');
        expect(paginatedData.data[1]).toBe('D');
    }]));

});
