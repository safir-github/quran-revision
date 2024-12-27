import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root',
})
export class SourateService {
  private jsonUrl = 'data/sourates.json';

  constructor(private http: HttpClient) {}

  getSourates(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }

  getSourateById(id: number): Observable<any> {
    return this.getSourates().pipe(
      map((sourates) => sourates.find((sourate) => sourate.numero === id))
    );
  }
}
