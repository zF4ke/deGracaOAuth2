const authenticationInput = document.getElementById('authenticationInput')
const homeInput = document.getElementById('homeInput')

authenticationInput.setAttribute("href","/auth/logout")
authenticationInput.innerHTML = "Sair&nbsp&nbsp"

homeInput.setAttribute("href","/")
