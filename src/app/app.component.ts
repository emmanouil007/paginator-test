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
    this.service.getPatientData().then(response => {
      this.originalData.data = response;
      this.totalItems = response.length;
      this.displayedItems.data = this.originalData.data.slice(0, this.pageSize);
    });
  }

  onPageChange(event: any): void {
    this.pageSize = event.pageSize; // <-- Make sure this line is present
  this.currentPageIndex = event.pageIndex;

  const startIndex = this.currentPageIndex * this.pageSize;
  const endIndex = startIndex + this.pageSize;
  this.displayedItems.data = this.originalData.data.slice(startIndex, endIndex);
  }
  
}
