import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, active:boolean = true): any {
    if (active) {
      let output: string ="";
      for (let i = 0; i < value.length; i++) {
        output +="*";
      }
      return output;
    } else 
      return value;
  }

}
