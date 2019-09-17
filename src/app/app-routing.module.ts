

import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CadastrofuncionarioComponent } from './cadastrofuncionario/cadastrofuncionario.component';
import { FormularioComponent } from './aluno/formulario/formulario.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';


const routes: Routes = [
  { path: '', component: PaginaInicialComponent },
  { path: 'cadastrofuncionario', component: CadastrofuncionarioComponent },
  { path: 'aluno', component: FormularioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
