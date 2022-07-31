export class NewUser {
    name:String
    email:String
    password:String
    authorities:String[]


  constructor(
    name: String, 
    email: String, 
    password: String, 
    authorities: String[]
    ) {
    this.name = name
    this.email = email
    this.password = password
    this.authorities = authorities
  }
}
