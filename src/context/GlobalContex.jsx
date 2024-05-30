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

    const editarHistoria = async (id, historiaActualizada) => {
        try {
            const response = await fetch(`http://localhost:3000/historias/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(historiaActualizada),
            });

            if (!response.ok) {
                throw new Error('Error al editar la historia');
            }

            const updatedHistoria = await response.json();
            setHistorias(prev => prev.map(hist => hist.id === id ? updatedHistoria : hist));
        } catch (error) {
            console.error('Error al editar la historia:', error);
        }
    };

    const borrarHistoria = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/historias/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Error al borrar la historia');
            }

            setHistorias(prev => prev.filter(hist => hist.id !== id));
        } catch (error) {
            console.error('Error al borrar la historia:', error);
        }
    };

    return (
        <GlobalContext.Provider value={{ historias, agregarHistoria, editarHistoria, borrarHistoria, dataHistòria, setDataHistòria }}>
            {children}
        </GlobalContext.Provider>
    );
};
