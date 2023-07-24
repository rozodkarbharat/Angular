import { Component,Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl:'./products-header.component.html',
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
sort='desc'
itemShowCount=1

onSortUpdate(newSort:string): void {
  this.sort = newSort;
}

onItemsUpdated(count:number): void {
this.itemShowCount = count;
}

onColumnsUpdated(colsNum:number): void {
  this.columnsCountChange.emit(colsNum);
}
}
