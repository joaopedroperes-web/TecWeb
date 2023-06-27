import { useNavigate } from 'react-router'
import { useEffect, useState } from "react";
import './perfil.css'
import $ from 'jquery'

export const Profile = () => {
    const navigation = useNavigate();
    const [userData, setUserData] = useState({});

    useEffect(() => {
        // Função para buscar os dados do usuário
        const fetchUserData = () => {
            $.ajax({
                url: 'http://localhost:8080/www/salvar/www/capturar.php', // Substitua pelo caminho correto para o script PHP
                method: "GET",
                dataType: "json",
                success: function (response) {
                    setUserData(response);
                },
                error: function (error) {
                    console.log(error);
                },
            });
        };

        fetchUserData();
    }, []);

    return (
        <>
            <nav class="nav-bar container">
                <a href="../home/index.html">
                    <img class="nav-bar--logo"
                        src="https://uploads-ssl.webflow.com/643555a120509a18b1817654/64355624c2464482e15d3880_PGRAMIN_IMG.png"
                        alt="Logo PGRAMIN" />
                </a>

                <div class="nav-bar--buttons-wrapper">
                    <a href="../home/index.html"><button class="black-button">Logout</button></a>
                </div>
            </nav>

            <div id="fundo">
                <div class="nome-i">
                    <h3>Informações de usuário</h3>
                    <div class="grid-containerc">
                        <div>
                            <label for="lname">Primeiro nome</label>
                            <input type="text" id="lname" name="lastname" placeholder="Joaquim" value={userData.nome}
                                readOnly />
                        </div>
                        <div>
                            <label for="lname">Moeda</label>
                            <input type="text" id="lname" name="lastname" placeholder="BRL" value="BRL" />
                        </div>
                        <div>
                            <label for="lname">País</label>
                            <input type="text" id="lname" name="lastname" placeholder="Brasil" value="Brasil" />
                        </div>
                        <div>
                            <label for="lname">Email</label>
                            <input type="text" id="lname" name="lastname" placeholder="joaquim1995santos@gmail.com" value={userData.email} readOnly />
                        </div>
                    </div>
                </div>
                <div class="nome-f">
                    <h3>Experiência</h3>
                    <div class="grid-containerc">
                        <div>
                            <select id="experiencia">
                                <option value="front-end">Fronte End</option>
                                <option value="back-end">Back End</option>
                                <option value="devops">Devops</option>
                                <option value="cientista-dados">Cientista de dados</option>
                                <option value="full-stack">Dev fullstack</option>
                            </select>
                        </div>
                        <div>
                            <select id="nivel">
                                <option value="estagiario">Estagiário</option>
                                <option value="junior">Junior</option>
                                <option value="pleno">Pleno</option>
                                <option value="senior">Senior</option>
                            </select>
                        </div>
                    </div>
                    <div id="mconta-div">
                        <button class="black-button">Salvar</button>
                    </div>
                </div>
            </div >
        </>
    )
}    
