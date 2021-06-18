import axios from 'axios'

const getList = async () => {

 
    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR";
    
    console.log(url);

    try{
        const response = await axios.get(url,{
            "method" : "GET",
            "headers" : {
                "Access-Control-Allow-Origin": "*",
                
                'Access-Control-Allow-Methods': 'GET'

            }

        } )
        console.log(response.data)
        console.log(typeof response.data.data)
        return response.data;
        
    }

    catch(error){
        console.log(error);
    }



}

const xxx = async () => {
    const a = await getList();
    return a;
}

export default xxx;