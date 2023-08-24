import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor (private http: HttpClient){}
  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next:response=> console.log(response),
      error:error=> console.log(error),
      complete:()=> console.log('complete')
    
  })
    throw new Error('Method not implemented.');
  }

  title = 'Client';
}



