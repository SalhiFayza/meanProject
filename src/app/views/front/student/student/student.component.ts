import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStudentsService } from 'src/app/views/services/data-students.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
dataStudent:any
  constructor(private dataS:DataStudentsService,private route:Router) {
    this.dataS.getAllStudents().subscribe(data=>
     // console.log(data)
     this.dataStudent=data
      )
   }

  ngOnInit(): void {
  }

  detailsS(id:any){
    this.route.navigate(['/student/'+id])
  }


}
