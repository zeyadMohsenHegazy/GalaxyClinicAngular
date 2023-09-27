import { ShiftDayResponse } from "./shift-day-response";

export interface ShiftsResponse {
    doctorShiftCode : number,
    availble_Days : string,
    doctor_Name: string,
    fromDate: Date,
    toDate : Date,
    fromTime : Date,
    toTime : Date,
    shiftTitle: string,
    sessionDuration : number,
    shiftDays : ShiftDayResponse[]
}
