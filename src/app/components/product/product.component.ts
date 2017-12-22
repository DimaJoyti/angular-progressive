import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from './product.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  ad: any;
  adForm: FormGroup;

  constructor(private adService: ProductService, private fb: FormBuilder) { }
  
  ngOnInit() {}
  
  startNewAdListing() {
    //this.ad =     this.adService.createAd()
    this.buildForm()
  }

  saveAdChanges() {
    if (this.adForm.status != 'VALID') {
      console.log('form is not valid, cannot save to database')
      return
    }

    const data = this.adForm.value
   //this.adService.updateAd(this.ad, data)
  }

  private buildForm() {
    this.adForm = this.fb.group({
      title:    ['', Validators.required ],
      content:  ['', Validators.required ],
      price:    ['', Validators.required ],
      image:    ['', Validators.required ]
    });

    this.ad.subscribe(ad => {
      this.adForm.patchValue(ad)
    })
  }

}