// App.jsx

import { Plus } from "lucide-react";
import { GrupoCartas } from "./componentes/GrupoCartas";
import { Button } from "@nextui-org/react";
import { GlobalProvider } from './context/GlobalContex';

const App = () => {
  return (
    <GlobalProvider>
      <div>
        <GrupoCartas />
        <div className="fixed right-14 bottom-14">
          <Button className="bg-success h-20 rounded-full shadow-large">
            <Plus className="w-12 h-12 text-black font-bold"/>
          </Button>
        </div>
      </div>
    </GlobalProvider>
  );
};

export default App;
