import {useState, useEffect} from 'react'
import Layout from '../components/layout'

export default function Home() {
  // const url = './data.json'
  // const [data, setData] = useState({message:'', data:[]})
  const url = 'http://localhost/wordpress/wp-json/wp/v2/posts'
  const [data, setData] = useState({data:[]})
  const [message, setMessage] = useState('テスト出力')

  useEffect(() => {
    fetch(url)
    .then(res=> res.json())
    .then(res=> setData(res))
  }, []);

  const test = () => {
    console.log(data);
  }

  return (
    <>
      <Layout header="Next.js" title="Top page.">
      <div className="alert alert-primary text-center">
        <h5 className="mb-4">{message}</h5>
        <table className="table bg-white">
          <thead className="table-dark">
            <tr><th>Name</th><th>Mail</th><th>Age</th></tr>
          </thead>
          <tbody>
          {data.data ? console.log('読み込み中') :
            data.map((value, key)=> (
              <tr key={key}>
                <th>{value.id}</th>
                <td>{value.date}</td>
                <td>{value.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </Layout>
    </>
  )
}