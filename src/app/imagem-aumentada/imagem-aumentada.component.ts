import { Component } from '@angular/core';

@Component({
  selector: 'app-imagem-aumentada',
  templateUrl: './imagem-aumentada.component.html',
  styleUrls: ['./imagem-aumentada.component.css']
})
export class ImagemAumentadaComponent {
  public primeira_imagem: boolean = true
  public segunda_imagem : boolean = true
  public altura : string = '200px'
  public tamanho : string = '200px'
  public tamanho2 : string = '200px'
  public altura2 : string = '200px'


  public foto_quadrado(){
    if(this.primeira_imagem){
      this.altura = '500px'
      this.tamanho = '500px'
      this.primeira_imagem = false
    }else{
      this.altura = '200px'
      this.tamanho = '200px'
      this.primeira_imagem= true
    }
  }

  public foto_circulo(){
    if(this.segunda_imagem){
      this.altura2 = '500px'
      this.tamanho2 = '500px'
      this.segunda_imagem = false
    }else{
      this.altura2 = '200px'
      this.tamanho2 = '200px'
      this.segunda_imagem = true
    }
  }
}
