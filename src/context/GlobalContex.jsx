import { createContext, useState, useEffect } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [historias, setHistorias] = useState([]);
    const [dataHistòria, setDataHistòria] = useState(null);

    useEffect(() => {
        // Cargar los datos desde el servidor al montar el componente
        const fetchHistorias = async () => {
            try {
                const response = await fetch('http://localhost:3000/historias');
                const data = await response.json();
                setHistorias(data);
            } catch (error) {
                console.error('Error al obtener las historias:', error);
            }
        };

        fetchHistorias();
    }, []);

    const agregarHistoria = async (historia) => {
        try {
            const response = await fetch('http://localhost:3000/historias', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(historia),
            });

            if (!response.ok) {
                throw new Error('Error al agregar la historia');
            }

            const nuevaHistoria = await response.json();
            setHistorias(prev => [...prev, nuevaHistoria]);
        } catch (error) {
            console.error('Error al agregar la historia:', error);
        }
    };

    const editarHistoria = (id, historiaActualizada) => {
        setHistorias(prev => prev.map(hist => hist.id === id ? historiaActualizada : hist));
    };

    return (
        <GlobalContext.Provider value={{ historias, agregarHistoria, editarHistoria, dataHistòria, setDataHistòria }}>
            {children}
        </GlobalContext.Provider>
    );
};
