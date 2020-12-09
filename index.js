 
    var i = 0;
// "test": "echo \"Error: no test specified\" && exit 1"
 
 function get() {
            return i;
        };
        exports.set = function (val) {
            i = val;
        };
        exports.increment = function () {
            return ++i;
        };