import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getAllCategories`);
  }

  getAllListings(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getAllListings`);
  }

  getAllListingsByCategory(id : number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getListingsByCategory?categoryId=${id}`);
  }

  addUser(name: string, email: string, phone: string): Observable<any> {
    const url = `${this.apiUrl}/addUser`;
    const body = { name, email, phone };
    console.log(body);
    return this.http.post(url, body);
  }

  getUser(email: string): Observable<any> {
    const url = `${this.apiUrl}/getUserFromEmail?email=${email}`;
    return this.http.get(url);
  }
}
