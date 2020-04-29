import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'situacao' })
export class SituacaoPipe implements PipeTransform {

    transform(situacao: string): string {

        if(situacao === 'ATIVO'){
            return 'Militar da Ativa'
        }if(situacao === 'CVL'){
            return 'Civil c/ matric. SIAPE'
        }
        if(situacao === 'CVLEXT'){
            return 'Civil s/ matric. SIAPE'
        }
        if(situacao == 'CVLINAT'){
            return 'Civil SIAPE Inativo'
        }
        if(situacao == 'EXPEN'){
            return 'Ex-Pensionista de Militar'
        }
        if(situacao == 'EXPENCVL'){
            return 'Ex-Pensionista de Militar'
        }
        if(situacao == 'INAT'){
            return 'Militar Inativo'
        }
        if(situacao == 'MILEXTFAB'){
            return 'Militar extra FAB'
        }
        if(situacao == 'PEN'){
            return 'Pensionista de Militar'
        }
        if(situacao == 'PENCVL'){
            return 'Pensionista de Civil'
        }
        if(situacao == 'PENSTM'){
            return 'Pensionista do STM'
        }
        if(situacao == 'UNIAO'){
            return 'Pensionista da UNIÃo'
        }
        return situacao
    }
}