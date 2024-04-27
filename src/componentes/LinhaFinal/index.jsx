import styled from "styled-components"

import instagram from "/icones/instagramBranco.png";
import facebook from "/icones/facebookBranco.png";
import linkedin from "/icones/linkedinBranco.png";
import github from "/icones/githubBranco.png";
import vercel from "/icones/vercelBranco.png";
import site from "/icones/site.png";
import donuts from "/icones/Simbolo_completo.png";

const Base = styled.footer`
    width: 100%;
    height: 80px;
    background-color: #04244F;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60%;
    margin-top: 50px;
`

const Redes = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    a{
        img{
            width: 24px;
            &:hover {
                scale: 1.2;
                transition: scale 0.2s ease-in-out;
            }
        }
    }
`

const Assinaturas = styled.div`
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;
        div {
            display: flex;
            align-items: center;
            gap: 10px;
                img {
                    width: 24px;
                    &:hover {
                        scale: 1.2;
                        transition: scale 0.2s ease-in-out;
                    }
                }
    }

    h5 {
        margin: 0;
        font-weight: 400;
        color: #fff;
        font-size: 16px;
    }

`

const LinhaFinal = () => {

    return (
        <Base>
            <Redes>
                <a href="https://www.instagram.com/donuts.tech/" target="_blank" ><img src={instagram} alt="icone do instagram"/></a>
                <a href="#" target="_blank" ><img src={facebook} alt="icone do facebook"/></a>
                <a href="https://www.linkedin.com/in/neto-russo/" target="_blank" ><img src={linkedin} alt="icone do linkedin"/></a>
                <a href="https://github.com/NetoRusso" target="_blank" ><img src={github} alt="icone do github"/></a>
                <a href="https://vercel.com/neto-russos-projects" target="_blank" ><img src={vercel} alt="icone do vercel"/></a>
                <a href="https://www.donutstech.com.br/" target="_blank" ><img src={site} alt="icone de site"/></a>
            </Redes>
            <Assinaturas>
                <div>
                    <h5>Feito por Neto Russo</h5>
                    <a href="https://www.donutstech.com.br/" target="_blank"><img src={donuts} alt="icone do Donuts Tech"/></a>
                </div>
                <h5>Desenvolvido em Aula na Alura</h5>
            </Assinaturas>
        </Base>
    )
}

export default LinhaFinal
