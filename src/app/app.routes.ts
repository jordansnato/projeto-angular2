import { Routes } from '@angular/router';
import { Navegation } from './components/navegation/navegation';
import { PropBinding } from './feats/prop-binding/prop-binding';
import { Home } from './feats/home/home';
import { TwoBildingText } from './feats/two-bilding-text/two-bilding-text';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'navegation', component:Navegation},
    {path:'prop-binding', component:PropBinding},
    {path:'input', component: TwoBildingText},
    {path:'home', component:Home}
];
