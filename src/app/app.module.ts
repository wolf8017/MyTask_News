import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NewsComponent} from './news/news.component';
import {DefaultHeaderComponent} from './containers/default-layout/default-header/default-header.component';
import {DefaultFooterComponent} from "./containers/default-layout/default-footer/default-footer.component";
import {HomesComponent} from './homes/homes.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {DetailsNewsComponent} from './news/details-news/details-news.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {AddNewsComponent} from './news/add-news/add-news.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    DefaultHeaderComponent,
    DefaultFooterComponent,
    HomesComponent,
    DetailsNewsComponent,
    AddNewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    CKEditorModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
