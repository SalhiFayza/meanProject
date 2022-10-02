import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataStudentsService } from 'src/app/views/services/data-students.service';

@Component({
  selector: 'app-detailsstudent',
  templateUrl: './detailsstudent.component.html',
  styleUrls: ['./detailsstudent.component.css']
})
export class DetailsstudentComponent implements OnInit {
  id:any
  dataStudent:any
  constructor(private aroute:ActivatedRoute,private dataS:DataStudentsService) { 
    this.aroute.params.subscribe(data=>this.id=data['id'])
  
  }

  ngOnInit(): void {
    this.dataS.getOnestudent(this.id).subscribe(data=>{
          this.dataStudent=data})

  }

}
