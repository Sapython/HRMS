import { Injectable } from '@angular/core';
@Injectable()
export class DataProvider {
    public data: any;
    public signUpButton:boolean=false;
    public verifyEmail:boolean=false;
    public constructor() { }
}