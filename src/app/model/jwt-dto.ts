export class JwtDTO {
    token:string
    type:string
    userName:string
    roles:string[]

  constructor(
    token: string, 
    type: string, 
    userName: string, 
    roles: string[]
) {
    this.token = token
    this.type = type
    this.userName = userName
    this.roles = roles
  }

}
