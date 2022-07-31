export class UserData {
  id?: number;
  userName: String;
  fullName: String;
  
  jobPosition: String;
  photoUrl: String;
  aboutMe: String;
  phoneNumber: String;
  email: String;
  birthDate: String;
  linkedinUrl: String;
  githubUrl: String;
  location: String;

  constructor(
    userName: String,
    fullName: String,
    jobPosition: String,
    photoUrl: String,
    aboutMe: String,
    phoneNumber: String,
    email: String,
    birthDate: String,
    linkedinUrl: String,
    githubUrl: String,
    location: String
  ) {
    this.userName = userName;
    this.fullName = fullName;
    this.photoUrl = photoUrl;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.location = location;
    this.aboutMe = aboutMe;
    this.jobPosition = jobPosition;
    this.birthDate = birthDate;
    this.githubUrl = githubUrl;
    this.linkedinUrl = linkedinUrl;
  }
}
