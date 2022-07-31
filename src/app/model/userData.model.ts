export class UserData {
  id?: number;
  userName: string;
  fullName: string;

  jobPosition: string;
  photoUrl: string;
  aboutMe: string;
  phoneNumber: string;
  email: string;
  birthDate: string;
  linkedinUrl: string;
  githubUrl: string;
  location: string;

  constructor(
    userName: string,
    fullName: string,
    jobPosition: string,
    photoUrl: string,
    aboutMe: string,
    phoneNumber: string,
    email: string,
    birthDate: string,
    linkedinUrl: string,
    githubUrl: string,
    location: string
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
