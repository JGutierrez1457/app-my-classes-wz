import { useEffect, useState } from 'react'
import { userClasses } from './api'
import axios from 'axios'

function useUserClassesFetch(page, username) {
    const [loading, setLoading ] = useState(true);
    const [error, setError] = useState(false);
    const [classes, setClasses] = useState([]);
    const [hasMore, setHasMore] = useState(false);

    useEffect(()=>{
    let cancel;
    setLoading(true);
    setError(false);
    userClasses(page,new axios.CancelToken(c => cancel = c),username)
        .then(res=>{
            setClasses( prevClasses => {
                return [...prevClasses,...res.data]
            })
            setHasMore(res.data.length > 0)
            setLoading(false);
        }).catch( e=>{
            if(axios.isCancel(e))return;
            setError(true);})
        return ()=> cancel()
        },[page,username]);
        return {loading, error, hasMore, classes}
}

export default useUserClassesFetch;