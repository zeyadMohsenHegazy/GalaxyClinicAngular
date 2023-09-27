export interface ShiftsResponse {
    DoctorShiftCode : number,
    Availble_Days : string,
    Doctor_Name: string,
    FromDate: Date,
    ToDate : Date,
    FromTime : Date,
    ToTime : Date,
    shiftTitle: string,
    sessionDuration : number,
}
