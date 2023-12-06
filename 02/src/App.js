import './App.css';
import users from './users.json';
import formData from './formData.json';

function renderUser(user) {
  if (user.gender === 'Female') {
    return (
      <div className='femaleStyle' key={user.id}>
        <p >{user.first_name + '  ' + user.last_name}</p>
        <img src={user.avatar}></img>
        <p>{user.gender}</p>

      </div>
    )
  } else {
    return (
      <div className='maleStyle' key={user.id}>
        <p >{user.first_name + '  ' + user.last_name}</p>
        <img src={user.avatar}></img>
        <p>{user.gender}</p>
      </div>
    )
  }


}
export function RenderUsers() {
  return (
    <div className='container'>
      {users.map((user) => {
        return renderUser(user);
      })}
    </div>
  )
}


function renderTextInput(data) {
  return (

    <label key={data.id} for={data.name}>
      <p>{data.label}</p>
      <input type={data.type} placeholder={data.placeholder} name={data.name} id={data.name} />
    </label >

  )
}

function renderSelected(data) {
  return (
    <label key={data.id}>
      <p>{data.label}</p>
      <select name={data.name} id={data.id} >
        {data.options.map((item) => (
          <option label={item.label}></option>
        ))}
      </select>
    </label>

  )
}

function renderRadio(data) {
  return (
    <fieldset key={data.id} className='fieldset1'>
      <legend>select your gender</legend>
      {data.options.map((item) => (
        <label>
          <span>{item.value}</span>
          <input type={data.type} name={data.name} />
        </label>
      ))}
    </fieldset>
  )
}

export function RenderForm() {
  return (
    <div className='wrapper'>
      <fieldset className='fieldset2'>
        <legend>Your Infotmation</legend>

        {formData.map((item) => {
          if (item.type === "select") {
            return renderSelected(item)
          } else if (item.type === "radio") {
            return renderRadio(item)
          } else {
            return renderTextInput(item)
          }
        })}
      </fieldset >
    </div>
  );
}


