import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'cep' })
export class CepPipe implements PipeTransform {
    
    
    transform(cep: string): string {
        if(cep){
            return cep.replace(/(\d{5})(\d{2})/g, "\$1-\$2")
        }
        return cep
    }
}