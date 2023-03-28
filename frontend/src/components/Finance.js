import {useState,useEffect} from "react";



const  Finance=()=>{
    

const [data,setData]=useState({});
const [err,setErr] =useState(null);
const [loaded,setLoaded] =useState(false);
const [stockdata,setStockdata]=useState([]);
const [cryptodata,setCryptodata]=useState([]);
const [mfdata,setMfdata]=useState([]);




useEffect(() => {
    const key="4e444c14174747a9a3817ddcd5b050f6";
    const mfurl="https://api.twelvedata.com/mutual_funds/list?apikey=4e444c14174747a9a3817ddcd5b050f6";
    const cryptourl="https://api.twelvedata.com/cryptocurrencies";
    const stockurl="https://api.twelvedata.com/stocks";
    const fetchstockdata = async () => {
      try {
        const stockresponse = await fetch(stockurl);
        const stockjson = await stockresponse.json();
        console.log("Stocks data");
        console.log(stockjson);

        setStockdata(stockjson.data.slice(0, 15));
        
        
        setErr(null);
        setLoaded(true);
    } 
    catch (error) {

        console.log("error", error);
        setErr(error);
        setLoaded(false);

      }
    };

    fetchstockdata();


    
    const fetchcryptodata = async () => {
      try {
        const cryptoresponse = await fetch(cryptourl);
        const cryptojson = await cryptoresponse.json();
        console.log("Scrypto data");
        console.log(cryptojson);

        setCryptodata(cryptojson.data.slice(0, 15));
        
        
        setErr(null);
        setLoaded(true);
    } 
    catch (error) {

        console.log("error", error);
        setErr(error);
        setLoaded(false);

      }
    };

    fetchcryptodata();

    const fetchmfdata = async () => {
        try {
          const mfresponse = await fetch(mfurl);
          const mfjson = await mfresponse.json();
          console.log("mf data");
          console.log(mfjson);
  
          setMfdata(mfjson.result.list.slice(0, 10));
          
          
          setErr(null);
          setLoaded(true);
      } 
      catch (error) {
  
          console.log("error", error);
          setErr(error);
          setLoaded(false);
  
        }
      };
  
      fetchmfdata();
}, []);


  
  if (!loaded) return (
    <div className="bg-neutral-900">
        <h1 className="text-white font-poppins text-[30px] sm:ml-[42%] ml-[34%]"> LOADING.... </h1> 
        
    </div> 
)
    if(err){
        return(
            <div className="bg-neutral-900 ">
                <h1 className="text-[30px] font-poppins  text-white">{err}</h1>
                <button className="bg-white  ml-[37%] pl-[2%] pr-[2%] rounded-xl" onClick={() => window.location.reload(false)}>Reload</button>
            </div>
        )

    }

    return(
        <div className="">
            <a href="/home">
            <h1 className="text-3xl text-white">STOCKS LIST: </h1>
            <h1 className="text-xl text-stone-300">To make stock exchange or get detailed review Get Registered</h1>
            <div className="flex">
            <h1 className="text-xl text-white ml-[2%]">SYMBOL: </h1>
            
            <h1 className="text-xl text-white ml-[10%]">COMPANY NAME: </h1>
            
           

            <h1 className="text-xl text-white 2xl:ml-[10%] ml-[30%]">STOCK TYPE:</h1>
            
            </div>
            
            <div className="flex">

            <ul className="ml-[2%]">
                {stockdata.map((nav) => (
                <h1 className="text-white"> {nav.mic_code}</h1>
                ))}
            </ul>

            
            <ul className="ml-[10%]">
                {stockdata.map((nav) => (
                <h1 className="text-white"> {nav.name}</h1>
                ))}
            </ul>


            <ul className="ml-[10%]">
                {stockdata.map((nav) => (
                <h1 className="text-white"> {nav.type}</h1>
                ))}
            </ul>
            </div>
            <br></br>
            <br></br>

            <h1 className="text-3xl text-white">CRYPTO LIST: </h1>
            <h1 className="text-xl text-stone-300">To make CRYPTO exchange or get detailed DATA Get Registered</h1>
            <div className="flex">
            <h1 className="text-xl text-white ml-[2%]">SYMBOL: </h1>
            
            <h1 className="text-xl text-white ml-[10%]">CRYPTO BASE: </h1>
            
           

            <h1 className="text-xl text-white ml-[10%]">CRYPTO QUOTE:</h1>
            
            </div>
            
            <div className="flex">

            <ul className="ml-[2%]">
                {cryptodata.map((nav) => (
                <h1 className="text-white"> {nav.symbol}</h1>
                ))}
            </ul>

            
            <ul className="2xl:ml-[10%] ml-[12%]">
                {cryptodata.map((nav) => (
                <h1 className="text-white"> {nav.currency_base}</h1>
                ))}
            </ul>


            <ul className="2xl:ml-[30%] ml-[14%]">
                {cryptodata.map((nav) => (
                <h1 className="text-white"> {nav.currency_quote}</h1>
                ))}
            </ul>
            </div>
            <br></br>
            <br></br>
            <h1 className="text-3xl text-white">MUTUAL FUNDS LIST: </h1>
            <h1 className="text-xl text-stone-300">To make MUTUAL FUNDS exchange or get detailed DATA Get Registered</h1>
            <div className="flex">
            <h1 className="text-xl text-white ml-[2%]">SYMBOL: </h1>
            
            <h1 className="text-xl text-white ml-[6%]">MUTUAL FUNDS NAME: </h1>
            
           

            <h1 className="text-xl text-white ml-[26%]">EXCHANGE:</h1>

            
            </div>
            
            <div className="flex">

            <ul className="ml-[2%]">
                {mfdata.map((nav) => (
                <h1 className="text-white"> {nav.symbol}</h1>
                ))}
            </ul>

            
            <ul className="2xl:ml-[6%] ml-[4%]">
                {mfdata.map((nav) => (
                <h1 className="text-white"> {nav.name}</h1>
                ))}
            </ul>


            <ul className="2xl:ml-[30%] ml-[10%]">
                {mfdata.map((nav) => (
                <h1 className="text-white"> {nav.currency}</h1>
                ))}
            </ul>


           


            
            </div>



            

            



            </a>

       
        </div>
    )
}
export default Finance;