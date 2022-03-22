import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vowelCaps'
})
export class VowelCapsPipe implements PipeTransform {

  transform(value: string): unknown {
   const vowel="aeiou";
   let ans="";
   for(let i = 0 ; i < value.length ; i++){
     if(vowel.indexOf(value.charAt(i)) != -1){
       console.log(value.charAt(i))
        ans+=  value.charAt(i).toString().toUpperCase();
     }else{
       ans+=value.charAt(i).toString();
     }
   }
   return ans;

     
  }

}
