import React, {useState, useEffect} from 'react';
import useFetchData from '../utils/hooks/useFetchData';
import { WZL_API} from '../utils/constants';
import  styles from '../styles/ProductCategories.module.css'

const ProductCategories = (props) => {

    //const gridCategories = dataCategories.results;
    //fetching data
    const url = `${WZL_API.API_BASE_URL}/documents/search?ref=${WZL_API.API_ID}&q=${WZL_API.CATEGORIES_URL}`;
    const [shouldCall, setShouldCall] = useState(false);
    const { data: categories } = useFetchData(url, shouldCall);


    useEffect(() => {    
        setShouldCall(true); 
    }, []);

    return (
        <section>
            <h2>Our departments</h2>
               <div className={styles["grid__container"]}>
               {categories &&
                categories.results.map((category, idx) => {
                    return (
                    <div className={styles["grid__item"]} key={category.id}>
                            <img src={category.data.main_image.url} alt={category.data.name} />
                            <p>{category.data.name}</p>
                        </div>    
                    )
                })}
        </div>
        </section>
        
    )
}

export default ProductCategories;