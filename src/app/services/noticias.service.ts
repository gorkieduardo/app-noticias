import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../pages/interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient  ) { }

  getTopHeadlines() {
  return this.http.get<RespuestaTopHeadlines>(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=0fbc188b8b8548ab810015e4a97a5f99`);

  // http://culturaeko.com/wp-json/wp/v2/posts


  }
}
