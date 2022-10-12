import React, { useRef } from "react";



export const Comp1: React.FC<{items: Array<string>, addItem: (label: string) => void}> = React.memo(({items, addItem}) => {
    const ref = useRef<HTMLInputElement>(null);

    const add = () => {
        if(ref.current) {
            addItem(ref.current.value);
            ref.current.value = '';
        }
    }

    console.log('render 1');

    return (
        <>
            <input type="text" ref={ref} />
            <button onClick={add}>add</button>
            <ul>
                {items.map((x, i) => <li key={i}>{x}</li>)}
            </ul>
        </>
        
    )
});