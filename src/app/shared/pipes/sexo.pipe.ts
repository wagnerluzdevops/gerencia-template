import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'sexo' })
export class SexoPipe implements PipeTransform {
    
    transform(sexo: string): string {
        if(sexo){
            if(sexo === 'M'){
                return 'Masculino'
            }if(sexo === 'F'){
                return 'Feminino'
            }
        }
        return sexo
    }
}
