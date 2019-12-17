import React, { Component } from "react";
import { YMaps, Map } from 'react-yandex-maps';

class CountryMap extends Component {

   render = () => {
      return (
         <div style={{height:'333px'}}>
            <YMaps>
               <Map state={{ center: [this.props.lat, this.props.lng], zoom: 6.5,}} width={"100%"} height={"330px"}/>
            </YMaps>
         </div>
      )
   }
};

export default CountryMap;