import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CatalogueService} from '../services/catalogue.service';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  public currentProduct: Product;

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private catalogueServive:CatalogueService) { }

  ngOnInit() {
    this.catalogueServive.getProduct(this.activatedRoute.snapshot.params.id)
      .subscribe(data=>{
        this.currentProduct=data;
      },
        err=>{
        console.log(err)
        });

  }

  onSaveProduct(data) {

  }

  onUpdateProduct(p) {
    this.catalogueServive.updateProduct(p)
      .subscribe(data=>{
        alert("mise a jour termine avec succe.")
        this.router.navigate(['/products'])
      },err=>{
        console.log(err);
      })
  }
}
