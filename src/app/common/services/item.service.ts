import { Injectable } from '@angular/core';
import { Items } from '../interfaces/items';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  item:Items;
  ci:Items;
  shopUrl=environment.apiEndpoint+'Shop/items/';
  cartUrl=environment.apiEndpoint+'Shop/cartItems/';
  itemList:Items[];
  cartItems:Items[];
  constructor(private http:HttpClient){

  }

  getAll():Observable<Items[]>
  {
    return this.http.get<Items[]>(this.shopUrl);
  }

  getCartItems():Observable<Items[]>
  {
    return this.http.get<Items[]>(this.cartUrl);
  }
  getItem(id:number):Observable<Items>
  {
    return this.http.get<Items>(this.shopUrl+id+'/');
  }
  getCartItem(id:number):Observable<Items>
  {
    return this.http.get<Items>(this.cartUrl+id+'/');
  }
  addToCart(id:number):Observable<Items>
  {
    console.log(id);
    this.getItem(id).subscribe(item=>this.ci=item);
    console.log(this.ci);
    return this.http.post<Items>(this.cartUrl+this.ci+'/',this.ci);
  }
}
