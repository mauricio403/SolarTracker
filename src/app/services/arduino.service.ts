import { Global } from './global';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ArduinoService {

    public url: string;

    constructor(
        private _http: HttpClient
    ) {
        this.url = Global.url;
    }


    getDatosArduino(): Observable<any> {
        return this._http.get(this.url + '/data');
    }
}