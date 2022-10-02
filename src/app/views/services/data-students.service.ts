import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStudentsService {
token:any=localStorage.getItem('token')

//heraderAdmin
headerAdmin= new HttpHeaders()
.set('authorization',this.token)
.set('role','Admin')

//headerAll
headerAll= new HttpHeaders()
.set('authorization',this.token)

//
paramas=new HttpParams().set('secret','DevOps1994salhi').set('client','1994fayza2022@')
  constructor(private http:HttpClient) { }


  getAllStudents(){
    return this.http.get('http://localhost:3306/students',{headers:this.headerAll,params:this.paramas})
    }

  addStudent(profil:any){
    return this.http.post('http://localhost:3306/addstudent',profil,{headers:this.headerAdmin,params:this.paramas})
    }

  deleteStudent(id:any){
    return this.http.delete('http://localhost:3306/student/'+id,{headers:this.headerAdmin,params:this.paramas})
    }

  updateStudent(id:string,newprofil:any){
    return this.http.patch('http://localhost:3306/student/'+id,newprofil,{headers:this.headerAdmin,params:this.paramas})        
    }

  getOnestudent(id:any){
    return this.http.get('http://localhost:3306/student/'+id,{headers:this.headerAll,params:this.paramas})
    }
}
