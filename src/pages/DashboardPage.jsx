import React from 'react';
import AddPost from '../componnents/templates/AddPost';
import PostList from '../componnents/templates/PostList';

function DashboardPage(props) {
    return (
        <div>
            <AddPost/>
            <PostList/>
        </div>
    );
}

export default DashboardPage;