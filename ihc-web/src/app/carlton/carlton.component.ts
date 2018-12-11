import { TextoUtils } from './../Utils/texto.utils';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-carlton',
    templateUrl: './carlton.component.html',
    styleUrls: ['./carlton.component.scss']
})
export class CarltonComponent implements OnInit {
    public textoCarlton = TextoUtils.textoCarlton;

    constructor(private router: Router) { } 

    public ngOnInit(): void { }  

    public visitarPagina(pagina: string): void {
        this.router.navigateByUrl(pagina);
    }
}
