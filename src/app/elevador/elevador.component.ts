import { Component } from '@angular/core';

@Component({
  selector: 'app-elevador',
  templateUrl: './elevador.component.html',
  styleUrls: ['./elevador.component.css']
})
export class ElevadorComponent {
  public botaoCondition : boolean = true
  public sair2 : boolean = true
  public image : string = 'none'
  public visibilityHidden : string = ''
  public porta : string = ''
  public seta : string = 'hidden'
  public tamanhoElevador : string = '300px'
  public tamanhoUsuario : string = '200px'

  public subir(){
    if (this.botaoCondition){
      this.image='url(../../assets/images/usuario.png)'
      this.visibilityHidden = 'hidden';
      this.porta = 'rotate(180deg)'
      this.botaoCondition = false
      this.seta = ''
    }
  }

  public sair(){
    if(this.sair2){
      this.visibilityHidden = '';
      this.image=''
      this.seta = 'hidden'
    }
  }
  public descer(){
    if (!this.botaoCondition){
      this.porta=''
      this.botaoCondition = true
      this.seta = ''
    }
  }
}
