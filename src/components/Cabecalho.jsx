import { createElement } from "react";

export default function Cabecalho(props){

    return(
        <>
            <header>
                <h1>CheckPoint2-RWD</h1>
                {/*Recuperar prop.children de Lista */}
                
                <ul>
                {
                    props.children.map((item, index) =>{ 
                        createElement("li", {key: index}, item);
                        return item;
                    })
                    
                }
                </ul>
                
            </header>
        </>
    )
}
