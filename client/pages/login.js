import styles from '../styles/scss/sign-in.module.scss';
import classnames from 'classnames';
import { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { setJwt } from '../components/actions/jwtAction';
import { useDispatch } from 'react-redux';
import Cookie from 'js-cookie';
const Joi = require('@hapi/joi');

const Login = () => {
	const dispatch = useDispatch();

	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ viewPassword, setViewPassword ] = useState(false);
	const [ emailInputEmpty, setEmailInputEmpty ] = useState(true);
	const [ passwordInputEmpty, setPasswordInputEmpty ] = useState(true);
	const [ error, setError ] = useState('');

	const minPasswordLength = 2;

	const signUpSchema = Joi.object({
		email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: [ 'com', 'net' ] } }),
		password: Joi.string().required().min(minPasswordLength)
	});

	const updateEmail = (input) => {
		setEmail(input);
		if (input === '') setEmailInputEmpty(true);
		else setEmailInputEmpty(false);
	};

	const updatePassword = (input) => {
		setPassword(input);
		if (input === '') setPasswordInputEmpty(true);
		else setPasswordInputEmpty(false);
	};

	const checkIfEncodeUriValid = (input) => {
		return encodeURI(input) === input;
	};

	const toCapitalize = (input) => {
		return input.slice(0, 1).toUpperCase() + input.slice(1);
	};

	const loginInformation = async () => {
		const emailUriEncoded = checkIfEncodeUriValid(email);
		const passwordUriEncoded = checkIfEncodeUriValid(password);

		const signUpValidation = signUpSchema.validate({ email, password });

		if (signUpValidation.error) {
			const empty = signUpValidation.error.toString().includes('empty');
			const valid = signUpValidation.error.toString().includes('valid');
			const tooShort = signUpValidation.error.toString().includes('at least');
			const errorField = signUpValidation.error.toString().split('"')[1];
			if (empty) {
				return setError(toCapitalize(errorField) + ' cannot be empty');
			} else if (valid) {
				return setError(toCapitalize(errorField) + ' must be valid');
			} else if (errorField === 'password' && tooShort) {
				return setError(toCapitalize(errorField) + ` must be at least ${minPasswordLength} characters long.`);
			}
		}
		if (!emailUriEncoded || !passwordUriEncoded) {
			return setError('Login information can only have letters and numbers!');
		}

		const data = { email, password };
		const dataString = JSON.stringify(data);
		try {
			const logInRequest = await fetch(process.env.LOGIN_URL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: dataString
			});
			const loginJson = await logInRequest.json();

			if (loginJson.msg === 'Account login was unsuccessful. Please try again.') {
				setError(loginJson.msg);
				return;
			}
			setError('');
			const accessJwtToken = loginJson.access;
			const refreshJwtToken = loginJson.refresh;
			localStorage.setItem('refresh-token', refreshJwtToken);
			dispatch(setJwt(accessJwtToken));
			localStorage.setItem('jwt', accessJwtToken);
			Cookie.set('jwt', JSON.stringify(accessJwtToken));
			Cookie.set('refresh-token', JSON.stringify(refreshJwtToken));
			return (window.location = '/dashboard/workflows');
		} catch (error) {
			console.log(error);
		}
		return;
	};

	const toggleViewPassword = () => {
		setViewPassword(!viewPassword);
	};

	return (
		<main className={styles.loginContainer}>
			<div className={styles.images}>
				<img src="/images/cartoon-youtube.png" alt="Youtube Workflow" />
			</div>
			<div className={styles.loginTxt}>
				<Link href="/">
					<a>
						<img className={styles.logoImg} src="/images/logo.jpg" />
					</a>
				</Link>
				<h1>Welcome Back!</h1>
				<h5>Keep putting out more amazing videos.</h5>
				<div className={styles.signInSection}>
					<div className={styles.emailSignIn}>
						<form>
							<div>
								<h4
									className={classnames({
										[styles.label]: true,
										[styles.labelHover]: !emailInputEmpty
									})}
								>
									Email
								</h4>
								<input
									className={classnames({ [styles.errorInput]: error.includes('Email') })}
									value={email}
									onChange={(e) => updateEmail(e.target.value)}
									type="email"
									required
								/>
							</div>

							<div>
								<h4
									className={classnames({
										[styles.label]: true,
										[styles.labelHover]: !passwordInputEmpty
									})}
								>
									Password
								</h4>
								<input
									className={classnames({ [styles.errorInput]: error.includes('Password') })}
									value={password}
									onChange={(e) => updatePassword(e.target.value)}
									type={viewPassword ? 'text' : 'password'}
									required
								/>
								<img src="/images/eye.png" onClick={() => toggleViewPassword()} alt="Toggle Password" />
							</div>
							<span className={styles.loginError}>{error}</span>
							<div className={styles.submitEmailForm} onClick={() => loginInformation()}>
								Sign In
							</div>
						</form>
					</div>
					<h3 className={styles.switchToSignUp}>
						Don't have an account?{'  '}
						<Link href="/signUp">
							<span className={styles.signUpBtn}>Sign Up</span>
						</Link>
					</h3>
				</div>
				<div className={styles.copyright}>&copy; 2020. All Rights Reserved. Workflow.</div>
			</div>
		</main>
	);
};

export default Login;
