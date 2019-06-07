import { Component, OnInit } from '@angular/core';
import {CatalogueService} from '../services/catalogue.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  public produits:any;
  public size:number=5;
  public currentPage:number=0;
  public totalPages:number;
  public pages:Array<number>;
  public currentKeyWord: string="";

  constructor(private catalogueService: CatalogueService, private router:Router) { }

  ngOnInit() {
    this.onGetProduct();
  }

  onGetProduct() {
    this.catalogueService.getProducts(this.currentPage,this.size)
      .subscribe(
        data=>{
          this.produits=data;
          this.totalPages=data["page"].totalPages;
          this.pages=new Array<number>(this.totalPages)
        },
        err=>{
          console.log(err);
        }
      )
  }

  onPageProduct(i) {
    this.currentPage=i;
    this.chercherProduits();
  }

  onChercher(form:any) {
    this.currentPage=0;
    this.currentKeyWord=form.keyWord;
    this.chercherProduits();
  }

  chercherProduits() {
    this.catalogueService.getProductsByKeuWord(this.currentKeyWord,this.currentPage,this.size)
      .subscribe(
        data=>{
          this.produits=data;
          this.totalPages=data["page"].totalPages;
          this.pages=new Array<number>(this.totalPages)
        },
        err=>{
          console.log(err);
        }
      )
  }

  onDelete(p) {
    let conf=confirm("etes vous sure de bien supprimer ce produit!!!!");
    if(conf){
      this.catalogueService.deleteProduct(p.code)
        .subscribe(data=>{
          this.chercherProduits();
        },
          err=>{
          console.log(err);
          });
    }
  }

  onEdit(p) {
    this.router.navigate(['/edit-product/'+p.code]);
  }
}
