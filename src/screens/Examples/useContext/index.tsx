import { createContext, PropsWithChildren, useState } from "react";
import { Text, View } from "react-native";

interface ContextProps {
  name: string;
  email: string;
  updateUsername: (name: string) => void;
}

export const Context = createContext<ContextProps>({} as ContextProps);

const ContextProvider = ({ children }: PropsWithChildren) => {
  const [username, setUsername] = useState("");

  const updateUsername = (name: string) => {
    setUsername(name);
  };

  return (
    <Context.Provider
      value={{ name: username, email: "email@email.com", updateUsername }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
