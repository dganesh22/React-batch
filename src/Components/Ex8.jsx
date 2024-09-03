import React from 'react'
import { Profile } from '../TypedComponents/Profile'

// Default Components
export default function Ex8(props) {
    return (
        <div>
            <h1>Typed Components</h1>
            <Profile title="new title - 1"  url="https://picsum.photos/id/124/400/400"  />
            <Profile title="new title - 2"  url="https://picsum.photos/id/125/400/400" />
            <Profile title="new title - 3"  url="https://picsum.photos/id/126/400/400" />
        </div>
    )
}

/* 
            Default                     Typed/named components 
1. export and imports                   1. export and imports 
    import Comp from "src"                  import { Comp } from "src"
    export default Comp(){}                     export function Comp(){} 
                                             const Comp = () => {}
                                                export Comp;
2. Can define props and states          2. only Props


*/