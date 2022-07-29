export class User{
    id?:number;
    name:String;
    jobPosition:String;
    photoUrl:String;
    personalProfile:String;
    phoneNumber:String;
    email:String;
    birthDate:String;
    linkedInUrl:String;
    gitHubUrl:String;
    location:String;

    
    constructor(name:String="", jobPosition:String="",
                photoUrl:String="", personalProfile:String="",
                phoneNumber:String="", email:String="", 
                birthDate:String="", linkedInUrl:String="",
                gitHubUrl:String="", location:String=""){
        this.name = name;
        this.jobPosition = jobPosition;
        this.photoUrl = photoUrl;
        this.personalProfile = personalProfile;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.birthDate = birthDate;
        this.linkedInUrl = linkedInUrl;
        this.gitHubUrl = gitHubUrl;
        this.location = location;
    }
}