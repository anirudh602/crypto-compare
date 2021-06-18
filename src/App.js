import React , {useState, useEffect} from 'react'



import Input from './components/Input'
import MidHead from './components/MidHead'
import CoinInfo from './components/CoinInfo'
import getList from './util/getList'
import Jumbo from './components/Jumbo'
import CoinsList from './components/CoinsList'
import LoadingSpinner from './util/LoadingSpinner'

const App = () => {
  
  const [coin, setCoin] = useState('Bitcoin');
  const [list, setList] = useState();
  // const [load, setLoad] = useState(false);

 
  const getCoin = (c) => {
    console.log(c);
    setCoin(c);
  }
  
    useEffect(() => {
        const fun = async () => {
          
          const r = await getList();
          
          setList(r);
          
        };
    
        fun();
      }, []);


  return (
    <div className = "mainn">
      <Jumbo/>
      {!list && <LoadingSpinner asOverlay />}
      {list && <Input onSubmit = {getCoin} list = {list}/>}
      
      <div className = "container-sm" ><hr></hr>
      {coin && list &&  <CoinInfo coin = {coin} list = {list}/>}
      {coin && list && <MidHead coin = {coin}/>}
      {coin && list && <CoinsList list = {list} coin = {coin}/>}
      </div>
    </div>
  )
}

export default App
