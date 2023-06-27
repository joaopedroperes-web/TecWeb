<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");

// Especifique o caminho completo para o arquivo de bloco de notas
$caminhoArquivo = "./dados.txt";

// Verifique se o arquivo existe
if (file_exists($caminhoArquivo)) {
    // Ler o conteúdo do arquivo
    $conteudo = file_get_contents($caminhoArquivo);

    // Quebrar o conteúdo em linhas
    $linhas = explode("\n", $conteudo);

    // Obter a penúltima linha
    $penultimaLinha = array_slice($linhas, -2, 1)[0];

    // Dividir a linha em nome, email e password
    list($arquivoNome, $arquivoEmail, $arquivopassword) = explode("|", $penultimaLinha);

    // Construir o array com os dados do usuário
    $userData = array(
        'nome' => trim($arquivoNome),
        'email' => trim($arquivoEmail)
    );

    // Enviar a resposta como JSON
    header('Content-Type: application/json');
    echo json_encode($userData);
} else {
    // Arquivo não encontrado, enviar resposta de erro
    header('Content-Type: application/json');
    echo json_encode(['error' => 'Arquivo não encontrado']);
}
?>
