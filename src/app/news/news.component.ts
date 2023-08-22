import {Component, OnInit, ViewChild} from '@angular/core';
import {NewsService} from "../services/news.service";
import {Router} from "@angular/router";
import Editor from "../ckCustomBuild";
import {GetNews} from "./GetNews";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']

})
export class NewsComponent implements OnInit {
  @ViewChild('closebutton') closeModal: any;
  getAllNews: GetNews[] = [];
  searchNews?: string;

  iNewsListForm!: FormGroup;
  newsID = -1;

  editorData?: string;

  constructor(
    private router: Router,
    private newsService: NewsService,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.iNewsListForm = this.fb.group({
      newsIdModal: ['', Validators.required],
      newsWriterModal: ['', Validators.required],
      newsTitleModal: ['', Validators.required],
      newsImageModal: ['', Validators.required],
      newsContentModal: ['', Validators.required],
      state: [4, Validators.required]
    })
    this.newsService.newsAPI(this.iNewsListForm.getRawValue()).subscribe((data) => {
      this.getAllNews = data.table1;
    })
  }

  gotoDetails($id: string = '') {
    const navigationDetails: string[] = ['/details']
    if ($id.length) {
      navigationDetails.push($id);
    }
    this.router.navigate(navigationDetails);
  }

  gotoAddNews($path: string = '') {
    const navigationDetails: string[] = ['']
    if ($path.length) {
      navigationDetails.push($path);
    }
    this.router.navigate(navigationDetails);
  }

  deleteNews(inews: GetNews) {
    const getNews = {
      news_id: inews.news_id,
      acc_id: 0,
      image: '',
      title: '',
      content: '',
      state: 3,
    };

    const confirmDelete = confirm('Bạn có muốn xóa bài tin với ID là: ' + getNews.news_id + ' không?');
    if (confirmDelete) {
      this.newsService.deleteNewsAPI(getNews).subscribe({
        next: (data) => {
          this.ngOnInit();
        }
      });
    }
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

  updateNews() {
    // var fileInput = (<HTMLInputElement>document.getElementById("newsImageModal"));
    // var file = fileInput?.value.split("\\");
    // var fileName = file[file?.length-1];

    const getNews = {
      news_id: this.newsID,
      acc_id: this.iNewsListForm.get('newsIdModal')?.value,
      image: this.imageBase64,
      title: this.iNewsListForm.get('newsTitleModal')?.value,
      content: this.iNewsListForm.get('newsContentModal')?.value,
      state: 2,
    };

    const confirmUpdate = confirm('Bạn có muốn cập nhật bài tin với ID là: ' + getNews.news_id + ' không?');
    if (confirmUpdate) {
      this.newsService.updateNewsAPI(getNews).subscribe({
        next: (data) => {
          this.closeModal.nativeElement.click();
          this.ngOnInit();
        },
        error: err => {
          console.log(err);
        }
      });
    }
  }

  openModal(inews: GetNews) {
    this.newsID = Number(inews.news_id);
    // this.iNewsListForm.value = document.getElementById('newsIdModal')?.setAttribute('value', String(inews.news_id))
    // document.getElementById('newsIdModal')?.setAttribute('value', String(inews.news_id));
    // document.getElementById('newsWriterModal')?.setAttribute('value', String(inews.news_ac_id));
    // document.getElementById('newsTitleModal')?.setAttribute('value', String(inews.news_title));
    // this.editorData = inews.news_content;

    const fileInput = (<HTMLInputElement>document.querySelector('input[type="file"]'));
    const myFile = new File([String(inews.news_image)], String(inews.news_image));
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(myFile);
    fileInput.files = dataTransfer.files;

    // @ts-ignore
    document.getElementById('previewImage')?.setAttribute('src', inews.news_image);

    this.iNewsListForm = this.fb.group({
      newsIdModal: inews.news_id,
      newsWriterModal: inews.news_ac_id,
      newsImageModal: inews.news_image,
      newsTitleModal: inews.news_title,
      newsContentModal: inews.news_content,
    })
  }

  searchResult(filter: string) {
    this.getAllNews = this.getAllNews.filter(news => {
      if (news.news_title?.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
        return true;
      }
      return false;
    })
  }


  protected readonly String = String;
  protected readonly Editor = Editor;
}
