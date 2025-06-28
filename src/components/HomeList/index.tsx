// Importação dos estilos do componente
import * as S from "./styles";
// Importação de componentes
import { HomeItens } from "../HomeItens";
// Importação dos endpoints
import { useGetCardapioQuery } from "../../services/api";
import Loader from "../Loader";
import ProductModal from '../ProductModal'
import { useState } from 'react'
import type Cardapio from '../../models/Cardapio'

// Criação de typo cardapio

export function HomeList() {
  const { data: itens } = useGetCardapioQuery();
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<Cardapio | null>(null)

  if (!itens) {
    return <Loader />;
  }
  return (
    <div className="container">
      <S.HomeListContainer>
        {itens.map((item) => (
          <HomeItens
            key={item.id}
            id={item.id}
            produto={item.titulo}
            image={item.capa}
            avaliacao={item.avaliacao}
            descricao={item.descricao}
            indicador={item.tipo}
            destaque={item.destacado}
            onBuy={() => {
              setSelectedItem(item)
              setModalOpen(true)
            }}
          />
        ))}
      </S.HomeListContainer>
      <ProductModal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        {selectedItem && (
          <div>
            <h2 style={{ color: '#fff' }}>{selectedItem.titulo}</h2>
            <img src={selectedItem.capa} alt={selectedItem.titulo} style={{width: '100%', maxWidth: 300}} />
            <p>{selectedItem.descricao}</p>
            <p><b>Avaliação:</b> {selectedItem.avaliacao}</p>
            <p><b>Tipo:</b> {selectedItem.tipo}</p>
          </div>
        )}
      </ProductModal>
    </div>
  );
}
