const getCookie=(name:string)=> {
    var dc = document.cookie;
    if(dc.includes('user')){
        dc = dc.substring(5, 41)
        return dc
    }
    else{
        return 'unauthenticated'
    }
} 
export default getCookie;