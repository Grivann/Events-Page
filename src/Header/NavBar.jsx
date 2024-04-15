import TopBtnBox from "./TopBtnBox";
import HeadingBox from "./HeadingBox";

export default function NavBar({ isTrue }) {
    return (
        <div className="NavBar" style={{ display: isTrue ? "none" : "flex" }}>
            <HeadingBox />
            <TopBtnBox />
        </div>
    );
}