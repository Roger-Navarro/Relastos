import React from "react";

export const Buscador = () => {
    return (
       <div className="buscador">
            <form >
                <input  type="text" placeholder="Buscar..."/>
                <button type="submit"> Buscar </button>
            </form>
        </div>
    );
}