import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

export interface Section {
  name: string;
  updated: Date;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any>= new EventEmitter();
  constructor(private router:Router) { }

  ngOnInit(): void {

  }
  toggleSideBar(){
    this.toggleSideBarForMe.emit();
  }

  CerrarSesion(){
    this.router.navigate(['login']);
  }

  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    },
  ];
}


