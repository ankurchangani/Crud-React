const getdata  = () => {


    let data = JSON.parse(localStorage.getItem('Storage'));

    if(!data){
        return[]
    }else{
        return data
    }
}  

export default getdata