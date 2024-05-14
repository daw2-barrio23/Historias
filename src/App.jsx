import { Camera, Icon } from 'lucide-react';


import { burger } from '@lucide/lab';

import Icono from './Icono';

const App = () => {
  return <div>
      <Camera color="red" size={48} />
      <Camera size={48} fill="red" />
      <Icon iconNode={burger} /> 
      <Icono name="Home" />
  </div>
};

export default App;