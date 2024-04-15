import { useState } from "react";
import NavBar from "./NavBar";
import Ham from "./Ham";

export default function Papa() {
    const [isTrue, setIsTrue] = useState(true);

    return (
        <>
            <NavBar isTrue={isTrue} />
            <Ham isTrue={isTrue} setIsTrue={setIsTrue} />
        </>
    );
}