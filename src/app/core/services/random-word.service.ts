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
    const url = environment.apiUrl + `/words?lang=pl&length=${length}`;
    return this.http.get<RandomWordModel>(url);
  }

  decryptWord(word: string, length: number) {
    const res = atob(word.substring(0, 2) + word.substring(2 + length));

    return this.decodeUtf8(res);
  }

  decodeUtf8(text: string) {
    return decodeURIComponent(escape(text));
  }
}
