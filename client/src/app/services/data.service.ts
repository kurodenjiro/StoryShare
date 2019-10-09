import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) {
    console.log('DataService connected...');
  }
  
  getAllStories() {
    return this.http.get('/api/getitems')
      .map(res => res.json())
  }
  
  getStory(id) {
    return this.http.get('/api/getitem', { search: id })
      .map(res => res.json())
  }
  
  postStory(data) {
    return this.http.post('/api/postdata', { data })
      .map(res => res.json())
  }
  
  postComment(data) {
    return this.http.post('/api/postcomment', { data })
      .map(res => res.json())
  }
}
