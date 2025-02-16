document.getElementById("pesquisaForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;

    if (nome === "" || idade === "") {
        alert("Por favor, preencha todos os campos obrigatórios!");
        return;
    }

    alert("Formulário enviado com sucesso! Obrigado pela sua participação.");
    this.reset(); // Limpa o formulário após envio
});
