import {Component,OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NewsService} from "../../services/news.service";
import {INews} from "../INews";
import {GetNews} from "../GetNews";

@Component({
  selector: 'app-details-news',
  templateUrl: './details-news.component.html',
  styleUrls: ['./details-news.component.css']
})
export class DetailsNewsComponent implements OnInit {

  newsID = -1;
  getNewsDetail: GetNews[] = [];
  iNewsList: INews = {
    id: 0,
    writer: 0,
    image: '',
    title: '',
    content: '',
    state: 0,
  }
  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
  ) {
    this.newsID = Number(this.route.snapshot.params['id']);
  }

  ngOnInit() {
    const getNews = {
      news_id: this.newsID,
      acc_id: this.iNewsList.writer,
      image: this.iNewsList.image,
      title: this.iNewsList.title,
      content: this.iNewsList.content,
      state: this.iNewsList.state,
    };
    this.newsService.detailNewsAPI(getNews).subscribe((data) =>{
      this.getNewsDetail = data.table1;
    })
  }
}
