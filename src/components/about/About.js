import React, { Component } from 'react'
import './About.css'

import SimpleMap from './map/SimpleMap'
import shell1 from '../../assets/img/shell.svg'
import shell2 from '../../assets/img/shell2.svg'
import shell3 from '../../assets/img/shell3.svg'
export default class About extends Component {

    componentDidMount() {
        this.refs.aboutTop.scrollIntoView();
    }

  render() {
    let flamingoLocationTable = speciesLocation.map((item, index) => {
        return(
            <tr key={index}>
            <td>{item.species}</td>
            <td>{item.location}</td>
            </tr>
          )
      })

    let scientificClassification = flamingoClassification.map((item, index) => {
        return (
            <li key={index}>{item}</li>
        )
    })

    return (
      <div className="about animated slideInLeft gridAbout" ref="aboutTop">

        <div className="flamingoDefinition">
            <h1>Flamingo</h1>
            <i>/fləˈmɪŋɡəʊ/</i>
            <p>A tall wading bird with mainly pink or scarlet plumage and long legs and neck. It has a heavy bent bill that is held upside down in the water in order to filter-feed on small organisms.</p>
        </div>

              <div className="flamingoClassification"> 
            <h1>Scientific classification</h1>
            <ul>
                {scientificClassification}
            </ul>
        </div> 
            <div className="flamingoLocation">
            <table>
                <tbody>
                <tr>
                    <th><h1>Species</h1></th>
                    <th><h1>Geographic location</h1></th>
                </tr>
                {flamingoLocationTable}
                </tbody>
            </table>
        </div>
        <SimpleMap />
      </div>
    )
  }
}


let flamingoClassification = ["Kingdom: Animalia", "Phylum: Chordata", "Class: Aves", "Order: Phoenicopteriformes", "Family: Phoenicopteridae"];

let speciesLocation = [{
    species: "Greater flamingo (Phoenicopterus roseus)",
    location: "Parts of Africa, S. Europe and S. and SW Asia (most widespread flamingo)."
},
{
    species: "Lesser flamingo (Phoeniconaias minor)",
    location: "Africa (e.g. Great Rift Valley) to NW India (most numerous flamingo)."
},{
    species: "Chilean flamingo (Phoenicopterus chilensis)",
    location: "Temperate S. South America."
},{
    species: "James's flamingo (Phoenicoparrus jamesi)",
    location: "High Andes in Peru, Chile, Bolivia and Argentina."
},{
    species: "Andean flamingo (Phoenicoparrus andinus)",
    location: "High Andes in Peru, Chile, Bolivia and Argentina."
},{
    species: "American flamingo (Phoenicopterus ruber)",
    location: "Caribbean islands, Caribbean Mexico, Belize, Venezuela, and Galápagos Islands."
}]
