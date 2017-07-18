import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers, RequestOptions,URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent implements OnInit {

  constructor(private http:Http) { }
  private results:any;
  private defaultImgSrc='/assets/no-image.png';
  ngOnInit() {

    this.http.get("https://www.reddit.com/r/all.json").subscribe(data => {
      this.results = data.json();
      this.results=this.results.data.children;
      console.log(this.results);
    });

  }

}
