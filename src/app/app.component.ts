import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  page = 'recipe';

  onRecipe(data: string) {
    this.page = data;
  }

  onShopping(data: string) {
    this.page = data;
  }
}
