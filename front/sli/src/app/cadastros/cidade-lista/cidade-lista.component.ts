import { Component, OnInit } from '@angular/core';
import { Cidade } from '../model/cidade';
import { CidadeService } from '../../services/cidade.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cidade-lista',
  templateUrl: './cidade-lista.component.html',
  styleUrl: './cidade-lista.component.css'
})
export class CidadeListaComponent implements OnInit {

  cidadeLista: Cidade[] = [];
  cidadeSelecionada: Cidade;
  menssagemSucesso: String = "";
  menssagemErro: String = "";

  constructor(
    private service: CidadeService, private router: Router) {
  }

  ngOnInit(): void {
    this.service.getAll().subscribe(resposta => this.cidadeLista = resposta);
  }

  novoCadastro() {
    this.router.navigate(["/cadastro-cidades"])
  }

  deletar() {
    this.service.deletar(this.cidadeSelecionada).subscribe(resposta => {
      this.menssagemSucesso ="Cidade deletada com sucesso!";
      this.ngOnInit();
    },
      erro => this.menssagemErro = "Ocorreu um erro ao deletar esta cidade"
    )
  }

  adicionaSelecionado(cidade: Cidade) {
    this.cidadeSelecionada = cidade;
  }

}


