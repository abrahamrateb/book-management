import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  // addBook(book: Book): Observable<Book>{
  //   return of(book);
  // }

  addBook(book: Book): Observable<Book>{
    
    const err = new Error('test Error')
    return throwError(() => err)
  }
}
