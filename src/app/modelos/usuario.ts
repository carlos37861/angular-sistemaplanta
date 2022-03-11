import { Empresa } from "./empresa";
import { Rol } from "./rol";
import { Ruta } from "./ruta";

export class Usuario{
   
    UserMenuApp:Array<Ruta> | undefined; 
    V_EST:string | undefined;
    V_FLAG:string| undefined;
    N_IDARE:number| undefined;
    N_CODSEDE:number| undefined;
    V_TPUSER:string| undefined;
    N_ACCESSFAIL:number| undefined;
    UserRolesApp:Rol[]|undefined;
    D_LASTUP:Date| undefined;
    V_EMAILCONFIRMED:string| undefined;
    V_EMAIL:string| undefined;
    V_CEL:string| undefined;
    V_LASTNAME:string| undefined;
    V_FIRSTNAME:string| undefined;
    V_PASS:string| undefined;
    V_LOGIN:string| undefined;
    D_SINCE:Date| undefined;
    UserEmpresas:Empresa[]|undefined;

}