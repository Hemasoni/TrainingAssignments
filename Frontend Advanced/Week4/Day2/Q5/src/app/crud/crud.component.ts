import { Component } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CRUDComponent {
  id:number = 0;
  name:string = "";
  price:number = 0;
  category:string = "";
  quantity:number = 0;
  show:boolean = true;

  productsArray:any[] = [
    {id:1 , name:"Prd1" ,  price:1000 , category:"cat1" , quantity:1 } ,
    {id:2 , name:"Prd2" ,  price:2000 , category:"cat2" , quantity:2 } ,
    {id:3 , name:"Prd3" ,  price:3000 , category:"cat3" , quantity:3 } ,
    {id:4 , name:"Prd4" ,  price:4000 , category:"cat4" , quantity:4 } ,
    {id:5 , name:"Prd5" ,  price:5000 , category:"cat5" , quantity:5 } 
  ];


  addProduct_click():void
  {
      let productObj:any = {};

      productObj.id = this.id;
      productObj.name = this.name;
      productObj.price = this.price;
      productObj.category = this.category;
      productObj.quantity = this.quantity;
    

      this.productsArray.push( productObj );
  }

  getProduct_click():void
  {
     this.show = false;
  }

  
  removeProduct_click(pid:number):void
  {    
        let index:number  = this.productsArray.findIndex( (item) => item.id == pid );
      this.productsArray.splice(index,1);  
  }


  updateProduct_click():void
  {    
    let index:number  = this.productsArray.findIndex( item => item.id == this.id );
    this.productsArray[index].name = this.name;
    this.productsArray[index].price = this.price;
    this.productsArray[index].category = this.category;
    this.productsArray[index].quantity = this.quantity;
  }

  reset_click():void
  { let x= this.productsArray.length
      for(let i=0;i<x; i++)
      {
        this.productsArray.pop();
      }
  }

  editProduct_click(pid:number):void
  {
    let index:number  = this.productsArray.findIndex( (item) => item.id == pid );
    this.productsArray[index].id = this.id
    this.productsArray[index].name = this.name;
    this.productsArray[index].price = this.price;
    this.productsArray[index].category = this.category;
    this.productsArray[index].quantity = this.quantity;
  }
}

