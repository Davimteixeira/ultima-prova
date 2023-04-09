import { Component } from '@angular/core';

@Component({
  selector: 'app-quadrado',
  templateUrl: './quadrado.component.html',
  styleUrls: ['./quadrado.component.css']
})
export class QuadradoComponent {
  public cor: string = ''
  public cor2: string = ''
  public cor3: string = ''
  public cor4: string = ''

  public oneClick(){
    this.cor = 'Blue'
  }
  public oneClick2(){
    this.cor2 = 'Yellow'
  }
  public oneClick3(){
    this.cor3 = 'Orange'
  }
  public oneClick4(){
    this.cor4 = 'Purple'
  }

}
