import { useLocalStorage } from './components/custom-hooks/use-localStorage'

export default function CustomHookUsage() {
  const [myFavFood, setMyFavFood] = useLocalStorage('parent-food', 'lapsha')
  const [myCar, setMyCar] = useLocalStorage('car', 'camry')

  return (
    <div>
      App {myFavFood}{' '}
      <button
        onClick={() => {
          setMyFavFood('tsuivan')
        }}
      >
        Change to Tsuivan
      </button>
      <br />
      {myCar}
      <button onClick={() => setMyCar('Tesla')}>Change my car</button>
      <br />
      <hr />
      <DirectChild />
    </div>
  )
}

const DirectChild = (props) => {
  const [favFood, setFavFood] = useLocalStorage('child-food', 'budaatai huurga')

  return <div>and, mine is {favFood}</div>
}
