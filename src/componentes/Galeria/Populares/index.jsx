import styled from "styled-components";
import Titulo from "../../Titulo";
import fotos from "./fotos-populares.json";

const ColunaEstilizada = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
const ImagemColuna = styled.img`
    max-width: 212px;
    border-radius: 20px;
    box-shadow: -10px 15px 20px rgba(0, 0, 0, 0.7);
    &:hover{
        scale: 1.2;
        transition: scale 0.3s ease-in-out;
    }
`

const BotaoVerMais = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid #c98cf1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 20px;
    font-family: 'GandhiSansBold';
    &:hover{
        scale: 0.8;
        transition: scale 0.3s ease-in-out;
    }
`

const Populares = () => {
    return (
        <section>
            <Titulo $alinhamento='center'>Populares</Titulo>
            <ColunaEstilizada>
                {fotos.map(foto => <ImagemColuna key={foto.id} src={foto.path} alt={foto.alt} />)}
            </ColunaEstilizada>
            <BotaoVerMais>Ver mais +</BotaoVerMais>
        </section>
    )
}

export default Populares
