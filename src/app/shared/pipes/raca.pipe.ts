import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'raca' })
export class RacaPipe implements PipeTransform {

    transform(raca: string): string {

        if(raca === 'PT'){
            return 'PRETA'
        }if(raca === 'PR'){
            return 'PARDA'
        }
        if(raca == 'BR'){
            return 'BRANCA'
        }
        if(raca == 'AM'){
            return 'AMARELA'
        }
        if(raca == 'IN'){
            return 'INDÍGENA'
        }
        return raca
    }
}