
document.getElementById('cepForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const cep = document.getElementById('cep').value.replace(/\D/g, '');
  const infoDiv = document.getElementById('info');
  const mapaDiv = document.getElementById('mapa');

  if (!cep) return;

  try {
    const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await res.json();

    if (data.erro) {
      infoDiv.innerHTML = `<p style="color:red;">CEP não encontrado.</p>`;
      return;
    }

    // Mostrar dados do endereço
    infoDiv.innerHTML = `
      <p><strong>Rua:</strong> ${data.logradouro || 'N/A'}</p>
      <p><strong>Bairro:</strong> ${data.bairro || 'N/A'}</p>
      <p><strong>Cidade:</strong> ${data.localidade} - ${data.uf}</p>
    `;

    // Simular imagem de alagamento ou não
    const imagens = [
      'Alagado', // você coloca o caminho da imagem real
      'Sem alagamento'
    ];
    const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];

    mapaDiv.innerHTML = `
      <h3 id="resultado-busca"> ${imagemAleatoria}</h3>
    `;

  } catch (error) {
    infoDiv.innerHTML = `<p style="color:red;">Erro ao buscar o CEP.</p>`;
    console.error(error);
  }
});



