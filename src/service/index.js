export const checkInput = function(str){
    return new Promise ((resolve,reject)=>{
        if(Array.isArray(str)){
            str.forEach(index=>{
                if(!validString(str)){
                    reject('Invalid data');
                }else{

                }
            })
        }else{
            if(validString(str.description)&&validString(str.password)){
                resolve(str);
            }else{
                reject('Invalid data');
            }
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