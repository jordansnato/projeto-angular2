import { Component, signal } from '@angular/core';
import { form, FormField, max, min, required } from "@angular/forms/signals";
import { InterfaceExercicio } from './interface-exercicio';

@Component({
  selector: 'app-exercicio',
  imports: [FormField],
  templateUrl: './exercicio.html',
  styleUrl: './exercicio.css',
})
export class Exercicio {
  mostrarAluno = signal(false)
  alunos = signal<InterfaceExercicio[]>([])
  alunoModel = signal<InterfaceExercicio>({
     aluno: '',
     media: null
  })

  alunoForm = form(this.alunoModel, (s)=>{
    required(s.aluno,{message: 'O nome do aluno é obrigatório'})

    required(s.media,{message:'A média é obrigatória!!'});
    min(s.media, 0,{message:'A média não pode ser menor que 0'});
    max(s.media, 10,{message:'A média não pode ser maior que 10'})
  })

  cadastrar(event:SubmitEvent){
    event.preventDefault(); 

    const aluno = this.alunoModel()
    
    if(aluno.media !== null && aluno.media > 10){
      console.log(aluno)
      return
    }else if(aluno.media  !== null && aluno.media < 0){
      return  
    }

    this.alunos.update(item =>[...item, aluno])

    this.mostrarAluno.set(true)

    

    this.alunoModel.set({
      aluno: '',
      media: null
    })

    // reseta o touched
    this.alunoForm().reset()

    

    

  }
}
