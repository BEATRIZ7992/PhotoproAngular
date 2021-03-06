import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fotografo } from 'src/app/interfaces/fotografo';
import { FotografoService } from 'src/app/servicios/fotografo.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  colorHeart: any;
  idFotografo: Number;
  fotografo: Fotografo;
  favoritos: any;

  /* @ViewChild('portfolioButton') portfolioButton: ElementRef;
  ngAfterViewInit() { this.portfolioButton.nativeElement.click() } */

  constructor(
    private fotografoService: FotografoService,
    private clienteService: UsuarioService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }


  ngOnInit() {

    this.activatedRoute.params.subscribe(async params => {
      console.log(params);

      this.fotografo = await this.fotografoService.vistaById(params.fotografoId)
      console.log(params.fotografoId);


      /*  let button: HTMLElement = this.portfolioButton.nativeElement as HTMLElement;
       button.click(); */
    })



  }

  async onClick() {


    this.colorHeart = {
      color: 'red',

    }

    // this.favoritos = await this.clienteService.addFavoritos(fotografoId);
    // console.log(this.favoritos);

    if (localStorage.getItem('token_cliente')) {
      this.activatedRoute.params.subscribe(async params => {
        console.log(params);

        this.fotografo = await this.clienteService.addFavoritos(params.fotografoId)
        console.log(params.fotografoId);
        /*  let button: HTMLElement = this.portfolioButton.nativeElement as HTMLElement;
         button.click(); */
      })

      setTimeout(() => { this.router.navigate(['/cliente']) }, 3000)

    } else {
      this.router.navigate(['/registro_cliente'])
    }





  }

}
