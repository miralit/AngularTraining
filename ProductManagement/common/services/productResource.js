(function () {
    "user strict";
    var app = angular.module("common.services");
    app.factory("productResource", ["$resource", productResource]);

    function productResource($resource) {
        return $resource("/api/products/:productId");
    }

}());