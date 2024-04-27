import styled from "styled-components";
import tags from "./tags.json";


const TagContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: center; 
    margin: 24px 0;
`;


const TagTitulo = styled.h3`
    color: #d9d9d9;
    font-size: 24px;
    font-weight: 400;
    width: 219px;
    margin: 0;
`
const TagChips = styled.button`
    padding: 10px;
    color: #fff;
    font-size: 24px;
    background-color: rgba(217, 217, 217, 0.3);
    transition: background-color 0.3s ease;
    cursor: pointer;
    border-radius: 10px;
    border: 2px solid transparent;
    box-sizing: border-box;
        &:hover {
            border-color: #c98cf1;

        }
`

const Div = styled.div`
    display: flex;
    gap: 24px;
    justify-content: end;
`



const Tags = ({ setTag }) => {
    return (
        <TagContainer>
            <TagTitulo>Busque por tags:</TagTitulo>
            <Div>
                {tags.map(tag => <TagChips key={tag.id} onClick={() => setTag(tag.tag) } >{tag.titulo}</TagChips>)}
            </Div>
        </TagContainer>
    )
}

export default Tags