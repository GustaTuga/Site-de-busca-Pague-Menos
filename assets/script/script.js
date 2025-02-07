// Objetivo do script é criar um sistema que identifique o remedio e diga qual a sua posição. Ideal para iniciantes

// Carregamento de remedios por arquivo JSON
fetch('medicamentos.json')
    .then(response => response.json())
    .then(namemedical => {
        document.getElementById("meuForm").addEventListener("submit", function(event) {
            event.preventDefault();
            
            // Entrada de dados
            const nomeRemedio = document.getElementById("name").value.trim().toLowerCase()

            // Veriticação de produto disponível
        });
    })