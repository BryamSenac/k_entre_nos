let loginGoogle = document.getElementById('login_google')
let loginApple = document.getElementById('login_apple')
let loginFacebook = document.getElementById('login_facebook')
let fecharLogin = document.getElementById('fechar_login')



export function puxarLogin(numerologin) {
    switch (numerologin) {
        case 0:
            loginGoogle.style.left = "52.5vw"
            fecharLogin.style.left = "62.5vw"
            break;
        case 1:
            loginApple.style.left = "52.5vw"
            fecharLogin.style.left = "62.5vw"
            break;
        case 2:
            loginFacebook.style.left = "52.5vw"
             fecharLogin.style.left = "62.5vw"
            break;
        case 3:
            fecharLogin.style.left = "-50vw"
            loginGoogle.style.left = "-200vw"
            loginApple.style.left = "-300vw"
            loginFacebook.style.left = "-400vw"
            break;
        default:
            break;
    }
}