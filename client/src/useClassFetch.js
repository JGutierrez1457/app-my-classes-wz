import { useEffect, useState } from 'react'
import { getClasses } from './api'
import axios from 'axios'
function useClassFetch(page) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [classes, setClasses] = useState([]);
    const [hasMore, setHasMore] = useState(false);
  
    useEffect(()=>{
        let cancel;
        setLoading(true);
        setError(false);
        getClasses(page,new axios.CancelToken(c => cancel =c )).then(
            res => {
                setClasses( prevClasses => {
                    return [...prevClasses,...res.data]
                })
                setHasMore(res.data.length > 0)
                setLoading(false);
            }
        ).catch(e=>{
            if(axios.isCancel(e))return;
            setError(true);})
            return ()=> cancel()
    },[page]);
    return {loading,error,hasMore,classes}
}

export default useClassFetch
