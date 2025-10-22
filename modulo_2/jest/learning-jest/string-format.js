function truncate(
    str,
    count, 
    withEllispis,
){
    if(str.length<=count)
        return str;
    const substring = str.substring(0,count);
    if(withEllispis)
        return substring;
    return substring+'...';
    
}
module.exports={truncate}