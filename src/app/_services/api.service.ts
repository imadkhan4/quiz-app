
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = environment.baseUrl;
  constructor(
    private http: HttpClient
  ) { }

  get(params) {
    return this.http.get<any[]>(`${environment.baseUrl}?amount=${params.amount}&category=${params.category}&difficulty=${params.difficulty}&type=${params.type}`);
  }
}

