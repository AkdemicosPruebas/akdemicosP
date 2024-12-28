import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import "../Styles/Login.css"

const Login = () => {

    const { register, handleSubmit,reset,formState:{ errors },watch} = useForm();
    const password = React.useRef({});
    password.current = watch('password', '');
    
    const [Registrarse, setRegistrarse] = useState(false)

    const submit = data => {
		console.log(data)
        reset(
            {   
                userName:"",
                lastName:"",
                phone:"",
                email:"",
                password:"",
                passwordConfirmation:""
            }
        )
    }

    const handleRegister=()=>{
        setRegistrarse(!Registrarse)
        console.log(Registrarse)
    }

    
 
    return (
     
        <div className='login'>
            {Registrarse ? (
            <div className='conten-form-register'>
            <form className='formulario-register' onSubmit={handleSubmit(submit)}>
                    <div className='atras-register'>
                        <i onClick={handleRegister}  className='bx bx-arrow-back'></i>
                    </div>
                <div className='logo_form'>
                    <img src="/Ak.svg" alt="Logo" />
                </div>
                <div className='Registrar'>
                    <h3>Crear una cuenta</h3>
                </div>
                    <div className='register-1'>                  
                    
                        <div className='datos'>
                            <div>
                            <input className='input_register' placeholder='Nombres' type="text" {...register('userName', {required: 'Este campo es requerido', minLength: {value: 3,
                            message: 'El nombre de usuario debe tener al menos 3 caracteres', }, })} />{errors.userName && <p className='error'>{errors.userName.message}</p>}
                            </div>                
                            <input className='input_register' placeholder='Apellidos' type='text' id='password-input' {...register("lastName")} />
                        </div>                               
                                            
                        <input className='input_register' placeholder='Celular' type="tel" {...register('phone', { required: 'Este campo es requerido', pattern: {
                            value: /^\+(?:[0-9] ?){6,14}[0-9]$/, message: 'Ingresa un número de teléfono válido (formato +xx xxxxxxxxxx )', }, })} />
                            {errors.phone && <p className='error'>{errors.phone.message}</p>}                       
                
                        <input className='input_register' placeholder='Email' type="email" {...register('email', {required: 'Este campo es requerido', pattern: { value: /\S+@\S+\.\S+/,
                            message: 'Ingresa un correo electrónico válido',},})}/>{errors.email && <p className='error'>{errors.email.message}</p>}
                        
                        <input className='input_register' placeholder='Password' type="password"  {...register('password', {required: 'Este campo es requerido', minLength: {
                            value: 6, message: 'La contraseña debe tener al menos 6 caracteres', }, })}/> {errors.password && <p className='error'>{errors.password.message}</p>}

                        <input className='input_register' placeholder='Confirma tu contraseña' type="password" {...register('passwordConfirmation', { required: 'Este campo es requerido',
                            validate: (value) => value === password.current || 'Las contraseñas no coinciden', })} /> {errors.passwordConfirmation && <p className='error'>{errors.passwordConfirmation.message}</p>}

                        <button className='boton_login' type="submit">Registrarse</button>
                        
                    </div>                            
            </form>
            </div>):(
            <div className='conten-form'>
                <form className='formulario' onSubmit={handleSubmit(submit)}>
                    <div className='logo_form'>
                        <img src="/Ak.svg" alt="Logo" />
                    </div>
                    <div className='iniciar'>
                        <h3>Iniciar sesión</h3>
                    </div>
                    
                    <div className='info'>
                            <input placeholder='Email' type='email' id='email-input' {...register("email")} />
                            <input placeholder='Contraseña' type='password' id='password-input' {...register("password")} />
                    </div>				

                    <h6 className='link'>¿Olvidaste tu contraseña?</h6>
                    
                    <button className='boton_login' type="submit">Acceder</button>
                    <div className='tienes'><h6>¿No tienes cuenta?</h6><h6 className='link' onClick={handleRegister}> Crea una.</h6> </div>
                    
                </form>
                </div> )}                        
        </div>		
    )
  
}

export default Login
