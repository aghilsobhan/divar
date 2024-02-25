import Sidebar from '../componnents/templates/Sidebar';
import Main from '../componnents/templates/Main';

function HomePage(props) {
    const style={display:"flex"}
    return (
        <div style={style}>
            <Sidebar/>
            <Main/>
        </div>
    );
}

export default HomePage;