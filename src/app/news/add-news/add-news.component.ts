import {Component, OnInit} from '@angular/core';
import Editor from "../../ckCustomBuild";
import {NewsService} from "../../services/news.service";
import {INews} from "../INews";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css'],
})
export class AddNewsComponent implements OnInit {
  public Editor = Editor;
  private base64textString = '';

  addNews: INews = {
    id: 0,
    writer: 1,
    title: '',
    content: '',
    state: 1,
  };

  constructor(
    private newsService: NewsService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  imageBase64!: string;

  async upLoadFile(event: any): Promise<void> {
    const selectedImage = event.target.files[0];
    if (selectedImage) {
      this.imageBase64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (e) => {
          const dataUrl = (<HTMLInputElement>document.getElementById('previewImage'));
          dataUrl.src = e.target?.result as string;
          resolve(e.target?.result as string);
        };
        reader.readAsDataURL(selectedImage);
      });
      // if (selectedImage)
      // {
      //   const reader = new FileReader();
      //   reader.onload = this._handleReaderLoaded.bind(this);
      //   reader.readAsBinaryString(selectedImage);
      // }
    }
  }

  //
  // _handleReaderLoaded(readerEvt: any) {
  //   const binaryString = readerEvt.target.result;
  //   this.imageBase64 = btoa(binaryString);
  // }

  saveNews() {
    const getNews = {
      news_id: this.addNews.id,
      acc_id: this.addNews.writer,
      image: this.imageBase64,
      title: this.addNews.title,
      content: this.addNews.content,
      state: 1,
    }
    this.newsService.addNewsAPI(getNews).subscribe({
      next: (data) => {
        this.router.navigate(['news']);
      }
    })
  }
}
