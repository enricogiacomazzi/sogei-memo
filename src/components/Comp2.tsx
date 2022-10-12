import React from "react";

export const Comp2: React.FC<{img: string}> = React.memo(({img}) => {

    console.log('render 2');

    return (
        <img src={img}/>
    )
});