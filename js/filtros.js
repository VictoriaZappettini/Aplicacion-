var app = angular.module("miAp", ["ui.bootstrap"]);
app.filter("startFrom", function() {
    return function(a, c) {
        return a ? a.slice(+c) : []
    }
});
app.controller("ControladorFiltros", ["$scope", "filterFilter", "$http", function(a, c, b) {
    b.get("http://opisu.ddns.net/Opisu3/services/conexion.php").success(function(b) {
        a.names = b.records;
        a.search = {};
        a.resetFilters = function() {
            a.search = {}
        }
        ;
        a.currentPage = 1;
        a.totalItems = a.names.length;
        a.entryLimit = 8;
        a.noOfPages = Math.ceil(a.totalItems / a.entryLimit);
        a.$watch("searchText", function(b, d) {
            a.filtered = c(a.names, b);
            a.totalItems = a.filtered.length;
            a.noOfPages = Math.ceil(a.totalItems / a.entryLimit);
            a.currentPage = 1
        }, !0);
        a.$watch("searchText2", function(b, d) {
            a.filtered = c(a.names, b)
        }, !0)
    })
}
]);
