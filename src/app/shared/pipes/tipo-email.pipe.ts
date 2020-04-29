import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'tipoEmail' })
export class TipoEmailPipe implements PipeTransform {
    
    transform(tipoEmail: string): string {
        if(tipoEmail){
            if(tipoEmail === 'E'){
                return 'Externo'
            }if(tipoEmail === 'I'){
                return 'Interno'
            }if(tipoEmail === 'C'){
                return 'Corporativo'
            }
        }
        return tipoEmail
    }
}
