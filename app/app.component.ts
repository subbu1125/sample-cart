import {Component} from 'angular2/core';
import {ProductListComponent} from './products/product-list.component';
@Component({
    selector:'my-app',
    template:`<div class="container">
      <h1>{{ pageTitle}}</h1>
      <pm-products></pm-products>
      </div>
    `,
    directives:[ProductListComponent]
})
export class AppComponent{
pageTitle:string=' product management';
}
