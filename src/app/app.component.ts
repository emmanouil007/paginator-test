import { Component, OnInit } from '@angular/core';
import { Patient } from './model/Patient';
import { PatientServiceService } from './services/patient-service.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'paginator-test';

  totalItems: number = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  currentPageIndex = 0;
  displayedItems: MatTableDataSource<Patient> = new MatTableDataSource();
  displayedColumns: string [] = ["id", "firstName", "lastName", "dateOfBirth"]
  constructor(private service: PatientServiceService){}

  originalData: MatTableDataSource<Patient> = new MatTableDataSource<Patient>();

  ngOnInit(): void {

    /*
    Here you use a service to get the data and slice the first elements of the array according to the pageSize
    Keeps also a copy of the original array
    When you slice you take from the original array and you put the items to the displayedItems array which 
    must be bound to the datasource of your template(html)
    */
    this.service.getPatientData().then(response => {
      this.originalData.data = response;
      this.totalItems = response.length;
      this.displayedItems.data = this.originalData.data.slice(0, this.pageSize);
    });
  }

  /*
  This event is called whenever you change page or page size
   */
  onPageChange(event: any): void {
    this.pageSize = event.pageSize; // <-- Make sure this line is present
    this.currentPageIndex = event.pageIndex;

    const startIndex = this.currentPageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedItems.data = this.originalData.data.slice(startIndex, endIndex);
  }
  
}
