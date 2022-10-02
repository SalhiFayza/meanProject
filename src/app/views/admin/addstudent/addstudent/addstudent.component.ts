import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStudentsService } from 'src/app/views/services/data-students.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
messageErr=""
  constructor(private ds:DataStudentsService, private route:Router) { }

  ngOnInit(): void {
  }
  add(f:any){
    let data=f.value
    
    this.ds.addStudent(data).subscribe(response=>{
    

      this.route.navigate(['/admin/allstudents'])

    },(err:HttpErrorResponse)=>{
      this.messageErr=" -_- "+err.error.Error}
    )
  }
}
