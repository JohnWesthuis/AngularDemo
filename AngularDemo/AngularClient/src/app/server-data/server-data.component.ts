import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-server-data',
  templateUrl: './server-data.component.html',
  styleUrls: ['./server-data.component.css']
})
export class ServerDataComponent implements OnInit {
  data: any;
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<string[]>(this.baseUrl + '/values').subscribe(response => {
      this.data = response;
      console.log('Got this: ' + response[0] + ' and ' + response[1]);
    }, error => {
      console.log('Need CORS to access: ' + this.baseUrl);
    });
  }

}
