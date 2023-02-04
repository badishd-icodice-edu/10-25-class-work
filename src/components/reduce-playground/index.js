export default function ReducePlayground() {
    const findSum = (arrNums) => {
      console.log('arrNums: ', arrNums)
      const sum = arrNums.reduce((currState, num) => {
        console.log('currState: ', currState, ' + ', 'num: ', num)
        return currState + num
      }, 0)
      console.log(sum)
    }
  
    const findSumWithLoop = (arrNums) => {
      let sum = 0
      for (let i = 0; i < arrNums.length; i++) {
        sum = sum + arrNums[i]
      }
      console.log(sum)
    }
  
    const findTotalAge = (peopleArray) => {
      const totalAge = peopleArray.reduce((currAge, { age = 0 }) => {
        return currAge + age
      }, 0)
      console.log(totalAge)
    }
  
    // const groupPeople = (peopleArr) => {
    //   const grouped = peopleArr.reduce(
    //     (curr, per) => {
    //       if (per.isAdult) {
    //         // per.isAdult === true
    //         return {
    //           ...curr,
    //           adults: [...curr.adults, per],
    //         }
    //       } else {
    //         return {
    //           ...curr,
    //           minors: [...curr.minors, per],
    //         }
    //       }
    //     },
    //     {
    //       adults: [],
    //       minors: [],
    //     },
    //   )
    //   console.log(grouped)
    // }
  
    const groupPeople = (peopleArr) => {
      const grouped = peopleArr.reduce(
        (curr, per) => ({
          ...curr,
          [per.isAdult ? 'adults' : 'minors']: [
            ...curr[per.isAdult ? 'adults' : 'minors'],
            per,
          ],
        }),
        {
          adults: [],
          minors: [],
        },
      )
      console.log(grouped)
    }
  
    /**
     * {
     *    adult: [],
     *    minors: []
     * }
     */
  
    return (
      <div>
        {/* <button onClick={() => findSum([22, 421890, 123])}>Find Sum</button>
        <button onClick={() => findSumWithLoop([22, 421890, 123])}>Find Sum - for loop</button> */}
        {/* <button onClick={() => findTotalAge(people)}>Find total age</button> */}
        <button onClick={() => groupPeople(people)}>Group People</button>
      </div>
    )
  }
  
  const people = [
    { name: 'haha', age: 20, isAdult: true },
    { name: 'qwer', age: 30, isAdult: true },
    { name: 'jkl', age: 12, isAdult: false },
    { name: 'oio', age: 10, isAdult: false },
  ]
  