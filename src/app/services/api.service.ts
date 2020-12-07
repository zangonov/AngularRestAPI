import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Pedido } from '../models/pedido';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Articulo } from '../models/articulo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // API path
  base_path = 'http://localhost:8080/api/';
  
  auth = ('user:user');
  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'Authorization': 'Basic ' + btoa('user:user'),
    'With-Credentials': 'true',
    'Content-Type': 'application/json'   })
  }
 
    // Handle API errors
    handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      // return an observable with a user-facing error message
      return throwError(
        'Something bad happened; please try again later.');
    };
 
  // Create a new item 
  createItem(item:Pedido): Observable<Pedido> {
    return this.http
      .post<Pedido>(this.base_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }


  httpOptionsGet = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('user:user')
    })
  };

  // Get list pedidos
  getList(): Observable<Pedido> {
   return this.http
    .get<Pedido>(this.base_path+"pedido/")
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
    }


    // Get pedido data
    getArticulos(idx: number): Observable<Pedido> {

    console.log("apiserivce ", idx);
    console.log("ruta ", this.base_path+"articulo/pedido/"+ idx);
     return this.http
       .get<Pedido>(this.base_path+"articulo/pedido/"+ idx)
       .pipe(
         retry(2),
         catchError(this.handleError)
       )
    }


}
