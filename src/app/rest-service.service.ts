import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MessageService } from './message.service';

export interface UploadMsg{
  fileName: string,
  fileSize: number, 
  fileType: string, 
  comment: string
}

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  apiURL = environment.apiURL;
  url = this.apiURL + "/file"

  constructor(private httpClient: HttpClient, private messageService : MessageService) { }

  submit(file : File, comment : string){
    let data = new FormData();
    data.append("file", file, file.name);
    data.append("comment", comment);
    return this.httpClient.post<UploadMsg>(this.url, data).pipe(
      catchError(this.handleError<UploadMsg>('submit'))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.messageService.show("Error " + error.name, error.message)
      return of(result as T);
    };
  }
}