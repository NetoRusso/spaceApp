import styled from "styled-components"

const ItemListaEstilizado = styled.li`
    
    margin-bottom: 25px;
    cursor: pointer;
    font-family: ${ props => props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular' };
    display: flex;
    align-items: center;
    gap: 20px;

        a {
            text-decoration: none;
            font-size: 24px;
            line-height: 24px; 
            color: ${ props => props.$ativo ? '#7B78E5' : '#D9D9D9' };
                
                &:hover{
                scale: 1.1;
                font-family: 'GandhiSansBold';
                }
        }
`

const ItemNavegacao = ({children, iconeAtivo, iconeInativo, ativo = false}) => {

    return (
        <ItemListaEstilizado $ativo={ativo}>
            <img src={ativo ? iconeAtivo : iconeInativo} alt="" />
            <a href="">
                {children}
            </a>
            
        </ItemListaEstilizado>
    )
}

export default ItemNavegacao
