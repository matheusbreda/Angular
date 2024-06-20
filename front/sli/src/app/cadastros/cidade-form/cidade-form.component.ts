import { Component, OnInit } from '@angular/core';
import { CidadeService } from '../../services/cidade.service';
import { Cidade } from '../model/cidade';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';

@Component({
  selector: 'app-cidade-form',
  templateUrl: './cidade-form.component.html',
  styleUrl: './cidade-form.component.css'
})
export class CidadeFormComponent implements OnInit {

  cidade: Cidade = new Cidade();
  success: boolean = false;
  errors: String[] = [];
  id: string;

  constructor( 
    private service: CidadeService,
    private router: Router,
    private activateRoute: ActivatedRoute) {
      this.cidade = new Cidade();
  }

  /*ngOnInit(): void {
    let params: Observable<Params> = this.activateRoute.params;
      params.subscribe(urlParams => {
        this.id = urlParams['id'];
        if(this.id) {
          this.service.getById(this.id).subscribe(response => this.cidade = response);
        }
      })
  }*/

  ngOnInit(): void {
    let params: Observable<Params> = this.activateRoute.params;
      params.subscribe(urlParams => {
        this.id = urlParams['id'];
        this.service.getById(this.id)
          .subscribe(response => this.cidade = response, errorResponse => this.cidade = new Cidade() )
      })
  }

  onSubmit() {
    if(this.id) {
      this.service.alterar(this.cidade).subscribe(response =>{
          this.success = true;
          this.errors = [];
        }, errorResponse => {
          this.errors = ["Erro ao alterar a cidade"]        
        }
      )
    }else {
      this.service.inserir(this.cidade).subscribe(response => {
        this.success = true;
        this.errors = [];
        this.cidade = response;
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      }
      )
    }
    //this.voltarParaListagem();
  }

  voltarParaListagem() {
    this.router.navigate(["/lista-cidades"]);
  }

}
