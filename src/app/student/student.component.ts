import { ArticleService } from './../article/article.service';
import { Component, OnInit } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  allArticles:Article[];

  statusCode:number;
  constructor(private  articleService:ArticleService) { }

  ngOnInit() {
    this.x();
  }

  y(){
        this.articleService.x()
        .subscribe(
          d => this.allArticles = d,
          // errorCode => this.statusCode = errorCode);
  }

}
