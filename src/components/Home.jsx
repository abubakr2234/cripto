import React, { useState } from 'react';
import CryptoTile from './CryptoTile';
import bitCoin from './bitCoin';
import Saved from './Saved';
import crip from './video/crip.mp4';

import btc from '../assets/bitcoin.png';
import eth from '../assets/blockchain.png';
import dcd from '../assets/dogecoin.png';

const Home = () => {
    const tiles = [
        { id: 1, icon: btc, name: 'BTC', rate: 470009},
        { id: 2, icon: eth, name: 'ETH', rate: 3231},
        { id: 3, icon: dcd, name: 'DCD', rate: 0.27},
        

    ];

    const [selectedTile, setSelectedState] = useState(tiles[0]);
    const [list, setList] = useState([]);

    const handleSelect = (data) => {
        setSelectedState(data);
    };

    const buildList = (list) => {
        setList(list);
    }

    
   

    return (
    <div className="container">
        <video autoPlay loop muted style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1"
        }}>
            <source src={crip} type="video/mp4" />
        </video>
        <div className="row">
            <div className="col-6">
                <div className="d-flex">
                    {tiles.map((coin) => (
                        <CryptoTile 

                            key={coin.id} 
                            data={coin}  
                            onClick={handleSelect}
                            selected={coin.id === selectedTile.id}  

                        />
                    ))}
                </div>
                <SaveForm data={selectedTile} onSaved={buildList} />
            </div>
            <div className="col-6">
                <Transactions list={list}/>
            </div>
        </div>
    </div>
    )
};

export default Home;