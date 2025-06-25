// Importação de bibliotecas externas
import styled from "styled-components";
// Importação de cores da aplicação
import { cores } from "../../globalStyles";

export const ItenCartContainer = styled.div`
  background-color: ${cores.laranja};
  color: ${cores.branco};
  padding: 8px;
  max-width: 300px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
    margin-top: 8px;
    color: ${cores.laranja};
  }

  p {
    font-size: 14px;
    line-height: 22px;
    color: ${cores.branco};
  }
`;

export const Button = styled.button`
  background-color: ${cores.branco};
  color: ${cores.laranja};
  /* padding: 12px 16px; */
  height: 24px;
  margin-top: 8px;
  width: 100%;
  border: none;
  border-radius: 2px;
  font-size: 14px;
  /* font-weight: bold; */
  cursor: pointer;
`;

export const ContainerImg = styled.div`
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: flex;
`;
