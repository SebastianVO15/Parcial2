import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ParcialService {
  private apiUrl = environment.baseUrl + 'parcial.json';
constructor(private http: HttpClient) { }

}
