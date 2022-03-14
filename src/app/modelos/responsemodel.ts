import { PruebaI } from "./prueba.interface";

export class ResponseModel{
    success!:boolean;
    result!: PruebaI[];
    errorMessage!:string;
    RepeatOption!:boolean;
    MethodToRepeat!: string;
}

