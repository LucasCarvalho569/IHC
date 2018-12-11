import { TextoUtils } from './../Utils/texto.utils';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-animacao',
    templateUrl: './animacao.component.html',
    styleUrls: ['./animacao.component.scss']
})
export class AnimacaoComponent implements OnInit {

    constructor(private router: Router) { }

    public ngOnInit(): void { } 

    public visitarPagina(pagina: string): void {
        this.router.navigateByUrl(pagina);
    }
}
