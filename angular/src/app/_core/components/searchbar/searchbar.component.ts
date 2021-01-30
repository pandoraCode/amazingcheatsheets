import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { UploadSheetService } from '../../services/upload/upload-sheet.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router, private sheet:UploadSheetService) { }


    public Sheets;
  ngOnInit(): void {

  ;

 this.sheet.getSheet().subscribe((data)=>{
      this.Sheets = data;
    }) ;
  }

  
 // get sheetCollection(){ return this.Sheets};





}
