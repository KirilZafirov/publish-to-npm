var counter = (function () {
    var i = 0;
// "test": "echo \"Error: no test specified\" && exit 1"
    return {
        get: function () {
            return i;
        },
        set: function (val) {
            i = val;
        },
        increment: function () {
            return ++i;
        }
    };
})();