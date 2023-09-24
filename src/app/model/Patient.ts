export class Patient {
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;

    constructor(id: number, firstName: string, lastName: string, dateOfBirth: Date, diagnosis: string) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.dateOfBirth = dateOfBirth;
    }
  }
  