import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataStudentsService } from 'src/app/views/services/data-students.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  id=''
  dataObject:any
  messageErr=''

  constructor(private route:ActivatedRoute,private ds:DataStudentsService) {
    this.route.params.subscribe(params=>this.id=params['id'])

    this.ds.getOnestudent(this.id).subscribe(response=>
      this.dataObject=response,()=>{
      
    this.messageErr="We dont't found this student in our database (-_-)"
  }
  )
}
   
  

  ngOnInit(): void {
  }

}
