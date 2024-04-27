import styled from "styled-components";
import imagem from "../../assets/banner.png";

const ContainerEstilizado = styled.figure`
  /* width: 1156px; */
  height: 328px;
  /* top: 192px; */
  /* left: 260px; */
  gap: 0;
  margin: 0;
  background-image: ${props => `url(${props.$backgroundImage})`};
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  display:flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: -25px 25px 50px rgba(0, 0, 0, 0.5);

    h1 {
      font-weight: 400;
      padding: 0 64px;
      font-size: 40px;
      line-height: 48px;
      width: 301px;
      height: 144px;
      color: #ffffff;
    }

`

const Banner = ({ texto, backgroundImage }) => {
  return (
    <ContainerEstilizado $backgroundImage={backgroundImage}>
      <h1>{texto}</h1>
    </ContainerEstilizado>
  )
}

export default Banner
