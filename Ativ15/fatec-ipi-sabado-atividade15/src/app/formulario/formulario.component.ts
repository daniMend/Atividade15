import { Component} from '@angular/core';
import { Pessoa } from '../model/pessoa';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{

  constructor() { }

  cursos = ['Análise e Desenvolvimento de Sistemas', 'Gestão Comercial', 'Eventos', 'Recursos Humanos'];

  pessoa: Pessoa = new Pessoa();

  salvar(pessoaForm) {    
    this.pessoa.nome = pessoaForm.value.nome;
    this.pessoa.idade = pessoaForm.value.idade;
    this.pessoa.curso = pessoaForm.value.curso;    console.log(this.pessoa);  }

}
