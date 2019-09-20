
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-cadastrofuncionario',
  templateUrl: './cadastrofuncionario.component.html',
  styleUrls: ['./cadastrofuncionario.component.scss']
})
export class CadastrofuncionarioComponent implements OnInit {

  form: FormGroup = new FormGroup({
    nome: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    genero: new FormControl(null, [Validators.required]),
    dataNascimento: new FormControl(null, [Validators.required]),
    endereco: new FormControl(null, [Validators.required]),
    identidade: new FormControl(null, [Validators.required]),
    cpf: new FormControl(null, [Validators.required]),
    dataContratacao: new FormControl(null, [Validators.required]),
    telefone: new FormControl(null, [Validators.required])
  });

  dados: any[] = [];
  constructor() {}

  ngOnInit() {
  }

  cadastro() {
    this.dados.push({
      nome: this.form.get('nome').value,
      email: this.form.get('email').value,
      genero: this.form.get('genero').value,
      dataNascimento: this.form.get('dataNascimento').value,
      endereco: this.form.get('endereco').value,
      identidade: this.form.get('identidade').value,
      cpf: this.form.get('cpf').value,
      dataContratacao: this.form.get('dataContratacao').value,
      telefone: this.form.get('telefone').value
    });
  }

}



