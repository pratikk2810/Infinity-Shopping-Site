import { Component, OnInit, Input } from '@angular/core';
import { Items } from 'src/app/common/interfaces/items';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/common/services/item.service';
@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  private subscription:any;
  private id:number;
  filteredItem:Items;
  itemList:Items[];
  constructor(private route:ActivatedRoute,private itemService:ItemService) {
    
  }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.id = p.id;
      this.itemService.getItem(this.id).subscribe(item=>this.filteredItem=item);
      });
  }

  addToCart(id:number):void
  {
    this.itemService.addToCart(id);
  }
}
