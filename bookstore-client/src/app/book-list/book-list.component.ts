import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { DataService } from '../data.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];
  constructor(private dataService: DataService) { }
  getBooks() {
    return this.dataService.getBooks().then(books => {
      this.books = books;
    })
  }
  ngOnInit() {
    this.getBooks();
  }

}
