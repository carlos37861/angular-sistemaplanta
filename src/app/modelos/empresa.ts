import { Byte } from "@angular/compiler/src/util";
import { AgenciaSunat } from "./agenciasunat";
import { Sucursal } from "./sucursal";

export class Empresa{
    constructor(
    public N_CODEMP:number,
    V_RUCEMP:string,
    V_RAZEMP:string,
    V_NEMOEMP:string,
    V_DIREMP:string,
    V_MAILEMP:string,
    V_EST:string,
    //B_LOGO:Byte: any;
    V_AGERET:string,
    V_EMIELEC:string,
    Sucursales: Sucursal[],
    AgenciasRegistradas: AgenciaSunat[]
){}

}