document.getElementById('formulario').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const dados = {
      nome: this.nome.value,
      email: this.email.value,
      materias_preferidas: this.materias_preferidas.value,
      dificuldades: Array.from(document.querySelectorAll('input[name="dificuldades"]:checked')).map(cb => cb.value),
      preferencia_estudo: this.preferencia_estudo.value,
      consentimento: this.consentimento.checked
    };
  
    if (!dados.consentimento) {
      alert('Você precisa aceitar os termos de privacidade.');
      return;
    }
  
    // Salvar no localStorage
    let alunos = JSON.parse(localStorage.getItem('alunos')) || [];
    alunos.push(dados);
    localStorage.setItem('alunos', JSON.stringify(alunos));
  
    alert('Dados salvos com sucesso!');
    this.reset();
  });
  
  document.getElementById('verDados').addEventListener('click', () => {
    const container = document.getElementById('dadosSalvos');
    const alunos = JSON.parse(localStorage.getItem('alunos')) || [];
  
    if (alunos.length === 0) {
      container.innerHTML = '<p>Nenhum dado salvo.</p>';
      return;
    }
  
    container.innerHTML = alunos.map((aluno, i) => `
      <div>
        <h3>Aluno ${i + 1}</h3>
        <p><strong>Nome:</strong> ${aluno.nome}</p>
        <p><strong>Email:</strong> ${aluno.email}</p>
        <p><strong>Matérias preferidas:</strong> ${aluno.materias_preferidas}</p>
        <p><strong>Dificuldades:</strong> ${aluno.dificuldades}</p>
        <p><strong>Estudo:</strong> ${aluno.preferencia_estudo}</p>
      </div>
      <hr>
    `).join('');
  });
  