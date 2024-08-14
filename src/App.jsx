import { useEffect, useState } from 'react'
import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import RouterConfig from './config/RouterConfig'
import Loading from './components/Loading'
//import Home from './components/Home'
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux'
import { calculateBasket, setDrawer } from './redux/slices/basketSlice'

function App() {
  
  const {products, drawer, totalAmount} = useSelector((store) => store.basket);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateBasket());
  }, [])
  
  return (
    <div>
      <PageContainer>
        <Loading/>
        <Header/>
        <RouterConfig/>
        <Drawer
        anchor="right"
        open={drawer}
        onClose={() => dispatch(setDrawer())}
        >
        {
          products && products.map((product) => {
            return (
              <div key={product.id}>
                <div className='flex-row' style={{padding:"14px"}}>
                  <img src={product.image} style={{paddingRight:'15px'}} width={50} height={50}/>
                  <p style={{width:'320px', marginRight:'5px'}}>{product.title} ({product.count})</p>
                  <p style={{fontWeight:'bold', marginRight:'10px', width:'60px'}}>{product.price} TL</p>
                  <button style={{padding:'5px', borderRadius:'5px', backgroundColor:'red',border:'none', color:'wihte', width:'50px'}}>SİL</button>
                  <hr />
                </div>
                
              </div>
            )
          })
        }
        <div>
                  <h2>
                    {totalAmount}
                  </h2>
          </div>
        </Drawer>
      </PageContainer>
    </div>
  )
}

export default App
