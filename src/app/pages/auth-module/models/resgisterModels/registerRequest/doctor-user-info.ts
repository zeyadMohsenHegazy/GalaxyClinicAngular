import { GeneralUserInfo } from "./general-user-info";

export interface DoctorUserInfo extends GeneralUserInfo{
    doctorName: string,
    doctorMobileNumber : string,
    doctorEmail : string,
    doctorSpeciality : number
}
