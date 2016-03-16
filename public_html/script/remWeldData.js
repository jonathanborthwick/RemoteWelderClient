remWeld.data = remWeld.data || (function () {
    var context = {};
    context.scope;
    context.generateScope = function (element) {
        var body = $(element)[0];
        var angularScope = angular.element(
                body).
                scope();
        context.scope = angularScope;
    };
    return context;
})();

