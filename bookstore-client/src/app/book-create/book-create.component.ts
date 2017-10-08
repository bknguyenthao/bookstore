import { Book } from '../book';
import { DataService } from '../data.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  book = new Book();
  submitted = false;
  constructor(private dataService: DataService,
    private location: Location) { }

  ngOnInit() {
  }

  newBook(): void {
    this.submitted = false;
    this.book = new Book();
  }

  private save(): void {
    this.dataService.create(this.book);
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  goBack(): void {
    this.location.back();
  }

}
