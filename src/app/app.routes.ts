import { Routes } from '@angular/router';
import { Navegation } from './components/navegation/navegation';
import { PropBinding } from './feats/prop-binding/prop-binding';
import { Home } from './feats/home/home';
import { TwoBildingText } from './feats/two-bilding-text/two-bilding-text';
import { Signal } from './feats/signal/signal'; 
import { Usuarios } from './feats/usuarios/usuarios';
import { ExemploSignalForm } from './feats/exemplo-signal-form/exemplo-signal-form';
import { Formulario } from './feats/formulario/formulario';
import { Exercicio } from './feats/exercicio/exercicio';
import { Execicio5 } from './feats/execicio5/execicio5';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'navegation', component:Navegation},
    {path:'prop-binding', component:PropBinding},
    {path:'input', component: TwoBildingText},
    {path:'home', component:Home},
    {path:'signal', component: Signal},
    {path:'user', component:Usuarios},
    {path:'sgnalForm', component:ExemploSignalForm},
    {path:'formulario', component:Formulario},
    {path:'mediaAlunos', component:Exercicio},
    {path:'login', component:Execicio5}
];
