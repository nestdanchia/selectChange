import { Component } from '@angular/core';
//https://github.com/nestdanchia/selectChange.git
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  estado!: string;
  selectedValue!: string;
  estados = [
    {
      id: 'paid',
      label: 'Pagado',
    },
    {
      id: 'toPay',
      label: 'Por pagar',
    },

  ];
  constructor() {

  }
  ngOnInit() {
    this.selectedValue = localStorage.getItem('estado') || 'default-token';
  }

  onChange(event: Event) {

    this.estado = (event.target as HTMLInputElement).value;
    localStorage.setItem('estado', this.estado);
    this.selectedValue = localStorage.getItem('estado') || 'default-token';
    console.log('this.selectedValue', this.selectedValue, localStorage.getItem('estado'))

  }
  removeItemStorage(key: string) {
    localStorage.removeItem(key);
  }

}
