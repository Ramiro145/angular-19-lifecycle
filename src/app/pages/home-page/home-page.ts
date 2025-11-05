import { afterNextRender, Component, afterEveryRender, effect, signal } from '@angular/core';

const log = (...messages:string[]) => {
  console.log(
    `${messages[0]} %c${messages.slice(1).join(', ')} `,
    'color: #bada55'
  );

}


@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
})
export class HomePage {

  traditionalProperty = 'ramiro';
  signalProperty = signal('ramiro')


  changeTraditional(){
    this.traditionalProperty = 'Ramiro Gonzalez'
  }

  changeSignal(){
    this.signalProperty.set('Ramiro Gonzalez');
  }


  //! interface de implementacion no necesaria, pero asegura la implementacion de
  //! los eventos del ciclo de vida
  constructor(){
    log('constructor llamado');

    setTimeout(() => {
      this.signalProperty.set('Juan')
      this.traditionalProperty = 'Juan'
    }, 2000);
  }

  //? Angular 17

  basicEffect = effect((onCleanup)=>{
    log('Effect', 'Disparar efectos secundarios');



    onCleanup(()=>{
      log('onCleanUp', 'se ejecuta cuando el efecto se va a destruir')
    })
  })

  ngOnInit(){
    log('ngOnInit');
  }
  ngOnChanges(){
    log('ngOnChanges');
  }
  ngDoCheck(){
    log('ngDoCheck');
  }
  ngAfterContentInit(){
    log('ngAfterContentInit');
  }
  ngAfterContentChecked(){
    log('ngAfterContentChecked');
  }
  ngAfterViewInit(){
    log('ngAfterViewInit');
  }
  ngAfterViewChecked(){
    log('ngAfterViewChecked');
  }



  ngOnDestroy(){
    log('ngOnDestroy', '----------------------------')
  }



  afterNextRenderEffect = afterNextRender(()=>{
    log('afterNextRender')
  })

  afterEveryRender = afterEveryRender(()=>{
    log('afterEveryRender')
  })
}
