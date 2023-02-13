import { useEffect, useReducer } from 'react'

export default function App() {
  const [photos, updatePhotos] = useReducer(
    (curr, { type, data }) => {
      switch (type) {
        case 'initial':
          return {
            ...curr,
            original: data.list,
            filtered: data.list,
          }
        case 'increment':
          return {
            ...curr,
            original: [...curr.original, ...data.list],
            filtered: [...curr.filtered, ...data.list],
          }
        case 'reset':
          return {
            ...curr,
            searchValue: '',
            filtered: curr.original,
          }
        case 'filter':
          return {
            ...curr,
            searchValue: data.searchValue,
            filtered: curr.original.filter((d) =>
              d.title.includes(data.searchValue),
            ),
          }
        default:
          return curr
      }
    },
    {
      searchValue: '',
      original: [],
      filtered: [],
    },
  )

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos', {
      method: 'GET',
    })
      .then((res) => {
        if (res.status === 200) return res.json()
      })
      .then((data) => {
        const slicer = 250
        updatePhotos({ type: 'initial', data: { list: data.slice(0, slicer) } })
        // let count = 1
        // const incInterval = setInterval(() => {
        //   // console.log({ count })
        //   console.log(data.slice(slicer * count, slicer * count + slicer))
        //   updatePhotos({
        //     type: 'increment',
        //     data: { list: data.slice(slicer * count, slicer * count + slicer) },
        //   })
        //   count++
        // }, 1000)
        // console.log(data.length)
        // if (data.length / slicer === count) {
        //   clearInterval(incInterval)
        // }
      })
  }, [])

  return (
    <div>
      <div style={{ fontSize: 20 }}>
        API: https://jsonplaceholder.typicode.com/photos
      </div>
      <input
        style={{ height: 30, width: 500, marginTop: 50 }}
        placeholder="Search by title"
        value={photos.searchValue}
        onChange={(e) =>
          updatePhotos({
            type: e.target.value.length === 0 ? 'reset' : 'filter',
            data: { searchValue: e.target.value },
          })
        }
      />
      <span>Result: {photos.filtered.length}</span>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 10,
        }}
      >
        {photos.filtered.map((p) => (
          <div
            key={p.id}
            style={{
              border: '1px solid black',
              borderRadius: '4px',
              marginTop: 10,
              padding: '3px 10px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img src={p.url} width={25} />
            <span style={{ marginLeft: 5, fontSize: 12 }}>{p.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
