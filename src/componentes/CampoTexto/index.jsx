import styled from "styled-components"
import search from "./search.png"

const ContainerEstilizado = styled.div`
    position: Relative;
    display: inline-block;
`;

const CampoTextoEstilizado = styled.input`
    width: 602px;
    height: 56px;
    border-radius: 10px;
    border: 2px solid transparent;
    background-image: linear-gradient(175deg, #041833 4.16%, #041833),
        radial-gradient(circle at top left, #c98cf1, #7b78e5);
    background-origin: border-box;
    background-clip: padding-box, border-box;
    padding: 12px 16px;
    /* border-image-source: linear-gradient(45deg, #C98CF1 0%, #7B78E5 100%); */
    box-sizing: border-box;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
`;

const IconeLupa = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;

    &:hover {
        cursor: pointer;
        scale: 1.2;
    }
`

const CampoTexto = ({  filtro, aoDigitar }) => {
    console.log(filtro);

    console.log(aoDigitar);
    return (
        <ContainerEstilizado>
            <CampoTextoEstilizado placeholder="O que você procura ?" filtro={filtro} onChange={(e) => aoDigitar(e.target.value)} type="text" />
            <IconeLupa src={search} alt="Ícone de lupa" />
        </ContainerEstilizado>
    )
}

export default CampoTexto
