import { Service } from '@angular/core';
import { InterfaceForms } from './interface-forms';

@Service()
export class FormularioService {
    
    efetuarLogin(credenciais:InterfaceForms){
        // if(credenciais.email === 'jordan@gmail.com' && credenciais.senha === '1234'){
        //     return true;
        // }else{
        //     return false;

        // }
        return credenciais.email === 'jordan@gmail.com' && credenciais.senha === '1234'
    }
}
