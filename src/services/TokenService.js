export default class SigninService {
  static save(token, email) {
    const nickName = email.split('@');
    localStorage.setItem('token', token);
    localStorage.setItem('nickName', nickName)
  }

  static tokenGet() {
    return localStorage.getItem('token')
  }
  static nickNameGet() {
    return localStorage.getItem('nickName')
  }
}
