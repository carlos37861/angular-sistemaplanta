import {LiveAnnouncer} from '@angular/cdk/a11y';
import { AfterViewInit,Component, OnInit , ViewChild } from '@angular/core';
import { MatTableDataSource ,} from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import swal from'sweetalert2';
import { ApiService } from 'src/app/servicios/api/api.service';
import { PruebaI } from 'src/app/modelos/prueba.interface';
import {MatSort,Sort} from '@angular/material/sort';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {


  //prueba con api publica
  objeto:PruebaI[]=[];
  displayedColumns: string[] = ['userId', 'id', 'title', 'body','acciones'];
  dataSource:any;

  constructor(private toastr: ToastrService,private api:ApiService,private _liveAnnouncer: LiveAnnouncer) { }

  @ViewChild(MatSort) sort: MatSort | undefined;


 /** Announce the change in sort state for assistive technology. */
 announceSortChange(sortState: Sort) {
  if (sortState.direction) {
    this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
  } else {
    this._liveAnnouncer.announce('Sorting cleared'); 
  }
}

  ngOnInit(): void {
    this.api.getAllPrueba().subscribe(data=>{
      this.dataSource = new MatTableDataSource<PruebaI>(data);
      this.dataSource.sort = this.sort;
    })
  }
  prueba(){
    this.toastr.success('success','Se registro bien')
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
