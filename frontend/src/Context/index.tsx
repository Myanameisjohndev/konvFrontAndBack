import { type } from 'os';
import React, {
  useState, useContext, createContext, ReactNode, SetStateAction, Dispatch,
} from 'react';

interface IContextProps {
  children: ReactNode;
}

type User = {
  name: string,
  cpf: string,
  account_value: number,
}

type ContextData = {
  user?: User;
  setUser: Dispatch<SetStateAction<User | undefined>>
}

const Context = createContext({} as ContextData);

function ContextProvider({ children }: IContextProps) {
  const [user, setUser] = useState<User>();

  return (
    <Context.Provider value={{ user, setUser }}>
      {children}
    </Context.Provider>
  );
}

function useContextApp() {
  const context = useContext(Context);
  return context;
}

export { ContextProvider, useContextApp };
