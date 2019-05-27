export const afterHandler=dispatch=>({
    alter:pwd=>(
        dispatch({
            type:'alter',
            payload:pwd
        })
    )
});