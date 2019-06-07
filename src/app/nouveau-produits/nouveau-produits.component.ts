import { Component, OnInit } from '@angular/core';
import {CatalogueService} from '../services/catalogue.service';
import {Router} from '@angular/router';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-nouveau-produits',
  templateUrl: './nouveau-produits.component.html',
  styleUrls: ['./nouveau-produits.component.css']
})
export class NouveauProduitsComponent implements OnInit {
  public currentProduct: Product;
  public mode: number=1;

  constructor(private catalogueService: CatalogueService,private router:Router) {
  }

  ngOnInit() {
  }


  onSaveProduct(data: any) {
    this.catalogueService.save(data)
      .subscribe(res=>{
        this.currentProduct=res;
        this.mode=2;
        //this.router.navigate(['/products']);
      },
        err=>{
        console.log(err);
        });
  }

  onNewProduct() {
    this.mode=1;
  }
}
