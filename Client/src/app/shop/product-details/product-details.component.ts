import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/model/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product?: any ;

  constructor(private shopService: ShopService, private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    const id = this.ActivatedRoute.snapshot.paramMap.get('id');
    
   if (id) this.shopService.getProduct(+id).subscribe({
    next: product=> this.product = product,
    error: error => console.log(error)
   } 
   )
  }

}
