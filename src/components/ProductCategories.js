import React, {useState, useEffect} from 'react';
import { WZL_API } from '../utils/constants';
import  styles from '../styles/ProductCategories.module.css'
import Loading from './Loading';
import Error from './Error';
import useFetchData from '../utils/hooks/useFetchData';

const ProductCategories = () => {

    //fetching data
    const url = `${WZL_API.API_BASE_URL}/documents/search?ref=${WZL_API.API_ID}&q=${WZL_API.CATEGORIES_URL}`;
    const [shouldCall, setShouldCall] = useState(false);
    const {data: categories, categories_loading, categories_error} = useFetchData(url, shouldCall);
    
    useEffect(() => {    
        setShouldCall(true); 
    }, []);
    
    if (categories_loading) {
        return <Loading />
    }

    if (categories_error) {
        return <Error type='categories' />;
    }


    return (
        <section>
            <h2>Our departments</h2>
               <div className={styles["grid__container"]}>
               {categories &&
               categories.results.map((category, idx) => 
                    <div className={styles["grid__item"]} key={category.id}>
                        <img src={category.data.main_image.url} alt={category.data.name} />
                         <p>{category.data.name}</p>
                    </div>    
                )}
                </div>
        </section>
    )
}

export default ProductCategories;