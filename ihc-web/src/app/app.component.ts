import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private readonly titulo: string = 'Dança IHC';

  constructor(private titleService: Title) {
    this.setTitle(this.titulo);
  }

  public setTitle(titulo: string): void {
    this.titleService.setTitle(titulo);
  }
}
