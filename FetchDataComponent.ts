// fetch-data.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Data {
  id: number;
  title: string;
}

@Component({
  selector: 'app-fetch-data',
  template: '
    <div>
    <h1>Data from API</h1>
    <ul>
        <li *ngFor="let item of data">
        {{ item.title }}
        </li>
    </ul>
    </div>
  ',
  styleUrls: ['./fetch-data.component.css']
})
export class FetchDataComponent implements OnInit {
  data: Data[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Data[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(result => {
        this.data = result;
      });
  }
}
