function mostrarHinos() {
  const categoria = document.getElementById('categoria').value;
  const listaHinos = document.getElementById('lista-hinos');
  const titulo = document.getElementById('titulo');
  const hinos = document.getElementById('hinos');

  // Limpa a lista anterior
  hinos.innerHTML = '';

  if (categoria === 'harpa') {
    titulo.textContent = 'Hinos do Hinário Novo';
    // Aqui define-se um array com os objetos contendo o nome do hino e o arquivo destino
    const hinosNovo = [
      {
        nome: '149 - Fá - (A FACE ADORADA DE JESUS)',
        arquivo: '../Hinos do Hinário Novo/GHN149.html',
      },
      {
        nome: '151- Mi - (NA JERUSALÉM DE DEUS)',
        arquivo: '../Hinos do Hinário Novo/GHN149.html',
      },
      {
        nome: '153 - Dó - (NA ROCHA ETERNA FIRMADO)',
        arquivo: '../Hinos do Hinário Novo/GHN149.html',
      },
      {
        nome: '154 - Fá - (SÊ VALENTE)',
        arquivo: '../Hinos do Hinário Novo/GHN149.html',
      },
    ];

    hinosNovo.forEach((hino) => {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.textContent = hino.nome;
      link.href = hino.arquivo; // caminho para o outro arquivo HTML
      li.appendChild(link);
      hinos.appendChild(li);
    });

    listaHinos.style.display = 'block';
  } else if (categoria === 'cantor') {
    titulo.textContent = 'Hinos do Hinário Antigo';
    const hinosAntigo = [
      { nome: 'Hino A', arquivo: 'hinoA.html' },
      { nome: 'Hino B', arquivo: 'hinoB.html' },
      { nome: 'Hino C', arquivo: 'hinoC.html' },
    ];

    hinosAntigo.forEach((hino) => {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.textContent = hino.nome;
      link.href = hino.arquivo;
      li.appendChild(link);
      hinos.appendChild(li);
    });

    listaHinos.style.display = 'block';
  } else if (categoria === 'salmos') {
    titulo.textContent = 'Hinos de Salmos e Hinos';
    const hinosSalmos = [
      { nome: 'Hino X', arquivo: 'hinoX.html' },
      { nome: 'Hino Y', arquivo: 'hinoY.html' },
      { nome: 'Hino Z', arquivo: 'hinoZ.html' },
    ];

    hinosSalmos.forEach((hino) => {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.textContent = hino.nome;
      link.href = hino.arquivo;
      li.appendChild(link);
      hinos.appendChild(li);
    });

    listaHinos.style.display = 'block';
  } else {
    listaHinos.style.display = 'none';
  }
}
