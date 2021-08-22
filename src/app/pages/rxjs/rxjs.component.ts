import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent {

  constructor() {
    //   let i = -1;

    //   const obs$ = new Observable(observer => {

    //     const intervalo = setInterval(() => {

    //       i++;
    //       observer.next(i);

    //       if (i === 3) {
    //         clearInterval(intervalo);
    //         observer.complete();
    //       }

    //       if (i == 2) {
    //         i = 0;
    //         observer.error('i llego al valor deseado')
    //       }

    //     }, 1000)

    //   });

    //   obs$.pipe(retry(1)).subscribe(
    //     valor => console.log('Subs:', valor),
    //     (err) => console.warn('Error:', err),
    //     () => console.info('observable finished')
    //   );
  }


}
