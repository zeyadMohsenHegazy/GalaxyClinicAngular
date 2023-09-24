import { GeneralUserInfo } from "./general-user-info";

export interface PatientUserInfo extends GeneralUserInfo{
    pateintName : string,
    patientMobileNumber : string,
    patientEmail : string,
    patientDateOfBirth : Date
}
