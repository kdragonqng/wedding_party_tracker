import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { AccountInfo } from '../types/accountType';
import { container } from 'tsyringe';
import storageService from '../services/logic/storageService';
import { AuthObject } from '../types/authType';
import { StorageKey } from '../common/constants/storageKey';
import { LogggingService } from '../services/logic/loggingService';

export interface AuthContextType {
    user: AccountInfo | null;
    isAuthenticated: boolean | undefined;
    handleIsAuthenticated: (value: boolean | undefined) => void;
    handleSetUser: (userData: AccountInfo | null) => void;
    handleLogout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
    user: null,
    isAuthenticated: undefined,
    handleIsAuthenticated: () => { },
    handleSetUser: () => { },
    handleLogout: () => { },
});

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(undefined);
    const [user, setUser] = useState<AccountInfo | null>(null);

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const isAuthenticated = await storageService.load<AuthObject>(StorageKey.authObject);
                if (isAuthenticated) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }
            } catch (e) {
                const loggingService = container.resolve(LogggingService);
                loggingService.logError(e);
            }
        };
        setTimeout(() => {
            checkLoginStatus();
        }, 1000);
    }, []);

    function handleIsAuthenticated(value: boolean | undefined) {
        setIsAuthenticated(value);
    };

    function handleSetUser(userData: AccountInfo | null) {
        setUser(userData);
    };

    function handleLogout() {
        setIsAuthenticated(false);
        setUser(null);
    };



    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated,
            handleIsAuthenticated,
            handleSetUser,
            handleLogout,
        }}>
            {children}
        </AuthContext.Provider>
    );
};