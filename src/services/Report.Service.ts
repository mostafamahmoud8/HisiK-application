import { HttpClient,HttpHeaders } from '@angular/common/http';

import { Injectable} from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

const endpoint = '';
@Injectable()
export class ReportService {
    constructor(private http:HttpClient){

    }
    SendReport(report){
        const headers = new HttpHeaders({'Contant-Type':'application/json'});
        return this.http.post(endpoint,report,{headers:headers});
    }

    RetriveReport(report){
        const headers = new HttpHeaders({'Contant-Type':'application/json'});
        return this.http.get(endpoint,{headers:headers});  

    }

}

