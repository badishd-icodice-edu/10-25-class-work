export default function UserAccount(props) {
  return (
    <div>
      UserAccount{' '}
      <spanc style={{ backgroundColor: 'green', color: 'white' }}>
        {props.firstName}
      </spanc>
    </div>
  )
}
