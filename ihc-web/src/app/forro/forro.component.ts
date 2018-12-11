import { TextoUtils } from './../Utils/texto.utils';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-forro',
    templateUrl: './forro.component.html',
    styleUrls: ['./forro.component.scss']
})
export class ForroComponent implements OnInit {
    public textoForro = TextoUtils.textoForro;

    constructor(private router: Router) { }

    public ngOnInit(): void { } 

    public visitarPagina(pagina: string): void {
        this.router.navigateByUrl(pagina);
    }
}
