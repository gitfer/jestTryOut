angular.module('test').factory('paginationService', ['_', '$rootScope',
function(_, $rootScope) {

    function getPaginatedItems(items, page, perPage) {
        page = page || 1;
        perPage = perPage || 10;
        var offset = (page - 1) * perPage;
        var paginatedItems = _.slice(items, offset).slice(0, perPage);

        return {
            page: page,
            perPage: perPage,
            total: items.length,
            totalPages: Math.ceil(items.length / perPage),
            data: paginatedItems
        };
    }

    const saveItemsPerPageSetting = function(context, itemsPerPage) {
        if (context) {
            $rootScope.$broadcast('arxivar-settings', { context: context, itemsPerPage: itemsPerPage });
        }
    };

    return {
        getPaginatedItems: getPaginatedItems,
        saveItemsPerPageSetting: saveItemsPerPageSetting
    };
}]);


