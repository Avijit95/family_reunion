import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { SelectcategoryComponent } from '../../app/selectcategory/selectcategory.component';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  constructor(public popoverController: PopoverController) { }

  async selectcategory() {
    const popover = await this.popoverController.create({
      component: SelectcategoryComponent,
      cssClass:'selectcategory',
      translucent: true
    });
    return await popover.present();
  }

  ngOnInit() {}

}
