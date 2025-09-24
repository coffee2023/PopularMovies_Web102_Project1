import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import ToyStory from './images/ToyStory.jpeg'
import Coraline from './images/Coraline.jpeg'
import Up from './images/Up.jpeg'
import MonstersInc from './images/MonstersInc.jpeg'
import Ratatouille from './images/Ratatouille.jpeg'
import Zootopia from './images/Zootopia.jpeg'
import Cars from './images/Cars.jpeg'
import Rio from './images/Rio.jpeg'
import Brave from './images/Brave.jpeg'
import Frozen from './images/Frozen.jpeg'
import Shrek from './images/Shrek.jpeg'
import PussInBoots from './images/PussInBoots.jpeg'
function App() {
  return (
    <>
      <h1>🎬🍿 Popular Movies 🎬🍿</h1>
      <div className= "cardsContainer">
        <Card title="Toy Story" releaseDate="1995" img={ToyStory} link ="https://www.imdb.com/title/tt0114709/"/>
        <Card title="Coraline" releaseDate="2009" img={Coraline} link="https://www.imdb.com/title/tt0327597/?ref_=fn_all_ttl_1"/>
        <Card title="Up" releaseDate="2009" img={Up} link="https://www.imdb.com/title/tt1049413/"/>
        <Card title="Monsters, Inc." releaseDate="2001" img={MonstersInc} link="https://www.imdb.com/title/tt0198781/?ref_=fn_all_ttl_1"/>
        <Card title="Ratatouille" releaseDate="2007" img={Ratatouille} link="https://www.imdb.com/title/tt0382932/?ref_=nv_sr_srsg_0_tt_6_nm_2_in_0_q_ratat"/>
        <Card title="Zootopia" releaseDate="2016" img={Zootopia} link="https://www.imdb.com/title/tt2948356/?ref_=fn_all_ttl_1"/>
        <Card title="Cars " releaseDate="2006"  img={Cars} link="https://www.imdb.com/title/tt0317219/?ref_=fn_all_ttl_1"/>
        <Card title="Rio" releaseDate="2011" img={Rio} link="https://www.imdb.com/title/tt1436562/?ref_=fn_all_ttl_1"/>
        <Card title="Brave" releaseDate="2012" img={Brave} link="https://www.imdb.com/title/tt1217209/?ref_=fn_all_ttl_1"/>
        <Card title="Frozen" releaseDate="2013" img={Frozen} link="https://www.imdb.com/title/tt2294629/?ref_=nv_sr_srsg_2_tt_6_nm_0_in_0_q_frozen"/>
        <Card title="Shrek" releaseDate="2001"img={Shrek} link="https://www.imdb.com/title/tt0126029/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_shrek"/>
        <Card title="Puss in Boots" releaseDate="2011" img={PussInBoots} link="https://www.imdb.com/title/tt0448694/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_puss%2520in%2520boots"/>
      </div>
    </>
  )
}

export default App
