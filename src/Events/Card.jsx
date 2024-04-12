import './Card.css';

export default function Cards() {
    return (
        <div className='card'>
            <div className='container'>
                <div className='inContainer'>
                    <div className='cardIcon'>
                        <div></div>
                    </div>
                    <h3 className='cardHeading'>Heading</h3>
                    <p className='cardText'>Lorem, ipsum dolor sit amet consecedit tio aliquid placeat? At recusandae nulla, iste animi blanditiis deleniti maiores?</p>
                    <div className='apply' >
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
