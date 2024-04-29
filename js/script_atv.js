function num_turmas() {
    let num_turmas = parseInt(document.getElementById("turma").value);
    let cont_alunos = document.getElementById("qtd_alunos");
    cont_alunos.innerHTML = '';

    for (let i = 1; i <= num_turmas; i++) {
        let div_turma = document.createElement('div');
        let labelTurma = document.createElement('label');
        labelTurma.textContent = 'Digite a quantidade de alunos da turma ' + i + ':';
        let inputTurma = document.createElement('input');
        inputTurma.setAttribute('type', 'number');
        inputTurma.setAttribute('name', 'qtd_alunos_turma' + i);
        inputTurma.setAttribute('id', 'qtd_alunos_turma' + i);
        inputTurma.setAttribute('min', '1');
        cont_alunos.appendChild(document.createElement('br'));
        div_turma.appendChild(labelTurma);
        div_turma.appendChild(inputTurma);
        cont_alunos.appendChild(div_turma);
        
        inputTurma.addEventListener('change', function() {
            let num_alunos = parseInt(inputTurma.value);
            Notas_alunos(div_turma, i, num_alunos);
        });
    }
}
function Notas_alunos(div_turma, turma, num_alunos) {
    for (let j = 1; j <= num_alunos; j++) {
        let labelNota = document.createElement('label');
        labelNota.textContent = 'Digite a nota do aluno ' + j + ':';
        let inputNota = document.createElement('input');
        inputNota.setAttribute('type', 'number');
        inputNota.setAttribute('name', 'nota_aluno_turma' + turma + '_aluno' + j);
        inputNota.setAttribute('id', 'nota_aluno_turma' + turma + '_aluno' + j);
        inputNota.setAttribute('min', '0');
        inputNota.setAttribute('max', '10');
        div_turma.appendChild(document.createElement('br'));
        div_turma.appendChild(labelNota);
        div_turma.appendChild(inputNota);
    }
}
function estatisticas_alunos() {
    let total_alunos = 0;
    let total_notas = 0;
    let total_aprovados = 0;
    let num_turmas = parseInt(document.getElementById("turma").value);

    for (let i = 1; i <= num_turmas; i++) {
        let num_alunos = parseInt(document.getElementById('qtd_alunos_turma' + i).value);
        total_alunos += num_alunos;
        for (let j = 1; j <= num_alunos; j++) {
            let nota = parseFloat(document.getElementById('nota_aluno_turma' + i + '_aluno' + j).value);
            total_notas += nota;
            if (nota >= 7.0) {
                total_aprovados++;
            }
        }
    }
    let media_notas = total_notas / total_alunos;
    let reprovados_percentual = ((total_alunos - total_aprovados) / total_alunos) * 100;
    alert('Quantidade de alunos aprovados: ' + total_aprovados +
        '\nMédia de todas as notas: ' + media_notas.toFixed(2) +
        '\nPercentual de alunos reprovados: ' + reprovados_percentual.toFixed(2) + '%');
}
