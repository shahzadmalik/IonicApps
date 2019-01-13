import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ApiProvider {

  private site_url:string = 'http://localhost/primaryschool/wp-json/wp/v2/';
  //Categories of the post
  public Categories: any = [];
  
  constructor(public http: HttpClient) {
   this.getCategories();
  }


  //get posts from the server
  getPosts(query:string = ''){
    return this.http.get(this.site_url + query);   
  }


  //get Categories
  getCategories(){
    this.getPosts('categories').subscribe((data) =>{
      this.Categories = data;      
    });
    
  }
}
