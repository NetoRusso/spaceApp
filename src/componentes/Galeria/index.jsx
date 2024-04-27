import Titulo from "../Titulo"
import Tags from "./Tags"
import Populares from "./Populares";
import styled from "styled-components";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
    display: flex;
`
const SecaoFluida = styled.section`
    flex-grow: 1;
`

const ListaEstilizada = styled.ul`
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
`

const ItemListaEstilizado = styled.li`
    text-decoration: none;
    list-style-type: none;
    box-shadow: -10px 15px 20px rgba(0, 0, 0, 0.7);
    border-radius: 20px;
    
    /* &:hover {
        scale: 1.1;
        box-shadow: none;
        transition: scale 0.3s ease-in-out;
        box-shadow: none;
    } */
`

const Galeria = ({ fotos = [], setTag, aoFotoSelecionada, aoAlternarFavorito }) => {
    return (
        <>
            <Tags setTag={setTag} />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                        <ListaEstilizada>
                            {fotos.map( (foto) => (<ItemListaEstilizado key={foto.id} >
                                <Imagem 
                                aoZoomSolicitado={aoFotoSelecionada}
                                aoAlternarFavorito={aoAlternarFavorito}
                                foto={foto}
                                />
                                </ItemListaEstilizado>))}
                        </ListaEstilizada>
                </SecaoFluida>
                <Populares />
            </GaleriaContainer>
        </>
    )
}

export default Galeria
