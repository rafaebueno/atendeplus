import { createContext, useContext, useState } from 'react';

interface UserContextType {
  userEmail: string | null;
  userPlano: string | null;
  setUserEmail: (email: string | null) => void;
  setUserPlano: (plano: string | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userPlano, setUserPlano] = useState<string | null>(null);

  return (
    <UserContext.Provider value={{ userEmail, userPlano, setUserEmail, setUserPlano }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserEmail() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserEmail must be used within a UserProvider');
  }
  return context;
}

// Exemplo de uso em outros componentes:
// import { useUserEmail } from '@/lib/user-context.tsx';
// 
// function MeuComponente() {
//   const { userEmail, userPlano } = useUserEmail();
//   
//   return (
//     <div>
//       Email do usuário logado: {userEmail}
//       Plano do usuário: {userPlano}
//     </div>
//   );
// } 