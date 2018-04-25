import { TaskClass } from './taskClass';

let  x = new TaskClass();

x.boughtPhone().then ( resp => {
      console.log(resp);

      x.showitOff().then (resp => {
          console.log(resp);
      })

})
