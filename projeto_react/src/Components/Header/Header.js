import React from "react"
import { ContainerHeader, NavBar } from "./Styled"

function Header(){
    return (
        <ContainerHeader>
            <div>
            <img src="https://images.vexels.com/media/users/3/152643/isolated/lists/f149c1d2b35a3d17574471e8f8d1b1aa-space-probe-icon.png" alt="icone"/>
        </div>
        <NavBar>
            <a src="#" target="_black">PROJETO</a>
            <a>BURACO DE MINHOCA</a>
            <a>CADASTRAR PASSAGEIRO</a>
        </NavBar>


        </ContainerHeader>
    )
}
export default Header