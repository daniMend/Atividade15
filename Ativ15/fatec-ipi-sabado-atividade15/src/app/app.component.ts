import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  obterEstilosParaOBotao() {
    return {
      backgroundColor: '#EEE6FF',
      padding: '8px',
      width: '20%',
      border: 'none',
      'border-radius': '4px'
    }
  }

  obterClassesRodape() {
    return ['rodape']
  }
}
