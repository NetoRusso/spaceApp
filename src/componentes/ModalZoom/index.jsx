import styled from "styled-components"
import Imagem from "../Galeria/Imagem"
import close from "../../assets/close.png"
// import { useEffect, useState } from "react"

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const DilogEstilizado = styled.dialog`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-40%, -50%);
    width: 1156px;
    height: auto;
    /* width: 80%; */
    /* max-width: 1156px; */
    /* height: 50%; */
    /* min-height: 660px; */
    background-color: transparent;
    border: 0;
    padding: 0;
    box-sizing: border-box;
    /* display: flex; */
    /* justify-content: center; */
       
`



const BotaoDeFechar = styled.button`
    position: absolute;
    background-color: transparent;
    border: none;
    cursor: pointer;
    top: 20px;
    right: 250px;
    &:hover{
        scale: 1.2;
        cursor: pointer;
    }
`


const ModalZoom = ({ foto, aoFechar, aoAlternarFavorito }) => {

    return (
        <>
            {foto && <>
                <Overlay onClick={aoFechar} />
                <DilogEstilizado open={!!foto} onClose={aoFechar} >
                    <Imagem foto={foto} expandida={true} aoAlternarFavorito={aoAlternarFavorito}/>
                    <form method="dialog">
                        <BotaoDeFechar formMethod="dialog">
                            <img src={close} alt="fechar" />
                        </BotaoDeFechar>
                    </form>
                </DilogEstilizado>
            </>}
        </>
    )
}

export default ModalZoom
