

function sendMail(e) {

    e.preventDefault()

    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }

    const serviceID = "service_90aqxkt"
    const templateID = "template_6r7a0xh"
    const publicKey = "Q12qSJRV7vP2oL3E-"

    emailjs.send(serviceID, templateID, params, publicKey).then(
        res => {
            document.getElementById("name").value = ""
            document.getElementById("email").value = ""
            document.getElementById("message").value = ""
            console.log(res)
            alert("Message sent successfully")
        }
    )
        .catch(err => console.log(err))
}

