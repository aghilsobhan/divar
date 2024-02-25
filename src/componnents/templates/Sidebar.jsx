import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getCategory } from '../../services/admin';
import styles from '../templates/Sidebar.module.css';
function Sidebar(props) {
    const {data}=useQuery(['categoryList'],getCategory);
    return (
        <div className={styles.sidebar}>
          <h4>دسته بندی ها</h4> 
          <ul>
            {
                data?.data.map((i)=>(
                    <li key={i._id}>
                        <img src={`${i._icon}.svg`} alt="" />
                        <p>{i.name}</p>

                    </li>
                ))

            }
            </ul> 
        </div>
    );
}

export default Sidebar;