import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
import { DataRequest } from '../services/types/videos';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  data: Partial<DataRequest[]>;
  constructor(private readonly serve: ListService) {}

  ngOnInit() {
    this.name();
  }

  public name() {
    this.serve.request().subscribe((data) => {
      this.data = data.data;
    });
  }
}
