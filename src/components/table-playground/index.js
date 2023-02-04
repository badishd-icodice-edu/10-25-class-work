import { useEffect, useState } from 'react'

import axios from 'axios'

export default function HTMLTablePlayground() {
  const [banks, setBanks] = useState([])

  useEffect(() => {
    axios.get('https://random-data-api.com/api/v2/banks?size=100').then((res) => {
      if (res.status === 200) {
        setBanks(res.data)
        console.log(res.data)
      }
    })
  }, [])

  return (
    <div style={{ padding: 20 }}>
      Bank List
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Bank Name</th>
            <th>Account #</th>
            <th>Routing #</th>
          </tr>
        </thead>
        <tbody>
            {banks.map(bank => {
                return (
                    <tr key={bank.id}>
                        <td>{bank.id}</td>
                        <td>{bank.bank_name}</td>
                        <td>{bank.account_number}</td>
                        <td>{bank.routing_number}</td>
                    </tr>
                )
            })}
        </tbody>
        {/* <tfoot>
          <tr>
            <th>Title 1</th>
            <th>Title 2</th>
          </tr>
        </tfoot> */}
      </table>
    </div>
  )
}
