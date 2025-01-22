import { createContext, useState } from "react";

const BooksContext = createContext();

function Provider({children}) {
    const [count, setCount] = useState(0)

    const incrementCount = () => {
        setCount(count + 1)
    }

    const valueToBePassed = {
        count,
        incrementCount
    }

    return (
    <BooksContext.Provider value = {valueToBePassed }>{children}</BooksContext.Provider>
)
}

export {Provider};
export default BooksContext;