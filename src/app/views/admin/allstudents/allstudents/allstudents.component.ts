import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStudentsService } from 'src/app/views/services/data-students.service';

@Component({
  selector: 'app-allstudents',
  templateUrl: './allstudents.component.html',
  styleUrls: ['./allstudents.component.css']
})
export class AllstudentsComponent implements OnInit {
dataArray:any=[]

dataStudent={
  firstName:'',
  lastName:'',
  email:'',
  age:0,
  phone:0,
  id:'',
}

messageSuccess=''
messageError:any

  constructor(private dataS:DataStudentsService , private route:Router) {
    this.dataS.getAllStudents().subscribe(data=>
      {this.dataArray=data}
      )
  }


  ngOnInit(): void {
  }

  delete(id:any,i:number){

    this.dataS.deleteStudent(id).subscribe(response=>{
     
       this.dataArray.splice(i,1)

    })

  }



  getdata(firstName:string,lastName:string,age:number,phone:number,email:string,id:any){
    this.messageSuccess=''
    this.dataStudent.firstName=firstName
    this.dataStudent.lastName=lastName
    this.dataStudent.age=age
    this.dataStudent.phone=phone
    this.dataStudent.email=email
    this.dataStudent.id=id
    console.log(this.dataStudent)

  }


  update(f:any){
    let data=f.value
    this.dataS.updateStudent(this.dataStudent.id,data).subscribe(response=>
      {
    
        let indexId=this.dataArray.findIndex((obj:any)=>obj._id==this.dataStudent.id)

        this.dataArray[indexId].firstName=data.firstName
        this.dataArray[indexId].lastName=data.lastName
        this.dataArray[indexId].email=data.email
        this.dataArray[indexId].age=data.age
        this.dataArray[indexId].phone=data.phone
        


        this.messageSuccess=`this student ${this.dataArray[indexId].firstName} is updated`


      },(err:HttpErrorResponse)=>{
        this.messageError=" -_- "+err.error.Error})
      
      
  }


      details(id:any){
        this.route.navigate(['/admin/studentdetails/'+id])
      }
}
