import { Component } from '@angular/core';
import { WhatToDo } from './what-to-do';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lists: WhatToDo [] = [
    {id:1, name:'Go to school'},
    {id:2, name: 'Come back home early'},
    {id:3, name: 'Do my assignment'},
    {id:4, name: 'Call the administration office'},
    {id:5, name: 'Get some rest'},
  ];

}
