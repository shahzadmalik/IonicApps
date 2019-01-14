import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import {DetailPage} from '../detail/detail'



@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  public posts : any = [];
  private per_page: number = 5;//number of posts you want to display on one page
  private page: number = 1; // this will show 5 posts in one page
  private showLoadMoreButton = true;

  constructor(public navCtrl: NavController, public navParams: NavParams,public api:ApiProvider) {  
    this.getmyPosts();      
  }
  //get latest 5 Posts
  getmyPosts(){
    this.api.getPosts('posts?_embed&per_page=' + this.per_page + '&page=' + this.page).
      subscribe((data) => {
      this.posts = this.posts.concat(data);
      this.page++;      
      }, (error) =>{
        if(error.error.code === "rest_post_invalid_page_number"){
          this.showLoadMoreButton = false;
        }
        console.log(error);
      });
  }
  //Send to Detailed page
  postDetail(post){
    this.navCtrl.push(DetailPage, {detail:post});
  }

  //Get Category Name
 getCatName(cat_id:number){
  let cat_name:string = '';
  this.api.Categories.forEach(element => {
   if(element.id == cat_id){
     cat_name = element.name; 
    }
 });
  return cat_name;
 }

}//Class Ends here
