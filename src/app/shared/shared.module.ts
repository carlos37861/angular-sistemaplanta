import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SiderbarComponent } from './components/siderbar/siderbar.component';
import { MatDividerModule} from '@angular/material/divider'
import { MatToolbarModule} from '@angular/material/toolbar'
import { MatIconModule} from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import{FlexLayoutModule} from '@angular/flex-layout';
import{MatMenuModule} from '@angular/material/menu';
import{MatListModule} from '@angular/material/list'
import {RouterModule} from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import  {  ToastrModule  }  from  'ngx-toastr' ;
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent, 
    SiderbarComponent,
    
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    MatTableModule,
    MatTooltipModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatSortModule,
    
    
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SiderbarComponent,
    MatTableModule,
     MatIconModule, // <-- here
     ToastrModule,
     MatTooltipModule,
     MatFormFieldModule,
     MatInputModule,
     HttpClientModule,
     MatSortModule,

     
  ]
})
export class SharedModule { }
