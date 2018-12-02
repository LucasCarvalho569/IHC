
import { Component, OnInit } from '@angular/core';
import { TextoUtils } from '../Utils/texto.utils';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public textoForro: string = TextoUtils.textoForro.substring(0,200) + '...';
    public textoBreak: string = TextoUtils.textoBreak.substring(0,200) + '...';
    public textoBallet: string = TextoUtils.textoBallet.substring(0,200) + '...';
    public textoCarlton: string = TextoUtils.textoCarlton.substring(0,200) + '...';

    constructor(private router: Router) { }

    public ngOnInit(): void { }

    public visitarPagina(pagina: string): void {
        this.router.navigateByUrl(pagina);
    }
}
