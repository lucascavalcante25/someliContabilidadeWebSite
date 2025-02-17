document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("HGFKatXCyz7Fo4OA5");
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const templateParams = {
            from_name: document.getElementById('contact_name').value,
            from_email: document.getElementById('contact_email').value,
            to_name: "Equipe Someli Contabilidade",
            message: document.getElementById('contact_message').value,
            reply_to: document.getElementById('contact_email').value
        };

        emailjs.send("service_lj261ha", "template_3l0y5ko", templateParams)
            .then(function (response) {
                alert('Mensagem enviada com sucesso!');
                document.getElementById('contact-form').reset();
            }, function (error) {
                alert('Erro ao enviar mensagem: ' + JSON.stringify(error));
            });
    });
});