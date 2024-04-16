import TopBtnBox from "./TopBtnBox";
import HeadingBox from "./HeadingBox";
import { useState } from "react";

export default function NavBar({ isTrue,count }) {
    console.log(isTrue);
    console.log(count);
    return (
        <div className="NavBar" >
               {/* <h1>{count}</h1> */}
            <HeadingBox />
            <TopBtnBox />
        </div>
    );
}