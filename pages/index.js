import { useState } from "react";

function Home() {
    return (
        <div>
            <div>Home</div>
            <Contador />
        </div>
    )
}

function Contador() {
    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }
    return (
        <div>
            {contador}<br/>
            <button onClick={adicionarContador}>Adicionar Numero</button>
        </div>
    )
}
export default Home