<?php
// Obter os dados do formulário
$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];

// Montar a string com os dados
$data = "Name: $name\nEmail: $email\nPassword: $password\n\n";

// Caminho para o arquivo de bloco de notas
$filePath = 'dados.txt';

// Escrever os dados no arquivo de bloco de notas
$file = fopen($filePath, 'a');
if ($file) {
    fwrite($file, $data);
    fclose($file);
    echo 'Cadastro realizado com sucesso!'; // Resposta para o cliente
} else {
    echo 'Erro ao salvar os dados no arquivo.';
}
?>
