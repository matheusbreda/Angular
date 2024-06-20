import { Pipe, PipeTransform } from '@angular/core';
import { Venda } from 'src/app/movimentacoes/model/venda';

@Pipe({
  name: 'tabelaFiltro'
})

export class TabelaFiltroPipe implements PipeTransform {

  transform(list: Venda[], value: string) {
  
    return value ? list.filter(item => item.cliente.cidade.nome === value) : list
    
  }

}