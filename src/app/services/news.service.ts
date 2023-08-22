import {Injectable} from '@angular/core';
import {ApiServices} from "./index.service";
import {map, Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(
    private apiService: ApiServices
  ) {}

  newsAPI(credentials:any):Observable<any>
  {
    return this.apiService.callAPIJson(environment.ApiEndpoint.BanTin,credentials)
      .pipe(map((data) => {
        return data.dulieu;
      }));
  }

  addNewsAPI(credentials:any):Observable<any>
  {
    return this.apiService.callAPIJson(environment.ApiEndpoint.ThemBanTin,credentials)
      .pipe(map((data) => {
        return data.dulieu;
      }));
  }

  updateNewsAPI(credentials:any):Observable<any>
  {
    return this.apiService.callAPIJson(environment.ApiEndpoint.CapNhatBanTin,credentials)
      .pipe(map((data) => {
        return data.dulieu;
      }));
  }

  deleteNewsAPI(credentials:any):Observable<any>
  {
    return this.apiService.callAPIJson(environment.ApiEndpoint.XoaBanTin,credentials)
      .pipe(map((data) => {
        return data.dulieu;
      }));
  }

  detailNewsAPI(credentials:any):Observable<any>
  {
    return this.apiService.callAPIJson(environment.ApiEndpoint.BanTinChiTiet,credentials)
      .pipe(map((data) => {
        return data.dulieu;
      }));
  }
}
