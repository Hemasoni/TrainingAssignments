class Customer

{
    public sid:number;
    public name:string;
    public location:string;
  
    constructor(sid:number = 0 , name:string = "" , location:string = "")
    {
        this.sid = sid;
        this.name = name;
        this.location = location;
    }

    public showDetails()

    {
        let str = `Customer Details  ::   Id : ${this.sid}, Name : ${this.name}, City : ${this.location}`;
        console.log(str);
    }

}


let c1:Customer = new Customer();
let c2:Customer = new Customer(10256);
let c3:Customer = new Customer(10256, "Scott");
let c4:Customer = new Customer(10256, "Scott","Hyd");
c1.showDetails();
c2.showDetails();
c3.showDetails();
c4.showDetails();