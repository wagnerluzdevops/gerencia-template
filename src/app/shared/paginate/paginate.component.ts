import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'eac-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.scss']
})
export class PaginateComponent implements OnInit {

  private _totalPages: number= 0;
  private _perPage: number = 1;
  @Input() totalCount: number = 0;
  @Output() actualPage: number = 0;



  @Input()
  set totalPages(value){
    this._totalPages = value;
    this.update();
    this.dispatchChange();

  }
  @Input()
  set perPage(value){
    this._perPage = value;
    this.update();
    this.dispatchChange();

  }


  @Output() change: EventEmitter<any> = new EventEmitter();

  pages: number [] = [];


  constructor() { }

  ngOnInit() {
   
  }

 
  
  increase(): void {
    if(this.nextAllowed){
      this.actualPage++;
    }
    this.update();
    this.dispatchChange();
  }

  decrease(): void{
    if(this.backAllowed){
      this.actualPage--;
    }
    this.update();
    this.dispatchChange();
  }

  selectPage(page: number){
    this.actualPage = page;
    this.update();
    this.dispatchChange();
  }

  update():void {

    /** verifica se a página atual está fora do range 
    // e corrige para a última página. Este cenário ocorre
    // sempre que removemos o registro único da última página
    **/
    if(this.actualPage > this._totalPages - 1
        && this._totalPages > 0){

      this.actualPage = this._totalPages - 1
    }

    this.pages = []
    for (let page = 0; page < this._totalPages; page++) {
      this.pages.push(page)
    }
   
  }

  isActive(page: number): any {
    return {
      'active': this.actualPage == page
    }
  }

  nextAllowed(): boolean {
    return this.actualPage < (this._totalPages - 1)
  }
  backAllowed(): boolean {
    return this.actualPage > 0;
  }

  dispatchChange(){
    this.change.emit({ page: this.actualPage, perPage: this._perPage});
  }
}
