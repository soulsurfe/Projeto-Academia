import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Aluno } from '../shared/aluno';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

    formAluno: FormGroup;
  constructor() { }
  ngOnInit() {
    this.createForm(new Aluno());
  }
  createForm(aluno: Aluno) {
    this.formAluno = new FormGroup({
      nome: new FormControl(aluno.nome),
      tipo: new FormControl(aluno.tipo),
      genero: new FormControl(aluno.genero),
      dataNascimento: new FormControl(aluno.dataNascimento),
      observacao: new FormControl(aluno.observacao),
      endereco: new FormControl(aluno.endereco),
      identidade: new FormControl(aluno.identidade),
      cpf: new FormControl(aluno.cpf),
      peso: new FormControl(aluno.peso),
      altura: new FormControl(aluno.altura),
      pagamento: new FormControl(aluno.pagamento),
      telefone: new FormControl(aluno.telefone),
      email: new FormControl(aluno.email),
    });
  }
  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formAluno.value);
    // Usar o método reset para limpar os controles na tela
    this.formAluno.reset(new Aluno());
  }
}
