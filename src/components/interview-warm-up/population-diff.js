import axios from 'axios'
import { useEffect, useState } from 'react'

export default function App() {
  const [stats, setStats] = useState([])

  useEffect(() => {
    axios
      .get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
      .then((res) => {
        if (res.status === 200) {
          setStats(res.data.data.sort((a, b) => a.Year - b.Year))
        }
      })
  }, [])

  return (
    <div>
      <div style={{ fontSize: 20, marginBottom: 20 }}>
        API: https://datausa.io/api/data?drilldowns=Nation&measures=Population
      </div>
      {stats.map((st, stIdx) => (
        <div key={stIdx}>
          Year {st.Year}: {st.Population}{' '}
          {stIdx > 0 && (
            <span style={{ color: 'green' }}>
              (+ {st.Population - stats[stIdx - 1].Population})
            </span>
          )}
        </div>
      ))}
    </div>
  )
}
