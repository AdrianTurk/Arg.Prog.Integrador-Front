export class NewUser {
    name:String
    email:String
    password:String
    roles:String[]


  constructor(
    name: String, 
    email: String, 
    password: String, 
    roles: String[]
    ) {
    this.name = name
    this.email = email
    this.password = password
    this.roles = roles
  }
}
