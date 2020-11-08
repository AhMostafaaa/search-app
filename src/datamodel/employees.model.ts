export class employees {

    fullName_FL:string;
    hiringDate:string;
    firstContractingSalary:string;
    position: {
        name_FL:string
    };
    department: {
        id:string
        name_FL:string
    }
    employeeJobStatuses: [
        {
            id:string;
            status:string
        }
    ]
}