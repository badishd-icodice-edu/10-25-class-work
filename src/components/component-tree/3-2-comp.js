export default function SomeLabel(props) {
  return (
    <div>
      SomeLabel
      <spanc style={{ backgroundColor: 'blue', color: 'white' }}>
        {props.firstName}
      </spanc>
    </div>
  )
}
