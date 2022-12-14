import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  
  constructor(private http: HttpClient){}

ngAfterContentInit(){
this.loadPosts()}

posts: any[] = []
loadPosts(){
this.http.get('http://localhost:8000/get_post_endpoint/').subscribe((posts: any)=>
{
this.posts = posts;
console.log(posts)
})};

deletePost(id:any){
this.http.delete('http://localhost:8000/delete_endpoint/'+id).subscribe(
(data) => {
        this.loadPosts();})

}

postPost(){
this.http.post('http://localhost:8000/get_post_endpoint/',{
        "id": "",
        "title": "Title",
        "description": "Description...",
        "completed": "Not Completed"
    }).subscribe((data) => {
        this.loadPosts();})
}

unloadPosts(){
window.location.reload()
}

}
