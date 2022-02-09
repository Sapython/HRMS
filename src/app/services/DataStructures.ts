
export interface PresentToday{
    day:string,
    present:boolean,
    arriveTime:string,
    departTime:string,
}

export interface access{
    accessLevel:'Admin'| 'Manager' | 'Employee' | 'Unregistered',
    teamAccess?:Array<String>[];
}

export interface User {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
    isAdmin:boolean;
    data:[];
    post:string,
    firstLogin:string,
    access:access,
    totalProjects:number,
    leaveTaken:number,
    completedProjects:number,
    presentToday:string,//format with 1 or 0 as present or absent, and then date in YYYY-MM-DD format. Eg: 0-2021-04-23
    presenceTable?:Map<String,PresentToday>[];
}




