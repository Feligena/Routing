import { Routes } from '@angular/router';
import { RedGradientComponent } from './components/red-gradient/red-gradient.component';
import { GreenGradientComponent } from './components/green-gradient/green-gradient.component';
import { BlueGradientComponent } from './components/blue-gradient/blue-gradient.component';
import { YellowGradientComponent } from './components/yellow-gradient/yellow-gradient.component';
import { NotFoundError } from 'rxjs';

export const routes: Routes = [
    {path: "", component: RedGradientComponent},
    {path: "green", component: GreenGradientComponent},
    {path: "blue", component: BlueGradientComponent},
    {path: "yellow", component: YellowGradientComponent},
    {path: "**", component: NotFoundError, redirectTo: ""}
];
