import axios from 'axios';
import { Input } from 'antd';
const { Search } = Input;

function App() {

  const onSearch = (value) => {
    console.log(value)
    axios.get(`http://localhost:3001/data?url=${value}`).then((res) => { console.log(res) }).catch((err) => {
      console.log(err)
    })

  }
  return (
    <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
  );

}


export default App;
