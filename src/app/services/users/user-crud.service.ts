import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class User {
  _id: number;
  name: string;
  email: string;
  username: string;
}

@Injectable({
  providedIn: 'root'
})

export class UserCrudService {

  endpoint = 'http://localhost:3000/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.endpoint)
    .pipe(
      tap(users => console.log('Users data retrieved!')),
      catchError(this.handleError<User[]>('Get user', []))
    );
  }

  getUser(id): Observable<User[]> {
    return this.httpClient.get<User[]>(this.endpoint + '/' + id)
    .pipe(
      tap(_ => console.log(`User fetched: ${id}`)),
      catchError(this.handleError<User[]>(`Get user by id=${id}`, []))
    );
  }

  createUser(user: User): Observable<any> {
    return this.httpClient.post(this.endpoint, JSON.stringify(user), this.httpOptions)
    .pipe(
      catchError(this.handleError<User[]>('Error occurred!'))
    );
  }

  updateUser(id, user: User): Observable<any> {
    return this.httpClient.put(this.endpoint + '/' + id, JSON.stringify(user), this.httpOptions)
    .pipe(
      tap(_ => console.log(`User updated: ${id}`)),
      catchError(this.handleError<User[]>('Error occurred!'))
    );
  }

  deleteUser(id): Observable<User[]> {
    return this.httpClient.delete<User[]>(this.endpoint + '/' + id, this.httpOptions)
    .pipe(
      tap(_ => console.log(`User deleted: ${id}`)),
      catchError(this.handleError<User[]>('Error occurred!'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
}
