import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private apiUrl = 'https://localhost:5000/api/Team/';

  constructor(private http: HttpClient) { }

  getTeams(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "GetTeams");
  }
}
