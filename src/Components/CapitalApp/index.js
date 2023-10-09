import React, {useState} from 'react'
import './index.css'

const countryAndCapitalsList =[
    {
        id:'NEW-DELHI',
        capitalDisplayText:'New Delhi',
        country:'India',
    },

    {
        id:'LONDON',
        capitalDisplayText:'London',
        country:'United Kingdom',
    },

    {
        id:'PARIS',
        capitalDisplayText:'Paris',
        country:'France',
    },

    {
        id:'KHATHMAND',
        capitalDisplayText:'Kathmand',
        country:'Nepal',
    },

    {
        id:'HELSINKI',
        capitalDisplayText:'Helsinki',
        country:'Finland',
    },

    // {
    //     id:'NEW-DELHI',
    //     capitalDisplayText:'New Delhi',
    //     country:'India',
    // },

    // {
    //     id:'NEW-DELHI',
    //     capitalDisplayText:'New Delhi',
    //     country:'India',
    // },
]


const CapitalsApp =() =>{
    const[activeCapitalId, setActiveCapitalId] = useState(countryAndCapitalsList[0].country)
    
    const onChangeCapital = event => {
        const countryValue = countryAndCapitalsList.filter(
          eachItem => eachItem.id === event.target.value
        )
        //console.log(countryValue)
        setActiveCapitalId( countryValue[0].country)
      }

    return(
        <div className="app-container-2">
            <div className="capitals-container">
                <h1 className="head">Countries and Capitals</h1>

                <div className="question-container">
                    <select className="capital-select" onChange={onChangeCapital} id="capitalsDropDown">
                      {countryAndCapitalsList.map(eachCapital => (
                     <option key={eachCapital.id} value={eachCapital.id}>
                      {eachCapital.capitalDisplayText}
                   </option>
                      ))}
                    </select>
                    <p className="question">is capital of which country?</p>
                </div>
                <p className="country">{activeCapitalId}</p>
            </div>
        </div>
    )
}

export default CapitalsApp;