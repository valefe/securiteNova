import { app, auth, signInWithEmailAndPassword } from 'firebaseConfig'

window.addEventListener("load", function(){
  this.document.getElementById("btnModal").addEventListener("click", function(){
    alert("inicion iniciada, Tema seleccionado");
  })
});
const formSigin = document.querySelector('#inicioSesionId')
const btnAbrirModal = document.querySelector("#btnModal");
const modal = document.querySelector("#modal");

btnAbrirModal.addEventListener("click", ()=>{
  modal.showModal();
});

formSigin.addEventListener('submit', async (e) => {
  e.preventDefault()
  const unameInicio = formSigin.unameInicio.value
  const pswInicio = formSigin.pswInicio.value
  console.log(unameInicio, pswInicio, auth)
  try {
    const credenciales = await signInWithEmailAndPassword(auth, unameInicio, pswInicio)
    console.log(credenciales, auth, credenciales.user)
    window.location = '/index.html'
    console.log(user)
  } catch (err) {
    console.error('Mal')
    console.log(err.message)
  }
})