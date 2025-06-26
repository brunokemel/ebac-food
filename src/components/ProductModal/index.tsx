import React from 'react'
import { ModalOverlay, ModalContent, CloseButton } from './styles'

interface ProductModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>×</CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  )
}

export default ProductModal 