export default function Login() {
  return (
    <div className='Login'>
      <div className='login--menu'>
        <div className='login--menu_info'>
          <img
            src='src/images/securoserv-logo.png'
            className='login--menu_logo'
          />
          <h3 className='login--menu_login'>PLEASE LOG IN</h3>
          <span className='login--menu_span'>
            Username
            <input
              className='login--menu_input'
              type='text'
              placeholder='Retr080s'
            ></input>
          </span>
          <span className='login--menu_span'>
            Password
            <input
              className='login--menu_input'
              type='password'
              placeholder='********'
            ></input>
          </span>
          <div className='login--menu_bottom'>
            <h4 className='login--menu_bottom-text-version'>VERSION 1.2.5</h4>
            <button className='login--menu_bottom-button'>Log in</button>
          </div>
        </div>
      </div>
    </div>
  );
}
