import styled from "styled-components";

const ItemDaGaleria = styled.figure`
    width: ${(props) => (props.$expandida ? '80%' : '460px')};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }

    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;
        h3 {
            font-family: 'GandhiSansBold';
        }
        h4 {
            flex-grow: 1;
            font-weight: 400;
        }
        h3,h4 {
            margin: 0;
            font-size: 16px;
        }
    }
`
const RodapeGaleria = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;

`

const BotaoIcone = styled.button`
    
    width: 24px;
    height: 24px;
    padding: 0px;
    background-color: transparent;
    border: solid 2px transparent;
    box-sizing: border-box;
    margin-right: 10px;
        &:hover {
            scale: 1.2;
            cursor: pointer;
        }

        img {
            border-radius: 0 0;
        }

`


const Imagem = ({ foto, expandida = false, aoZoomSolicitado, aoAlternarFavorito }) => {

    const iconeFavorito = foto.favorita ? '/icones/favorito-ativo.png' : '/icones/favorito.png'

    return (
        <ItemDaGaleria $expandida={expandida} id={`foto-${foto.id}`}>
            <img src={foto.path} alt={foto.titulo} />
            <figcaption>
                <h3>{foto.titulo}</h3>
                <RodapeGaleria>

                    <h4>{foto.fonte}</h4>
                    <BotaoIcone onClick={() => aoAlternarFavorito(foto)}>
                        <img src={iconeFavorito} alt="icone de favorito"></img>
                    </BotaoIcone>

                    {!expandida && <BotaoIcone aria-hidden={expandida} onClick={() => aoZoomSolicitado(foto)}>
                        <img src="/icones/expandir.png" alt="icone de expandir" />
                    </BotaoIcone>}
                </RodapeGaleria>
            </figcaption>
        </ItemDaGaleria>
    )
}

export default Imagem
