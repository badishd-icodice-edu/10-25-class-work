import UserAccount from './4-1-comp'

export default function UserAcounts(props) {
  return (
    <div>
      UserAccounts
      <UserAccount firstName={props.firstName}/>
    </div>
  )
}
