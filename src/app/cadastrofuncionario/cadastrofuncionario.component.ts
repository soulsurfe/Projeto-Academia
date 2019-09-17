
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Cadastrofuncionario } from './shared/cadastrofuncionario';


@Component({
  selector: 'app-cadastrofuncionario',
  templateUrl: './cadastrofuncionario.component.html',
  styleUrls: ['./cadastrofuncionario.component.scss']
})
export class CadastrofuncionarioComponent implements OnInit {

  formCadastrofuncionario: FormGroup;
  constructor() { }
  ngOnInit() {
    this.createForm(new Cadastrofuncionario());
  }
  createForm(cadastrofuncionario: Cadastrofuncionario) {
    this.formCadastrofuncionario = new FormGroup({
      nome: new FormControl(cadastrofuncionario.nome),
      genero: new FormControl(cadastrofuncionario.genero),
      dataNascimento: new FormControl(cadastrofuncionario.dataNascimento),
      endereco: new FormControl(cadastrofuncionario.endereco),
      identidade: new FormControl(cadastrofuncionario.identidade),
      cpf: new FormControl(cadastrofuncionario.cpf),
      dataContratacao: new FormControl(cadastrofuncionario.dataContratacao),
      telefone: new FormControl(cadastrofuncionario.telefone),
      email: new FormControl(cadastrofuncionario.email),
    });
  }
  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formCadastrofuncionario.value);
    // Usar o método reset para limpar os controles na tela
    this.formCadastrofuncionario.reset(new Cadastrofuncionario());
  }
}

