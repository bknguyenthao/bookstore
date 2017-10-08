import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/toPromise';

import { Book } from './book';

@Injectable()
export class DataService {

  private booksUrl = 'http://localhost:3000/api/books';  // URL to web API
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getBooks(): Promise<Book[]> {
    // this.headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get(this.booksUrl)
      .toPromise()
      .then(response => response.json() as Book[])
      .catch(this.handleError);
  }

  getBook(id: string): Promise<Book> {
    // this.headers.append('Access-Control-Allow-Origin', '*');
    const url = `${this.booksUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Book)
      .catch(this.handleError);
  }

  create(Book: Book): Promise<Book> {
    return this.http
      .post(this.booksUrl + "/add", JSON.stringify(Book), { headers: this.headers })
      .toPromise()
      .then(res => res.json() as Book)
      .catch(this.handleError);
  }

  update(Book: Book): Promise<Book> {
    const url = `${this.booksUrl + "/update"}/${Book._id}`;
    // this.headers.append('Access-Control-Allow-Origin', '*');
    return this.http
      .put(url, JSON.stringify(Book), { headers: this.headers })
      .toPromise()
      .then(() => Book)
      .catch(this.handleError);
  }

  delete(id: string): Promise<void> {
    const url = `${this.booksUrl + "/delete"}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
