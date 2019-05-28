export const alterAction=dispatch=>({
    alter:pwd=>(
        dispatch({
            type:'alter',
            payload:pwd
        })
    )
});