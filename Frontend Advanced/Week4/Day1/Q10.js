var SmartPhone = /** @class */ (function () {
    function SmartPhone() {
        this.x = 34;
        this.y = 345;
        this.start = true;
        this.stop = false;
        this.pause = false;
    }
    SmartPhone.prototype.getCoordinates = function () {
        console.log("X : ".concat(this.x, ", Y : ").concat(this.y));
    };
    SmartPhone.prototype.getmode = function () {
        console.log("Start : ".concat(this.start));
    };
    return SmartPhone;
}());
var obj = new SmartPhone();
obj.getCoordinates();
obj.getmode();
