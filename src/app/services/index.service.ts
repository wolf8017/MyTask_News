import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../environments/environment";

export const MaThongBaoAPI = {
  UNSUCCESS: -1,//Không Thành công
  SUCCESS: 1,//Thành công
  END_OF_LOGIN_SESSION: 2, // kết thúc phiên đăng nhập
  UNKNOWN: 99, //Lỗi không xác định
  NOT_NOTIFY: 100, //Lỗi không xác định
}

export declare type ResultAPI<T> = {
  mathongbao: number;
  thongbao: string;
  dulieu: T;
};

export declare type ApiErrorResponse = HttpErrorResponse & {
  title_custom: string;
  message_custom: string;
};

declare type ContentType = "application/json" | "application/xml" | null;

@Injectable({
  providedIn: 'root'
})
export class ApiServices {
  private BASEURL = environment.ApiEndpoint.BASE;
  public config = {
    ngonngu_id: 1,
    form_id: 1,
    server_id: 1,
    token: '',
    khachang_id: 0
  }
  public portal_id: number = 0;
  constructor(private http: HttpClient) {

    if (localStorage.getItem(environment.envi_key.config) !== null) {
      const res: any = localStorage.getItem(environment.envi_key.config);
      this.config = Object.assign(JSON.parse(res), this.config);
    }
  }

  setPortalId(portalId: any): boolean {
    let result = false;
    if (this.portal_id == portalId) {
      result = true;
    } else {
      result = false;
    }
    this.portal_id = portalId;
    return result;
  }

  setKhachHang(khId: any) {
    this.config.khachang_id = khId;
  }

  callApiFormData<T = any>(
    api: string,
    body: FormData,
    showloading = true
  ): Observable<ResultAPI<T>> {
    const httpOptions = {
      headers: new HttpHeaders({
        "ngonngu_id": this.config.ngonngu_id.toString(),
        "form_id": this.config.form_id.toString(),
        "server_id": this.config.server_id.toString(),
        "portal_id": this.portal_id.toString(),
        //"token": localStorage.getItem(enviroment.envi_key.token) ? localStorage.getItem(enviroment.envi_key.token) : '',
      }),
    };

    try {
      return this.http.post<ResultAPI<T>>(this.BASEURL + api, body, httpOptions);
    } catch (error) {
      return Observable.create((observer:any) => {
        observer.next({
          mathongbao: 500,
          thongbao: error,
          dulieu: null,
        });
        observer.complete();
      });
    }
  }

  callApiMultiFormData<T = any>(
    api: string,
    body: any,
    showloading = true
  ): Observable<ResultAPI<T>> {
    const httpOptions = {
      headers: new HttpHeaders({
        "ngonngu_id": this.config.ngonngu_id.toString(),
        "form_id": this.config.form_id.toString(),
        "server_id": this.config.server_id.toString(),
        "portal_id": this.portal_id.toString(),
        //"token": localStorage.getItem(enviroment.envi_key.token) ? localStorage.getItem(enviroment.envi_key.token) : '',
      }),
    };

    try {
      return this.http.post<ResultAPI<T>>(this.BASEURL + api, body, httpOptions);
    } catch (error) {
      return Observable.create((observer:any) => {
        observer.next({
          mathongbao: 500,
          thongbao: error,
          dulieu: null,
        });
        observer.complete();
      });
    }
  }

  callApiFormData0Module<T = any>(
    api: string,
    body: FormData,
    portal_id: string,
    showloading = true
  ): Observable<ResultAPI<T>> {
    const httpOptions = {
      headers: new HttpHeaders({
        "ngonngu_id": this.config.ngonngu_id.toString(),
        "form_id": this.config.form_id.toString(),
        "server_id": this.config.server_id.toString(),
        "portal_id": portal_id,
        //"token": localStorage.getItem(enviroment.envi_key.token) ? localStorage.getItem(enviroment.envi_key.token) : '',
      }),
    };

    try {
      return this.http.post<ResultAPI<T>>(this.BASEURL + api, body, httpOptions);
    } catch (error) {
      return Observable.create((observer:any) => {
        observer.next({
          mathongbao: 500,
          thongbao: error,
          dulieu: null,
        });
        observer.complete();
      });
    }
  }

  callApiFormDataMulti<T = any>(
    api: string,
    body: FormData,
    showloading = true
  ): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "ngonngu_id": this.config.ngonngu_id.toString(),
        "form_id": this.config.form_id.toString(),
        "server_id": this.config.server_id.toString(),
        "portal_id": this.portal_id.toString(),
        //"token": localStorage.getItem(enviroment.envi_key.token) ? localStorage.getItem(enviroment.envi_key.token) : '',
      }),
    };

    return this.http.post(this.BASEURL + api, body, { responseType: 'text', headers: httpOptions.headers });
  }

  getHt2401TaiLieuArrayBuffer({fileId}: { fileId: any }): Observable<ArrayBuffer> {
    const httpOptions = {
      headers: new HttpHeaders({
        "ngonngu_id": this.config.ngonngu_id.toString(),
        "form_id": this.config.form_id.toString(),
        "server_id": this.config.server_id.toString(),
        "portal_id": this.portal_id.toString(),
        //"token": localStorage.getItem(enviroment.envi_key.token) ? localStorage.getItem(enviroment.envi_key.token) : '',
      })
    };
    return this.http.get(this.BASEURL + environment.ApiEndpoint.GetDocument,
      { responseType: 'arraybuffer', headers: httpOptions.headers, params: { file_id: fileId } });
  }

  getFileArrayBuffer({url, obj}: { url: any, obj: any }): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "ngonngu_id": this.config.ngonngu_id.toString(),
        "form_id": this.config.form_id.toString(),
        "server_id": this.config.server_id.toString(),
        "portal_id": this.portal_id.toString(),
        //"token": localStorage.getItem(enviroment.envi_key.token) ? localStorage.getItem(enviroment.envi_key.token) : '',
      })
    };

    return this.http.post( url, obj, { responseType: 'json', headers: httpOptions.headers });
  }

  callAPIJson<T = any>(
    api: string,
    body?: object | string | null,
    method: "GET" | "POST" | "PUT" | "DELETE" = "POST",
    contentType?: ContentType,
    showloading = true
  ): Observable<ResultAPI<T>> {
    return this.httpAPI(this.BASEURL + api, body, method, contentType, "application/json", showloading);
  }

  callAPIXml(
    api: string,
    body?: object | string | null,
    method: "GET" | "POST" | "PUT" | "DELETE" = "POST",
    contentType?: ContentType,
    showloading = true
  ): Observable<string> {
    return this.httpAPI(this.BASEURL + api, body, method, contentType, "application/xml", showloading);
  }

  private httpAPI(api: string,
                  body?: object | string | null,
                  method: "GET" | "POST" | "PUT" | "DELETE" = "POST",
                  contentType?: ContentType,
                  accept?: ContentType,
                  showloading = true) {
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: accept ? accept : "application/json",
        "Content-Type": contentType ? contentType : "application/json",
        "ngonngu_id": this.config.ngonngu_id.toString(),
        "form_id": this.config.form_id.toString(),
        "server_id": this.config.server_id.toString(),
        "portal_id": this.portal_id.toString(),
        //"token": localStorage.getItem(enviroment.envi_key.token) ? localStorage.getItem(enviroment.envi_key.token) : '',
      }),
    };

    if (accept === "application/xml") {
      Object.assign(httpOptions, { responseType: 'text' as 'json' })
    }

    try {
      if (method === "GET") {
        return this.http.get(api, httpOptions);
      } else if (method === "POST") {
        return this.http.post(api, body, httpOptions);
      } else if (method === "PUT") {
        return this.http.put(api, body, httpOptions);
      } else {
        return Observable.create((observer:any) => {
          observer.next(accept === "application/json" ? {
            mathongbao: 404,
            thongbao: "response not exsits.",
            dulieu: null,
          } : "404: response not exsits");
          observer.complete();
        });
      }
    } catch (error) {
      return Observable.create((observer:any) => {
        observer.next(accept === "application/json" ? {
          mathongbao: 500,
          thongbao: error,
          dulieu: null,
        } : "404: response not exsits");
        observer.complete();
      });
    }
  }

}
