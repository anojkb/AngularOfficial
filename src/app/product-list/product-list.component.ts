import { Component,OnInit } from '@angular/core';
import { products } from '../models/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  productDetails = products;
  share(){
    window.alert('product has been shared');
  }

  onNotify(){
    window.alert('You will be notified when the product goes on sale');
  }

}
