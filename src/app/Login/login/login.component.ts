import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/modelos/user';
import { LoginService } from 'src/app/servicios/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  loading=false;

  constructor(private fb: FormBuilder,private _snackBar:MatSnackBar,
    private router:Router,private loginService:LoginService) { 
    this.form=this.fb.group({
      usuario:['',Validators.required],
      password:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  ingresar():void{
    const usuario:User={
      Username: this.form.value.usuario,
      Password: this.form.value.password,
      App:10
    };
    this.loading=true;
    if(usuario.Username=='DEMO101' && usuario.Password=='DEMO101'){
      this.fakeloading();
    }else{
      this._snackBar.open('Usuario o contraseña ingresado son invalidos','',{
             duration:5000,
            horizontalPosition:'center',
             verticalPosition:'bottom'
           });
           this.loading=false;
    }
    // this.loginService.login(usuario).subscribe(data=>{
    //   console.log('entro');
    //   console.log(data +'prueba');
    //   this.loading=false;
    // }, error=>{
    //   this._snackBar.open('Usuario o contraseña ingresado son invalidos','',{
    //     duration:5000,
    //     horizontalPosition:'center',
    //     verticalPosition:'bottom'
    //   });
    //   this.loading=false;
    // })
  }


  fakeloading(){
    this.loading=true;
    setTimeout(() => {
      this.loading=false;
      this.router.navigate(['home']);
    }, 1500);
  }
}
