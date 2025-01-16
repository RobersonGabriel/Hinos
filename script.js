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
        nome: '154 SÊ VALENTE',
        arquivo: 'Hinos do Hinário Novo/154 SÊ VALENTE.html',
      },

      {
        nome: '156 CÉU PRA MIM',
        arquivo: 'Hinos do Hinário Novo/156 CÉU PRA MIM.html',
      },

      {
        nome: '159 RESSURREIÇÃO',
        arquivo: 'Hinos do Hinário Novo/159 RESSURREIÇÃO.html',
      },

      {
        nome: '162 RICA PROMESSA',
        arquivo: 'Hinos do Hinário Novo/162 RICA PROMESSA.html',
      },

      {
        nome: '163 DEUS AMOU ESTE MUNDO',
        arquivo: 'Hinos do Hinário Novo/163 DEUS AMOU ESTE MUNDO.html',
      },

      {
        nome: '166 BREVE VEM O DIA',
        arquivo: 'Hinos do Hinário Novo/166 BREVE VEM O DIA.html',
      },

      {
        nome: '168 PELO SANGUE',
        arquivo: 'Hinos do Hinário Novo/168 PELO SANGUE.html',
      },

      {
        nome: '178 ADORAÇÃO',
        arquivo: 'Hinos do Hinário Novo/178 ADORAÇÃO.html',
      },

      
      {
        nome: '315 FONTE DIVINAL',
        arquivo: 'Hinos do Hinário Novo/315 FONTE DIVINAL.html',
      },

      
      {
        nome: '358 MEUS PECADOS LEVOU',
        arquivo: 'Hinos do Hinário Novo/358 MEUS PECADOS LEVOU.html',
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
      {
        nome: '161 NADA SEI SOBRE O FUTURO',
        arquivo: 'Hinos do Hinário Antigo/161 NADA SEI SOBRE O FUTURO.html',
      },
      {
        nome: '167 MINHA ÂNCORA',
        arquivo: 'Hinos do Hinário Antigo/167 MINHA ÂNCORA.html',
      },
      {
        nome: '168 SAUDADES DE SIÃO',
        arquivo: 'Hinos do Hinário Antigo/168 SAUDADES DE SIÃO.html',
      },
      {
        nome: '169 A FELICIDADE',
        arquivo: 'Hinos do Hinário Antigo/169 A FELICIDADE.html',
      },
      {
        nome: '172 - EU ERA UM PECADOR',
        arquivo: 'Hinos do Hinário Antigo/172 - EU ERA UM PECADOR.html',
      },
      {
        nome: '174 - MUITO ALÉM DO SOL',
        arquivo: 'Hinos do Hinário Antigo/174 - MUITO ALÉM DO SOL.html',
      },
      {
        nome: '315 - FONTE DIVINAL',
        arquivo: 'Hinos do Hinário Antigo/315 - FONTE DIVINAL.html',
      },
      {
        nome: '364 CENA DA CRUZ',
        arquivo: 'Hinos do Hinário Antigo/364 CENA DA CRUZ.html',
      },
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
