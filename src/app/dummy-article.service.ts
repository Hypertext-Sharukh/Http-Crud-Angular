import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class DummyArticleService {
   ArticleUrl = "/api/articles";

  constructor(private http:HttpClient) { }

  x():Observable<Article>{
    return this.http.get<Article>(this.ArticleUrl);
  }
