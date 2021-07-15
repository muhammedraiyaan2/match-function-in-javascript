let matchIt =(varname,text)=>{
    let a=varname.indexOf(text)
    if(a>-1){
        return "true"
    }
    else{
        return "false";
    }
}