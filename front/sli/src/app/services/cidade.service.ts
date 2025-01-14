import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cidade } from '../cadastros/model/cidade';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  apiURL: string = 'http://localhost:8081/api/cidade';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Cidade[]> {
    return this.http.get<Cidade[]>(this.apiURL);
  }

  deletar(cidade: Cidade): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${cidade.id}`);
  }

  getById(id: string): Observable<Cidade> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  inserir(cidade: Cidade): Observable<Cidade> {
    return this.http.post<Cidade>(`${this.apiURL}`, cidade);
  }

  alterar(cidade: Cidade): Observable<any> {
    return this.http.put<Cidade>(`${this.apiURL}`, cidade);
  }

}
