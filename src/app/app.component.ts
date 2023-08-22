import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NavigationEnd, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit{

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private titleService: Title,
  ) {
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }
  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
    });


  }
}
