import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  // var axios = require('axios');
  const handleClick = ()=> {
    // const key="32d17419189d78c1820e021b33895a55278b3e670f1938c9";
    // const sid="crewscale1";
    // const token="e5229432bed4ac6e66de25fa5cece7b2970ab48683b90354";
    const from="09742870520";
    const to="08074136872";
    const callerId="09513886363";
    const formUrlEncoded = x =>Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '')

    // const url="https://"+key+":"+token+"@api.exotel.in/v1/Accounts/"+sid+"/Calls/connect";
    // const url = 'https://32d17419189d78c1820e021b33895a55278b3e670f1938c9:e5229432bed4ac6e66de25fa5cece7b2970ab48683b90354@api.exotel.com/v1/Accounts/crewscale1/Calls/connect.json';
    // axios.post(url,
    //   formUrlEncoded({
    //   "From": from,
    //   "To": to,
    //   "CallerId": callerId,
    //   "Record": 'true',
    // }),
    // {
    //     withCredentials: true,
    //     headers: {
    //         "Accept":"application/x-www-form-urlencoded",
    //         "Content-Type": "application/x-www-form-urlencoded"
    //     }
    //   },
    //   )
    // .then((res) => {
    //   console.log(`statusCode: ${res.statusCode}`)
    //   console.log(res)
    // })
    // .catch((error) => {
    //   console.error(error)
    // })
    // var axios = require('axios');
    var qs = require('qs');
    var data = qs.stringify({
      'From': '09742870520',
      'To': '08074136872',
      'CallerId': '+918069450533',
      'Record': 'true'
    });
    var config = {
      method: 'post',
      url: 'https://api.exotel.com/v1/Accounts/crewscale1/Calls/connect.json',
      headers: {
        'Authorization': 'Basic MzJkMTc0MTkxODlkNzhjMTgyMGUwMjFiMzM4OTVhNTUyNzhiM2U2NzBmMTkzOGM5OmU1MjI5NDMyYmVkNGFjNmU2NmRlMjVmYTVjZWNlN2IyOTcwYWI0ODY4M2I5MDM1NA==',
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : data
    };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <button onClick={handleClick}>Call</button>
      </header>
    </div>
  );
}

export default App;
