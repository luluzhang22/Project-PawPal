import React from 'react';
import md5 from 'md5';


const LoginOrSignUp = ({userLogin, userForm, login, onChangeForm, onSignUp}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onChangeForm({...userForm, submitted: true})
        if (userForm.email && userForm.password) {
            const md5Password = md5(userForm.password);
            if (!userForm.showLogin) {
                if (userForm.name) {
                    const {name, email} = userForm;
                    onSignUp({name, password: md5Password, email});
                }
            } else {
                login(userForm.email, md5Password);
            }
        }
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        onChangeForm({...userForm, [name]: value});
    };

    const generateForm = (formValue, formName, inputType, inputName) => {
        return (
            <div className={'form-group'
            + (userForm.submitted && !formValue ? 'has-error' : '')}>
                <label>{formName}: </label>
                <input type={inputType} className={'form-control'} name={inputName} onChange={handleChange}
                       value={formValue}/>
                {checkInput(formValue, formName)}
            </div>)
    };

    const checkInput = (input, name) => {
        if (userForm.submitted && !input) {
            return (<div className='help-block'>Please enter your {name}</div>);
        }
    };

    const exchangeForm = () => {
        onChangeForm({...userForm, name: '', email: '', password: '', submitted:false, showLogin:!userForm.showLogin});
    };

    const title = userForm.showLogin ? 'Login' : 'Sign Up';
    return (
        <div className='user-login-register'>
            {!userLogin.isLoginSuccess &&
            <div>
                <h2>{title}</h2>
                <form onSubmit={handleSubmit}>
                    {!userForm.showLogin && generateForm(userForm.name, 'User Name', 'text', 'name')}
                    {generateForm(userForm.email, 'Email', 'email', 'email')}
                    {generateForm(userForm.password, 'Password', 'password', 'password')}
                    <div className='form-group'>
                        <button className='btn btn-primary'>{title}</button>
                    </div>

                    {userForm.showLogin && userLogin.isLoginPending && <div>Log in...</div>}
                    {userForm.showLogin && userLogin.isLoginSuccess && <div>Welcome back!</div>}
                    {userForm.showLogin && userLogin.loginError && <div>{userLogin.loginError.message}</div>}
                </form>
                {userForm.showLogin ? <label>No account? <button onClick={exchangeForm}>Go to sign up!</button></label>
                    : <label>Has an account? <button onClick={exchangeForm}>Go to login!</button></label> }
            </div>
            }
        </div>
    )
};


export default LoginOrSignUp;
