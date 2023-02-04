import axios from 'axios'
import { useEffect } from 'react'
import { useReducer } from 'react'

const reduceUsers = (currState, action) => {
  switch (action.type) {
    case 'initial_fetch':
      return action.payload
    case 'update_emp_info':
      return currState.map((user) => {
        if (user.id === action.payload.userId) {
          return {
            ...user,
            employment: {
              ...user.employment,
              title: action.payload.newTitle,
            },
          }
        } else {
          return user
        }
      })
    case 'change_subs':
      return currState.map((user) => {
        if (
          user.firstName === action.payload.userInfo.firstName &&
          user.lastName === action.payload.userInfo.lastName
        ) {
          return {
            ...user,
            subscription: {
              ...user.subscription,
              plan: action.payload.newSubscriptionPlan,
            },
          }
        } else {
          return user
        }
      })
    case 'new_property_citiesLivedIn':
      return currState.map((user) => {
        return {
          ...user,
          address: {
            ...user.address,
            citiesLivedIn: [user.address.city],
          },
        }
      })
    default:
      return currState
  }
}

const UseReducerPractice = () => {
  // declare an useReducer state
  const [users, updateUsers] = useReducer(reduceUsers, [])

  // https://random-data-api.com/api/v2/users?size=5
  // fetch the api above and save it in useReducer with
  useEffect(() => {
    axios.get('https://random-data-api.com/api/v2/users?size=5').then((res) => {
      if (res.status === 200) {
        updateUsers({ type: 'initial_fetch', payload: res.data })
      }
    })
  }, [])

  return (
    <div>
      {/* Add a button that changes the employement info of user with id with {3rd person's id} */}
      <button
        onClick={() =>
          updateUsers({
            type: 'update_emp_info',
            payload: { userId: users[0]?.id, newTitle: 'Developer' },
          })
        }
      >
        Update 3rd user's employement info
      </button>
      {/* Add a button that changes the subscription plan of user whose firstName and lastName are the names of the 4th person */}
      <button
        onClick={() => {
          updateUsers({
            type: 'change_subs',
            payload: {
              userInfo: {
                firstName: users[0]?.firstName,
                lastName: users[0]?.lastName,
              },
              newSubscriptionPlan: 'Silver Plan',
            },
          })
        }}
      >
        Update Subscription Plan
      </button>
      {/* Add a button that adds a citiesLivedIn property, and add the current address's city as the first city  */}
      <button
        onClick={() => {
          updateUsers({
            type: 'new_property_citiesLivedIn',
            payload: {},
          })
        }}
      >
        Add citiesLivedIn prop
      </button>
      {/* DO NOT find the users with their indices, pass the identifier data via payload */}
      {/* -------------------- */}
      {/* FOR LATER PRACTICE: */}
      {/* Add a button that sorts the users by their first name in ascending order A-Z  */}
      {/* -------------------- */}
      {/* Add a button that finds/filters all the genders. Make sure to remove the duplicates. New array should only contain the genders, not whole date of user. Ex: ['Genderfluid', 'Polygender'] */}
      {/* -------------------- */}
      {/* Add a button that sorts the users by their first name in ascending order A-Z  */}
      {/* -------------------- */}
      {/* Add a button that adds a new property called age, and its value should be the difference between year of date_of_birth and 2023 */}
      {/* -------------------- */}
      {/* Add a button that finds all the users who have "Student" subscription plan. */}
      {/* -------------------- */}
      {/* Add a button that finds all the users whose firstName starts with vowel. */}
      {/* -------------------- */}
      {/* Add a button that finds all the users who were born before 1970. */}
      {/* -------------------- */}
      {/* Add a button that finds all the users whose employment title consists of 2 words. */}
      {/* -------------------- */}
      {/* Add a button that finds all the users whose first name length is less than 5 */}
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  )
}

// reducer function of the useReducer

export default App
