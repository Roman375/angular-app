import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  search = "";
  products;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<SearchResults>('http://demo3062546.mockable.io/products')
      .subscribe({
        next: (data) => {
          this.products = data.products;
        },
        error: (error) => {
          console.error('There was an error!', error);
        },
      });
  }
}

interface SearchResults {
  count_products: number;
  page_count: number;
  products: Array<object>;
  page: number
}
