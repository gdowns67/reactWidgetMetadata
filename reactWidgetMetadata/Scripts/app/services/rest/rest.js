reactWidget.restService = (function () {
    function get(path, successCallback, errorCallback) {
        $.getJSON(path, function (result) {
            successCallback(result);
        }).fail(function (error) {
            errorCallback(error);
        });
    }

    return {
        get: get
    }
})();