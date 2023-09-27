import { ShiftDayTimeResponse } from "./shift-day-time-response";

export interface ShiftDayResponse {
    shiftDayCode : number,
    dayWeek : string,
    shiftDay : Date,
    sessionTimes : ShiftDayTimeResponse[]
}
