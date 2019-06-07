import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  public host:String="http://localhost:8088"
  constructor(private http:HttpClient) { }

  public getProducts(page:number,size:number){
    return this.http.get(this.host+"/produits?page="+page+"&size="+size);
  }

  public getProductsByKeuWord(keyWord:string,page:number,size:number){
    return this.http.get(this.host+"/produits/search/byDesignationPage?mc="+keyWord+"&page="+page+"&size="+size);
  }

  public deleteProduct(codeProduit){
    return this.http.delete(this.host+"/produits/"+codeProduit);
  }

  public save(data):Observable<Product>{
   return this.http.post<Product>(this.host+"/produits",data);
  }

  public getProduct(id):Observable<Product>{
    return this.http.get<Product>(this.host+"/produits/"+id);
  }

  public updateProduct(data){
    return this.http.put(this.host+"/produits/"+data.code,data);
  }
}
