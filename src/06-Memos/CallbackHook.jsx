import { useCallback, useEffect } from "react";
import { useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);


    // La funcion queda memorizada es la misma funcion apunta al mismo
    // espacio en memoria. Pero los argumentos cambian
    const incrementFather = useCallback(
      (value) => {
        //console.log('setCounter(counter  + 1)');
        setCounter((c) => c + value)
      },
      [],

    )

    // useEffect(() => {
    //     console.log('useEfect executed');
    //     incrementFather()
    // }, [incrementFather]);

    // En JS las funciones y objetos apuntan a referencia
    // const incrementFather = (  ) => {
    //     setCounter(counter + 1)
    // }


    return (
        <>
            <h1>useCallback Hoook: {counter} </h1>
            <hr />

            <ShowIncrement  increment={incrementFather }/>




        </>
    )
}
