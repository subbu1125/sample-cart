import {Component,OnChanges,Input, Output, EventEmitter } from 'angular2/core';
@Component({
    selector:'ai-star',
    templateUrl:'app/shared/star.component.html',
    styleUrl:['app/shared/star.component.css']
})
export class starComponent{
    @Input() rating:number;
    starWidth:number;
    @Output() ratingClicked: EventEmitter<string> =
        new EventEmitter<string>();
    ngOnchanges():void{
    this starWidth=this.rating*86/5;
    }
    onClick(): void {
       this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
   }
}
