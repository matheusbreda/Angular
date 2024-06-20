import { Component, OnInit, Pipe} from '@angular/core';
import { Cidade } from 'src/app/cadastros/model/cidade';
import { Venda } from 'src/app/movimentacoes/model/venda';
import { CidadeService } from 'src/app/services/cidade.service';
import { VendaService } from 'src/app/services/venda.service';

@Component({
  selector: 'app-relatorio-venda',
  templateUrl: './relatorio-venda.component.html',
  styleUrls: ['./relatorio-venda.component.css'],
})

export class RelatorioVendaComponent implements OnInit {
  vendaLista: Venda[] = [];
  cidadeLista: Cidade[] = [];
  cidade: Cidade = new Cidade();
  mensagemSucesso: string = "";
  mensagemErro: string = "";
  filtro: string;
  valorTotalCalculado: number;

  constructor( 
    private serviceVenda: VendaService,
    private serviceCidade: CidadeService
  ){}

  ngOnInit() {
    this.serviceVenda.getAll().subscribe( resposta => this.vendaLista = resposta);  
    this.serviceCidade.getAll().subscribe( resposta => this.cidadeLista = resposta);
  }

  atualizaTotal(){
    this.valorTotalCalculado = 0;
    if(!this.filtro){
      this.vendaLista.forEach(item=> {
        this.valorTotalCalculado = Number(this.valorTotalCalculado) + Number(item.valorTotal);
      }); 
    }else{
      this.vendaLista.filter(item => item.cliente.cidade.nome === this.filtro).forEach(item=> {
        this.valorTotalCalculado = Number(this.valorTotalCalculado) + Number(item.valorTotal);  
      });
    }
  }  

}