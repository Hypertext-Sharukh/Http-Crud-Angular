import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService {
  createDb() {
    let articleDetails = [
      { id: 101, title: 'Angular by Bindu', category: 'Angular' },
      { id: 102, title: 'Core Java by Divya', category: 'Java' },
      { id: 103, title: 'NgRx by Sravanthi', category: 'Angular'}
    ];
    return { articles: articleDetails };
  }
} 