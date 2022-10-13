import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { RandomWordModel } from 'src/app/core/models/random-word.model';

@Injectable({
  providedIn: 'root',
})
export class RandomWordService {
  constructor(private http: HttpClient) {}

  getRandomWord(length: number) {
    const url = environment.apiUrl + `/rw/${length}`;
    return this.http.get<RandomWordModel>(url);
  }
}
