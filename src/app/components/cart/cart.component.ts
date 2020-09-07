import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/common/interfaces/items';
import { ItemService } from 'src/app/common/services/item.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems:Items[];
  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
    this.itemService.getCartItems().subscribe(items=>this.cartItems=items);
  }

}
