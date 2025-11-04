import { Component } from '@angular/core';

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

  constructor(){
    log('constructor llamado');
  }
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


}
