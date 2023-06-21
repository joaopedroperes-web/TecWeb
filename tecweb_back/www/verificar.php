<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");
$nome = $_POST['nome'];
$password = $_POST['password'];

// Especifique o caminho completo para o arquivo de bloco de notas
$caminhoArquivo = "./dados.txt";

// Verifique se o arquivo existe
if (file_exists($caminhoArquivo)) {
    // Ler o conteúdo do arquivo
    $conteudo = file_get_contents($caminhoArquivo);

    // Quebrar o conteúdo em linhas
    $linhas = explode("\n", $conteudo);

    // Percorrer cada linha e verificar o nome e password
    foreach ($linhas as $linha) {
        // Dividir a linha em nome, email e password
        list($arquivoNome, $arquivoEmail, $arquivopassword) = explode("|", $linha);

        // Verificar se o nome e a password correspondem aos dados do usuário
        if (trim($arquivoNome) === $nome && trim($arquivopassword) === $password) {
            // Nome e password correspondem, realizar ação desejada (login bem-sucedido)
            header('Content-Type: application/json');
            
            echo json_encode(['success' => true]);

            exit; // Encerrar o script após autenticação bem-sucedida
        }
    }
}

// Se o loop terminar, significa que nome e password não correspondem ou o arquivo não existe
header('Content-Type: application/json');
echo json_encode(['success' => false, 'error' => 'Nome ou password inválidos']);
?>
