import { TextoUtils } from './../Utils/texto.utils';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ballet',
    templateUrl: './ballet.component.html',
    styleUrls: ['./ballet.component.scss']
})
export class BalletComponent implements OnInit {
    public textoBallet = TextoUtils.textoBallet;

    constructor(private router: Router) { }

    public ngOnInit(): void { }  

    public visitarPagina(pagina: string): void {
        this.router.navigateByUrl(pagina);
    }
}
