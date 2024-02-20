import CategoriForm from '../componnents/templates/CategoriForm';
import CategoryList from '../componnents/templates/CategoryList';

function AdminPage(props) {
    return (
        <div>
            <CategoryList/>
            <CategoriForm/>
        </div>
    );
}

export default AdminPage;