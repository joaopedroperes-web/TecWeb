<?php
$nome = $_POST['nome'];
$email = $_POST['email'];

// Formate os dados que você deseja salvar no arquivo
$dados = "Nome: " . $nome . "\n" . "Email: " . $email . "\n\n";

// Especifique o caminho completo para o arquivo de bloco de notas
$caminhoArquivo = "/dados.txt";

// Abra o arquivo em modo de escrita
$arquivo = fopen($caminhoArquivo, "a");

// Verifique se o arquivo foi aberto com sucesso
if ($arquivo) {
    // Escreva os dados no arquivo
    fwrite($arquivo, $dados);

    // Feche o arquivo
    fclose($arquivo);

    // Retorne uma resposta de sucesso
    echo json_encode(['success' => true]);
} else {
    // Retorne uma resposta de erro, caso o arquivo não possa ser aberto
    echo json_encode(['success' => false, 'error' => 'Não foi possível abrir o arquivo']);
}
?>
