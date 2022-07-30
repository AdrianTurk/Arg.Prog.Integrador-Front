export class UserData {
  id?: number;
  userName: String;
  fullName: String;
  photoUrl: String;
  email: String;
  phoneNumber: String;
  location: String;
  aboutMe: String;

  jobPosition: String;
  birthDate: String;
  githubUrl: String;
  linkedinUrl: String;

  constructor(
    userName: String,
    fullName: String,
    photoUrl: String,
    email: String,
    phoneNumber: String,
    location: String,
    aboutMe: String,
    jobPosition: String,
    birthDate: String,
    githubUrl: String,
    linkedinUrl: String
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
