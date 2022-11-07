    import { createContext, useEffect, useState } from "react";
    import { onAuthStateChanged } from "firebase/auth";
    import { auth } from "../firebase";
    import { getAuth, signOut } from "firebase/auth";

    export const myContext = createContext();

    const MyContextProvider = (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const un = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        });
        return () => {
        un();
        };
    }, []);

    const sighnOut = () => {
        const auth = getAuth();
        signOut(auth)
        .then(() => {
            setUser("");
        })
        .catch((error) => {
            alert(error);
        });
    };

    const value = { user, setUser, signIn, sighnOut };
    return (
        <myContext.Provider value={value}>{props.children}</myContext.Provider>
    );
    };

    export default MyContextProvider;
