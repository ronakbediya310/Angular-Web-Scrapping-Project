import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Review {
  Product: string;
  Name: string;
  Rating: string;
  CommentHead: string;
  Comment: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'webscrappingproject';
  item: string = '';
  reviews: Review[] = [];
  isLoading = false;
  constructor(private http: HttpClient) {}

  fetchReviews() {
    this.isLoading=true;
    const url = `http://localhost:4500/api/showreview?item=${encodeURIComponent(
      this.item
    )}`;

    this.http.get<Review[]>(url).subscribe(
      (response: Review[]) => {
        this.reviews = response;
        console.log(this.isLoading);
        this.isLoading = false;
        console.log(this.isLoading);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
