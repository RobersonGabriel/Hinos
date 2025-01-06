// Mapeamento de acordes para cada tom
const harmonicFields = {
  C: ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bdim'],
  'C#': ['C#', 'D#m', 'Fm', 'F#', 'G#', 'A#m', 'Cdim'],
  D: ['D', 'Em', 'F#m', 'G', 'A', 'Bm', 'C#dim'],
  'D#': ['D#', 'Fm', 'Gm', 'G#', 'A#', 'Cm', 'Ddim'],
  E: ['E', 'F#m', 'G#m', 'A', 'B', 'C#m', 'D#dim'],
  F: ['F', 'Gm', 'Am', 'Bb', 'C', 'Dm', 'Edim'],
  'F#': ['F#', 'G#m', 'A#m', 'B', 'C#', 'D#m', 'Fdim'],
  G: ['G', 'Am', 'Bm', 'C', 'D', 'Em', 'F#dim'],
  'G#': ['G#', 'A#m', 'Cm', 'C#', 'D#', 'Fm', 'Gdim'],
  A: ['A', 'Bm', 'C#m', 'D', 'E', 'F#m', 'G#dim'],
  'A#': ['A#', 'Cm', 'D#m', 'D#', 'F', 'Gm', 'Adim'],
  B: ['B', 'C#m', 'D#m', 'E', 'F#', 'G#m', 'A#dim'],
};

// Função que atualiza os acordes no conteúdo baseado no tom
function updateChords() {
  const selectedTone = document.getElementById('tone').value;

  // Obter o campo harmônico correspondente ao tom selecionado
  const harmonicChords = harmonicFields[selectedTone];

  // Função para substituir os acordes no texto
  function replaceChordsInText(text, harmonicChords) {
    const allChords = [
      'C',
      'C#',
      'D',
      'D#',
      'E',
      'F',
      'F#',
      'G',
      'G#',
      'A',
      'A#',
      'B',
      'Cm',
      'C#m',
      'Dm',
      'D#m',
      'Em',
      'Fm',
      'F#m',
      'Gm',
      'G#m',
      'Am',
      'A#m',
      'Bm',
    ];

    // Substitui os acordes no texto
    allChords.forEach((chord, index) => {
      const regex = new RegExp(`\\b${chord}\\b`, 'g');
      text = text.replace(regex, harmonicChords[index]);
    });
    return text;
  }

  // Obter e atualizar a letra e os acordes
  let lyrics = document.getElementById('lyrics').innerText;
  let chords = document.getElementById('chords').innerText;

  // Atualizar o texto com os novos acordes
  document.getElementById('lyrics').innerText = replaceChordsInText(
    lyrics,
    harmonicChords
  );
  document.getElementById('chords').innerText = replaceChordsInText(
    chords,
    harmonicChords
  );
}

// Adicionar um ouvinte de eventos para atualizar os acordes ao mudar o tom
document.getElementById('tone').addEventListener('change', () => {
  const selectedTone = document.getElementById('tone').value;

  // Salvar o tom selecionado no localStorage
  localStorage.setItem('selectedTone', selectedTone);

  // Atualizar os acordes
  updateChords();
});

// Função para restaurar o tom selecionado ao carregar a página
function restoreSelectedTone() {
  const savedTone = localStorage.getItem('selectedTone');
  if (savedTone) {
    document.getElementById('tone').value = savedTone;
    updateChords(); // Atualiza os acordes com o tom restaurado
  }
}

// Chamar a função de restauração ao carregar a página
window.addEventListener('load', restoreSelectedTone);
