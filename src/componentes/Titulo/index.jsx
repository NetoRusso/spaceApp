import styled from "styled-components";


const Titulo = styled.h2`
    font-size: 32px;
    color: #7B78E5;
    text-align: ${props => props.$alinhamento ? props.$alinhamento : 'left'};
`
export default Titulo
