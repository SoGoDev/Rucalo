
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


export function findInLocal(login){
    return new Promise((resolve,reject)=>{
        JSON.parse(localStorage.getItem('user')).forEach(index=>{
            console.log(index);
            if( index.login == login ){
                if(localStorage.getItem(login)){
                    console.log('in');
                    resolve(localStorage.getItem(login));  
                }else{
                    console.log('inn');
                    
                    localStorage.setItem(login,JSON.stringify({cards:[]}));
                    resolve({}); 
                }
                
            }else{
                reject('Error , no db');
            }
        });
        
    });
}