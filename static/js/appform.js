function register_user(){
    let nombre = document.getElementById("name").value
    let apellido = document.getElementById("last name").value
    let cedula = document.getElementById("id").value
    let telefono = document.getElementById("telephone").value
    let fecha = document.getElementById("date").value
    let email = document.getElementById("email").value
    let contrasena = document.getElementById("passw").value

    document.write(nombre + "<br>" + apellido + "<br>" + cedula + "<br>" + telefono + "<br>" 
    + fecha + "<br>" + email + "<br>" + contrasena)
}