import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taskCopy-app';
  url = "https://demo.lychee-redmine.jp/issues.atom?key=b8f5cc90735681ad833885fb280ad19f88dfb524&query_id=1"
  xml: any

  httpOptions = {
    headers: new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded'),
  };
  constructor(private http: HttpClient,
) { }

  ngOnInit(): void {
    this.getTaskXml()
  }

  getTaskReq(): Observable<any> {
    return this.http.get(this.url)
  }

  getTaskXml() {
    console.log(this.getTaskReq().subscribe(res => { this.xml = res }))
    
    // console.log(this.xmlParser.parse(this.xml, this.url))
  }

}
