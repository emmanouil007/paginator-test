import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../model/Patient';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {
  private apiUrl = 'https://api.example.com/data';  // replace with your API endpoint

  constructor(private http: HttpClient) { }

  async getPatientData(): Promise<Array<Patient>>
  {
    
   // Make the service to do a HTTP GET REQUEST

    return [
      new Patient(1, 'John', 'Doe', new Date('1990-01-01'), 'Flu'),
      new Patient(2, 'Jane', 'Smith', new Date('1985-05-23'), 'Cold'),
      new Patient(3, 'Robert', 'Johnson', new Date('1978-03-15'), 'Migraine'),
      new Patient(4, 'Emily', 'Davids', new Date('2000-08-10'), 'Diabetes'),
      new Patient(5, 'Brian', 'Green', new Date('1982-11-12'), 'Hypertension'),
      new Patient(6, 'Lucy', 'Granger', new Date('1992-06-14'), 'Arthritis'),
      new Patient(7, 'Mark', 'Winters', new Date('1980-04-25'), 'Flu'),
      new Patient(8, 'Lily', 'Potter', new Date('1989-03-22'), 'Cold'),
      new Patient(9, 'Tony', 'Stark', new Date('1975-07-30'), 'Migraine'),
      new Patient(10, 'Natasha', 'Romanoff', new Date('1985-09-15'), 'Diabetes'),
      new Patient(11, 'Steve', 'Rogers', new Date('1991-12-24'), 'Hypertension'),
      new Patient(12, 'Bruce', 'Banner', new Date('1984-01-18'), 'Arthritis'),
      new Patient(13, 'Clint', 'Barton', new Date('1986-02-19'), 'Flu'),
      new Patient(14, 'Wanda', 'Maximoff', new Date('1993-05-28'), 'Cold'),
      new Patient(15, 'Pietro', 'Maximoff', new Date('1993-05-28'), 'Migraine'),
      new Patient(16, 'Thor', 'Odinson', new Date('1979-11-03'), 'Diabetes'),
      new Patient(17, 'Loki', 'Laufeyson', new Date('1980-10-02'), 'Hypertension'),
      new Patient(18, 'Sam', 'Wilson', new Date('1987-09-23'), 'Arthritis'),
      new Patient(19, 'Bucky', 'Barnes', new Date('1988-08-17'), 'Flu'),
      new Patient(20, 'Scott', 'Lang', new Date('1982-12-20'), 'Cold'),
      new Patient(21, 'Hope', 'Van Dyne', new Date('1986-07-11'), 'Migraine'),
      new Patient(22, 'Hank', 'Pym', new Date('1950-06-09'), 'Diabetes'),
      new Patient(23, 'Janet', 'Van Dyne', new Date('1955-04-27'), 'Hypertension'),
      new Patient(24, 'Peter', 'Parker', new Date('2001-08-10'), 'Arthritis'),
      new Patient(25, 'May', 'Parker', new Date('1970-09-22'), 'Flu'),
      new Patient(26, 'Ben', 'Parker', new Date('1965-02-15'), 'Cold'),
      new Patient(27, 'MJ', 'Jones', new Date('2001-10-13'), 'Migraine'),
      new Patient(28, 'Ned', 'Leeds', new Date('2001-11-14'), 'Diabetes'),
      new Patient(29, 'Stephen', 'Strange', new Date('1980-02-02'), 'Hypertension'),
      new Patient(30, 'Christine', 'Palmer', new Date('1982-03-03'), 'Arthritis'),
      new Patient(31, 'Wong', 'N/A', new Date('1975-04-04'), 'Flu'),
      new Patient(32, 'Mordo', 'N/A', new Date('1981-05-05'), 'Cold'),
      new Patient(33, 'Erik', 'Killmonger', new Date('1987-06-06'), 'Migraine'),
      new Patient(34, 'T', 'N/A', new Date('1986-07-07'), 'Diabetes'),
      new Patient(35, 'Shuri', 'N/A', new Date('2002-08-08'), 'Hypertension'),
      new Patient(36, 'Nakia', 'N/A', new Date('1985-09-09'), 'Arthritis'),
      new Patient(37, 'Okoye', 'N/A', new Date('1983-10-10'), 'Flu'),
      new Patient(38, 'Carol', 'Danvers', new Date('1979-11-11'), 'Cold'),
      new Patient(39, 'Nick', 'Fury', new Date('1960-12-12'), 'Migraine'),
      new Patient(40, 'Maria', 'Hill', new Date('1980-01-13'), 'Diabetes'),
      new Patient(41, 'Phil', 'Coulson', new Date('1970-02-14'), 'Hypertension'),
      new Patient(42, 'Daisy', 'Johnson', new Date('1988-03-15'), 'Arthritis'),
      new Patient(43, 'Melinda', 'May', new Date('1965-04-16'), 'Flu'),
      new Patient(44, 'Leo', 'Fitz', new Date('1985-05-17'), 'Cold'),
      new Patient(45, 'Jemma', 'Simmons', new Date('1986-06-18'), 'Migraine'),
      new Patient(46, 'Mack', 'Mackenzie', new Date('1975-07-19'), 'Diabetes'),
      new Patient(47, 'Elena', 'Rodriguez', new Date('1990-08-20'), 'Hypertension'),
      new Patient(48, 'Bobbie', 'Morse', new Date('1982-09-21'), 'Arthritis'),
      new Patient(49, 'Lance', 'Hunter', new Date('1981-10-22'), 'Flu'),
      new Patient(50, 'Alphonso', 'Mackenzie', new Date('1975-11-23'), 'Cold')
    ];
  }
}
