import {app, auth} from './firebaseConfig.js'
import { getAuth, createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"

const formLogin = document.querySelector('#registroId')



formLogin.addEventListener('submit', async (e) => {
  e.preventDefault()
  const unameRegistro2 = formLogin.unameRegistro2.value
  const pswRegistro = formLogin.pswRegistro.value
  console.log(unameRegistro2, pswRegistro, auth)

  try {
    const credenciales = await createUserWithEmailAndPassword(auth, unameRegistro2, pswRegistro)
    console.log(credenciales, auth, credenciales.user)
    window.location = '/inicioSesion.html'
    console.log(user)
  } catch (error) {
    console.error('Mal')
  }
})