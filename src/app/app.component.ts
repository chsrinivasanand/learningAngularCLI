import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'LearningAngularCLI application';
  query: string ;
  artists: Object;
  showArtists(e, item) {
    console.log(e);
    this.query = item.name ;
    item.highlight = !item.highlight;
  }
  constructor (private http: HttpClient)  {
        this.artists = [ ] ;

  }

  ngOnInit(): void {
    this.http.get<Object>( '../assets/data.json').subscribe(
      data => {
        this.artists = data;
      }
    );
  }
}
