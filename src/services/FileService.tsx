export function ConvertFileToBase64(file:Blob,callBack:any){
    let reader = new FileReader();
    if(file){
        reader.readAsDataURL(file);
    }    
    reader.onload = function () {
        callBack(reader.result)
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}

