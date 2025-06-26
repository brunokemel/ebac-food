import styled from 'styled-components'
import { cores } from '../../globalStyles'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

export const ModalContent = styled.div`
  background: ${cores.branco};
  padding: 32px;
  border-radius: 8px;
  min-width: 320px;
  max-width: 90vw;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 4px 32px rgba(230, 103, 103, 0.15);

  h2 {
    color: ${cores.laranja};
    font-size: 24px;
    margin-bottom: 16px;
    font-weight: bold;
  }

  p {
    color: #444;
    font-size: 16px;
    margin-bottom: 8px;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: transparent;
  border: none;
  font-size: 24px;
  color: ${cores.laranja};
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #b94a4a;
  }
` 