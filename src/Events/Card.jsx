import './Card.css';

export default function Cards() {
    return (
        <div className='card'>
            <div className='container'>
                <div className='inContainer'>
                    <div className='cardIcon'>
                        <div></div>
                    </div>
                    <h3 style={{ fontSize: "2.2vw" }}>Heading</h3>
                    <p style={{ fontSize: "0.9vw" }}>Lorem, ipsum dolor sit amet consecedit tio aliquid placeat? At recusandae nulla, iste animi blanditiis deleniti maiores?</p>
                    <div className='apply' style={{ marginTop: 'auto', fontSize: '0.9vw' }}>
                        <a href="#">
                            Apply Now  &nbsp;
                            <i className="fa-solid fa-arrow-up-right-from-square" style={{ height: '24px', width: '24px' }}></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
