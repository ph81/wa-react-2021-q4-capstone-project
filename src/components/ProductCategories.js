import React from 'react';
import { useFilterContext } from '../context/FilterContext';
import  styles from '../styles/ProductCategories.module.css'
import Loading from './Loading';
import Error from './Error';

const ProductCategories = () => {

    //const gridCategories = dataCategories.results;
    //fetching data
    //const url = `${WZL_API.API_BASE_URL}/documents/search?ref=${WZL_API.API_ID}&q=${WZL_API.CATEGORIES_URL}`;
    //const [shouldCall, setShouldCall] = useState(false);
    //const { data: categories } = useFetchData(url, shouldCall);
    const {categories, categories_loading, categories_error} = useFilterContext();

    
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
               {
                categories.map((category) => {
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