import React from 'react';
//Components
import { Cards, Chart, CountryPicker } from './components';
//stylesheet
import styles from './App.module.css';
//api
import { fetchData } from './api/index';
//top image
import coronaImage from './images/covid.png'


class App extends React.Component {
    state = {
        data: {},
        country:''
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({data: fetchedData})  
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData( country );
        this.setState({ data: fetchedData, country: country });
    }

    render() {
        const {data, country} = this.state
        return(
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt='COVID-19-TRACKER'/>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country}/>
            </div>
        )      
    }
}


export default App;