var Customer = /** @class */ (function () {
    function Customer(sid, name, location) {
        if (sid === void 0) { sid = 0; }
        if (name === void 0) { name = ""; }
        if (location === void 0) { location = ""; }
        this.sid = sid;
        this.name = name;
        this.location = location;
    }
    Customer.prototype.showDetails = function () {
        var str = "Customer Details  ::   Id : ".concat(this.sid, ", Name : ").concat(this.name, ", City : ").concat(this.location);
        console.log(str);
    };
    return Customer;
}());
var c1 = new Customer();
var c2 = new Customer(10256);
var c3 = new Customer(10256, "Scott");
var c4 = new Customer(10256, "Scott", "Hyd");
c1.showDetails();
c2.showDetails();
c3.showDetails();
c4.showDetails();
