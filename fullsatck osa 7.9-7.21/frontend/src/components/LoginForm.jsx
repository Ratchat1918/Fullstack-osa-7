const LoginForm = ({
  handleSubmit,
  handleUsernameChange,
  handlePasswordChange,
  username,
  password
}) => {
  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" data-testid="username" value={username} onChange={handleUsernameChange}/>
        </div>
        <div>
          <input data-testid="password" type="password" value={password} onChange={handlePasswordChange}/>
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  )
}

export default LoginForm