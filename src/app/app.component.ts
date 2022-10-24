import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  
  constructor(private http: HttpClient){}

posts: any[] = []
loadPosts(){
this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((posts: any)=>
{
this.posts = posts;
console.log(posts)
})};

unloadPosts(){
window.location.reload()
}

}
