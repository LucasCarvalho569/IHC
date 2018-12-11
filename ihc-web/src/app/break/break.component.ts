import { TextoUtils } from './../Utils/texto.utils';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-break',
    templateUrl: './break.component.html',
    styleUrls: ['./break.component.scss']
})
export class BreakComponent implements OnInit {
    public textoBreak = TextoUtils.textoBreak;

    constructor(private router: Router) { }

    public ngOnInit(): void { } 

    public visitarPagina(pagina: string): void {
        this.router.navigateByUrl(pagina);
    }
}
