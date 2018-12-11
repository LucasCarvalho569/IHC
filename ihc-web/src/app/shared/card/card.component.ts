
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    @Input()
    public titulo: string;

    @Input()
    public larguraCard: number = 4;

    @Input()
    public offsetCard: number = 1;

    @Input()
    public srcImagem: string;

    @Input()
    public altImagem: string;

    @Input()
    public texto: string;

    @Input()
    public hasHover = true;

    @Input()
    public srcVideo: string;

    constructor() { }

    ngOnInit(): void { }
}
