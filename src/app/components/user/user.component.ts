import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interfaces';
import { DataApiService } from '../../services/data-api.service'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  listUser: string = 'Lista de Usuarios registrados'
  img: string = '../../../assets/blog-thumbnail-1.jpg'

  misUser: User[] = []

  constructor(private dataApiService: DataApiService) { }

  ngOnInit(): void {




  }



}
