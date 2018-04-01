export const checkInput = function(str){
    return new Promise ((resolve,reject)=>{
        if(Array.isArray(str)){
            str.forEach(index=>{
                if(!validString(str)){
                    reject('Invalid data');
                }else{

                }
            })
        }
        
    });
};

function  validString(str){
    if( str !== undefined && str.replace(/ /g,'') !== ''){
        return true
    }else{
        return false
    }
}