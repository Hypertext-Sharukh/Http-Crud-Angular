import { ArticleComponent } from './article/article.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';


//For InMemory testing
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TestData } from './test-data';
import { StudentComponent } from './student/student.component';


@NgModule({
      imports: [
            BrowserModule,
            HttpClientModule,
            ReactiveFormsModule,
            InMemoryWebApiModule.forRoot(TestData)
      ],
      declarations: [
            AppComponent,
            ArticleComponent,
            StudentComponent
      ],
      providers: [],
      bootstrap: [
            AppComponent
      ]
})
export class AppModule { } 