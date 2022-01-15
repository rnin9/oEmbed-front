import './App.css';
import axios from 'axios';
import { Input, Divider } from 'antd';
const { Search } = Input;

function App() {

  const onSearch = (value) => {
    console.log(value)
    axios.get(`http://localhost:3001/data?url=${value}`).then((res) => { console.log(res) }).catch((err) => {
      console.log(err)
    })

  }
  return (
    <div className='outerFrame'>
      <header className='headContent'>
        <h1>oEmbed Test</h1>
        <Search placeholder="Input URL Scheme text" onSearch={onSearch} enterButton="확인" color='#f1f3f4' />
      </header >
      <content>
      
      </content>
      <footer>
        <Divider />
      </footer>
    </div >
  );

}


export default App;
