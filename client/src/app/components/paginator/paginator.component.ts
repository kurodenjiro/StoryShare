import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})

export class PaginatorComponent implements OnInit {
  // MatPaginator Inputs
  @Input() length: number;
  @Input() pageSize: number = 10;
  @Input() pageSizeOptions: number[];
  
  // MatPaginator Output
  pageEvent: PageEvent;
  @Output() updatePagination: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit() { }
  
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.updatePagination.emit(setPageSizeOptionsInput);
  }

}
