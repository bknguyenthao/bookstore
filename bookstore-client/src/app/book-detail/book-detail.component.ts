import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { DataService } from '../data.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book = new Book();
  submitted = false;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.dataService.getBook(params['id']))
      .subscribe(book => this.book = book);
  }

  onSubmit(): void {
    this.submitted = true;
    this.dataService.update(this.book);
  }

  delete(): void {
    this.dataService.delete(this.book._id).then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
