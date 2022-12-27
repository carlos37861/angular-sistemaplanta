import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { PruebaI } from 'src/app/modelos/prueba.interface';
import { Repositorio } from 'src/app/modelos/repositorio';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-cambios',
  templateUrl: './cambios.component.html',
  styleUrls: ['./cambios.component.css']
})
export class CambiosComponent implements OnInit {
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  //prueba con api publica
  objeto:PruebaI[]=[];
  displayedColumns: string[] = ['Codigo', 'Abreviatura', 'Descripcion', 'Usuario','fechareg','acciones'];
  dataSource:any;
  constructor(private toastr: ToastrService,private api:ApiService,private _liveAnnouncer: LiveAnnouncer) { 

  }
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
      this.objeto=data.result;
      this.dataSource = new MatTableDataSource<Repositorio>(this.objeto);

      this.dataSource.sort = this.sort;
    },err => {
      console.log(err.message);
    });
  }
  prueba(){
    this.toastr.success('success','Se registro bien')
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
