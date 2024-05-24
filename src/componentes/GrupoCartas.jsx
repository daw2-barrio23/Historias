// GrupoCartas.jsx
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContex';
import { Carta } from './Carta';

export function GrupoCartas() {
  const { historias } = useContext(GlobalContext);

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-4">
      {historias.map(historia => (
        <Carta key={historia.id} historia={historia} />
      ))}
    </div>
  );
}
