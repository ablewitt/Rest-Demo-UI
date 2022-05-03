import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MessageService } from './message.service';

export interface Greeting {
  id: number,
  content: string
}

@Injectable({
  providedIn: 'root'
})
export class GreetingService {

  apiURL = environment.apiURL;
  url = this.apiURL + "/greeting"

  constructor(private httpClient: HttpClient, private messageService : MessageService) { }

  getGreeting(name?: string | undefined | null) {
    let params = new HttpParams();
    if (name) {
      params = params.append('name', name);
    }
    return this.httpClient.get<Greeting>(this.url, { params: params }).pipe(
      catchError(this.handleError<Greeting>('getGreeting'))
    )
  }

  sendGreeting(greeting: Greeting) {
    let headers = new HttpHeaders({ "Content-Type": "application/json" })
    return this.httpClient.post<Greeting>(this.url,
      JSON.stringify(greeting), { headers: headers }).pipe(
        catchError(this.handleError<Greeting>('sendGreeting'))
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
