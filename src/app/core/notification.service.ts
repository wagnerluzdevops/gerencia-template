import {Injectable} from "@angular/core";
import {ToastrService} from 'ngx-toastr';

@Injectable({   providedIn: 'root' })
export class NotificationService {

    constructor(private toastr: ToastrService) {

    }
    showSuccess(message: string):void{
        this.toastr.success(null, message, {
            timeOut: 4000,
            progressBar: true,
            positionClass: 'toast-top-center'
        });
    }
    showWarning(message: string):void {
        this.toastr.warning(null, message, {
            timeOut: 6000,
            progressBar: true,
            positionClass: 'toast-top-center'
        });
    }
    showInfo(message:string):void {
        this.toastr.info(null, message, {
            timeOut: 9000,
            progressBar: true,
            positionClass: 'toast-top-center'
        });
    }
    showError(error: any): void {
        // const titulo = ' Código de Erro: ' + error;
        const titulo = ' Código de Erro: ' + error;
        // this.toastr.error(error.errors, titulo, {   
        this.toastr.error(error.error_description, titulo, {
            timeOut: 9000,
            progressBar: true,
            positionClass: 'toast-top-center'
        });
    }
    showErrorLogin(message: string): void {
        this.toastr.error(null, message, {
            timeOut: 4000,
            progressBar: true,
            positionClass: 'toast-top-center'
        });
    }
    showMultipleErros(erros){
        console.log(erros);
        for(let i = 0; i < erros.error.errors.length; i++){
            this.toastr.error(erros.error.errors[i], erros.error.message, {
                timeOut: 9000,
                progressBar: true,
                positionClass: 'toast-top-center'
            });
        }
    }
}