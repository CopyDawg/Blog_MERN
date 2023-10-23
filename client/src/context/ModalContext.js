import { createContext, useState } from "react";

export const ModalContext = createContext({});

export const ModalContextProvider = ({children}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleModal = () => {
        setIsModalOpen(!isModalOpen);
    }
    return (
        <ModalContext.Provider value={{handleModal, isModalOpen, setIsModalOpen}}>
            {children}
        </ModalContext.Provider>
    );
}
