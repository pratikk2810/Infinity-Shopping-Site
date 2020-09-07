import { Component } from '@angular/core';
import { ItemService } from 'src/app/common/services/item.service';
import { Items } from 'src/app/common/interfaces/items';
import { NavigationEnd, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Infinity Shopping Site';
  allItems:Items[];
  items:Items[];
constructor(private  itemService:ItemService,private route:Router)
{

}
  getText(text:String):void
  {
      console.log(text);
      this.itemService.getAll().subscribe(items=>this.allItems=items);
      this.items=this.allItems.filter(x=>x.itemName==text);
      console.log(this.items);
      this.route.navigate(['/search']);
  }
}
