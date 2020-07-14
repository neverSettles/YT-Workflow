import styles from '../styles/scss/sign-up.module.scss';
import Link from 'next/link';
import classnames from 'classnames';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setJwt } from '../components/actions/jwtAction';
import Cookie from 'js-cookie';
import Modal from '../components/Modal';

const Joi = require('@hapi/joi');

const SignUp = () => {
	const dispatch = useDispatch();

	const [ email, setEmail ] = useState('');
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ emailInputEmpty, setEmailInputEmpty ] = useState(true);
	const [ passwordInputEmpty, setPasswordInputEmpty ] = useState(true);
	const [ usernameEmpty, setUsernameEmpty ] = useState(true);
	const [ viewPassword, setViewPassword ] = useState(false);
	const [ error, setError ] = useState('');
	const [ tasVisible, setTasVisible ] = useState(false);
	const [ ppVisible, setPpVisible ] = useState(false);

	const minPasswordLength = 2;

	const signUpSchema = Joi.object({
		username: Joi.string().required(),
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

	const updateUsername = (input) => {
		setUsername(input);
		if (input === '') setUsernameEmpty(true);
		else setUsernameEmpty(false);
	};

	const checkIfEncodeUriValid = (input) => {
		return encodeURI(input) === input;
	};

	const toCapitalize = (input) => {
		return input.slice(0, 1).toUpperCase() + input.slice(1);
	};

	const submitSignUpInfo = async () => {
		const usernameUriEncoded = checkIfEncodeUriValid(username.replace(' ', ''));
		const emailUriEncoded = checkIfEncodeUriValid(email);
		const passwordUriEncoded = checkIfEncodeUriValid(password);
		const signUpValidation = signUpSchema.validate({ username, email, password });
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
		if (!usernameUriEncoded || !emailUriEncoded || !passwordUriEncoded) {
			return setError('Login information can only have letters and numbers!');
		}
		const data = { username, email, password };
		const dataString = JSON.stringify(data);
		try {
			const signInRequest = await fetch(process.env.SIGN_UP_URL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: dataString
			});
			const signInJson = await signInRequest.json();

			if (signInJson.email) {
				setError(signInJson.email[0]);
				return;
			}
			setError('');
			const accessJwtToken = signInJson.access;
			const refreshJwtToken = signInJson.refresh;
			localStorage.setItem('refresh-token', refreshJwtToken);
			dispatch(setJwt(accessJwtToken));
			Cookie.set('jwt', JSON.stringify(accessJwtToken));
			Cookie.set('refresh-token', JSON.stringify(refreshJwtToken));
			localStorage.setItem('jwt', accessJwtToken);
			return (window.location = '/dashboard/workflows');
		} catch (error) {
			console.log(error);
		}
		return;
	};

	const toggleViewPassword = () => {
		setViewPassword(!viewPassword);
	};
	const termsAndServices = () => {
		return `INTRODUCTION

[BUSINESS ENTITY NAME] (“we” or “us” or “our”) respects the privacy of our users (“user” or “you”). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [name of website.com] [and our mobile application], including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the “Site”). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.

We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the “Last Updated” date of this Privacy Policy. Any changes or modifications will be effective immediately upon posting the updated Privacy Policy on the Site, and you waive the right to receive specific notice of each such change or modification.

You are encouraged to periodically review this Privacy Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Privacy Policy by your continued use of the Site after the date such revised Privacy Policy is posted.

This Privacy Policy was generated by Termly’s Privacy Policy Generator.

COLLECTION OF YOUR INFORMATION

We may collect information about you in a variety of ways. The information we may collect on the Site includes:

Personal Data

Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us [when you register with the Site [or our mobile application,] or] when you choose to participate in various activities related to the Site [and our mobile application], such as online chat and message boards. You are under no obligation to provide us with personal information of any kind, however your refusal to do so may prevent you from using certain features of the Site [and our mobile application].

Derivative Data

Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site. [If you are using our mobile application, this information may also include your device name and type, your operating system, your phone number, your country, your likes and replies to a post, and other interactions with the application and other users via server log files, as well as any other information you choose to provide.]

Financial Data

Financial information, such as data related to your payment method (e.g. valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site [or our mobile application]. [We store only very limited, if any, financial information that we collect. Otherwise, all financial information is stored by our payment processor, [Amazon Payments,] [Authorize.Net,] [Braintree Payments,] [Chargify,] [Dwolla,] [Google Checkout,] [Paypal,] [SafeCharge,] [Stripe,] [WePay,] [2Checkout,] [other], and you are encouraged to review their privacy policy and contact them directly for responses to your questions.]

Facebook Permissions

The Site [and our mobile application] may by default access your Facebook basic account information, including your name, email, gender, birthday, current city, and profile picture URL, as well as other information that you choose to make public. We may also request access to other permissions related to your account, such as friends, checkins, and likes, and you may choose to grant or deny us access to each individual permission. For more information regarding Facebook permissions, refer to the Facebook Permissions Reference page.

Data From Social Networks

User information from social networking sites, such as [Apple’s Game Center, Facebook, Google+, Instagram, Pinterest, Twitter], including your name, your social network username, location, gender, birth date, email address, profile picture, and public data for contacts, if you connect your account to such social networks. [If you are using our mobile application, this information may also include the contact information of anyone you invite to use and/or join our mobile application.]

Mobile Device Data

Device information, such as your mobile device ID, model, and manufacturer, and information about the location of your device, if you access the Site from a mobile device.

Third-Party Data

Information from third parties, such as personal information or network friends, if you connect your account to the third party and grant the Site permission to access this information.

Data From Contests, Giveaways, and Surveys

Personal and other information you may provide when entering contests or giveaways and/or responding to surveys.

Mobile Application Information

If you connect using our mobile application:

Geo-Location Information. We may request access or permission to and track location-based information from your mobile device, either continuously or while you are using our mobile application, to provide location-based services. If you wish to change our access or permissions, you may do so in your device’s settings.
Mobile Device Access. We may request access or permission to certain features from your mobile device, including your mobile device’s [bluetooth, calendar, camera, contacts, microphone, reminders, sensors, SMS messages, social media accounts, storage,] and other features. If you wish to change our access or permissions, you may do so in your device’s settings.
Mobile Device Data. We may collect device information (such as your mobile device ID, model and manufacturer), operating system, version information and IP address.
Push Notifications. We may request to send you push notifications regarding your account or the Application. If you wish to opt-out from receiving these types of communications, you may turn them off in your device’s settings.
USE OF YOUR INFORMATION

Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site [or our mobile application] to:

Administer sweepstakes, promotions, and contests.
Assist law enforcement and respond to subpoena.
Compile anonymous statistical data and analysis for use internally or with third parties.
Create and manage your account.
Deliver targeted advertising, coupons, newsletters, and other information regarding promotions and the Site [and our mobile application] to you.
Email you regarding your account or order.
Enable user-to-user communications.
Fulfill and manage purchases, orders, payments, and other transactions related to the Site [and our mobile application].
Generate a personal profile about you to make future visits to the Site [and our mobile application] more personalized.
Increase the efficiency and operation of the Site [and our mobile application].
Monitor and analyze usage and trends to improve your experience with the Site [and our mobile application].
Notify you of updates to the Site [and our mobile application]s.
Offer new products, services, [mobile applications,] and/or recommendations to you.
Perform other business activities as needed.
Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.
Process payments and refunds.
Request feedback and contact you about your use of the Site [and our mobile application].
Resolve disputes and troubleshoot problems.
Respond to product and customer service requests.
Send you a newsletter.
Solicit support for the Site [and our mobile application].
[Other]
DISCLOSURE OF YOUR INFORMATION

We may share information we have collected about you in certain situations. Your information may be disclosed as follows:

By Law or to Protect Rights

If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation. This includes exchanging information with other entities for fraud protection and credit risk reduction.

Third-Party Service Providers

We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.

Marketing Communications

With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes, as permitted by law.

Interactions with Other Users

If you interact with other users of the Site [and our mobile application], those users may see your name, profile photo, and descriptions of your activity, including sending invitations to other users, chatting with other users, liking posts, following blogs.

Online Postings

When you post comments, contributions or other content to the Site [or our mobile applications], your posts may be viewed by all users and may be publicly distributed outside the Site [and our mobile application] in perpetuity.

Third-Party Advertisers

We may use third-party advertising companies to serve ads when you visit the Site [or our mobile application]. These companies may use information about your visits to the Site [and our mobile application] and other websites that are contained in web cookies in order to provide advertisements about goods and services of interest to you.

Affiliates

We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include our parent company and any subsidiaries, joint venture partners or other companies that we control or that are under common control with us.

Business Partners

We may share your information with our business partners to offer you certain products, services or promotions.

[Offer Wall 

Our mobile application may display a third-party hosted “offer wall.” Such an offer wall allows third-party advertisers to offer virtual currency, gifts, or other items to users in return for acceptance and completion of an advertisement offer. Such an offer wall may appear in our mobile application and be displayed to you based on certain data, such as your geographic area or demographic information. When you click on an offer wall, you will leave our mobile application. A unique identifier, such as your user ID, will be shared with the offer wall provider in order to prevent fraud and properly credit your account.]

[Social Media Contacts 

If you connect to the Site [or our mobile application] through a social network, your contacts on the social network will see your name, profile photo, and descriptions of your activity.]

Other Third Parties

We may share your information with advertisers and investors for the purpose of conducting general business analysis. We may also share your information with such third parties for marketing purposes, as permitted by law.

Sale or Bankruptcy

If we reorganize or sell all or a portion of our assets, undergo a merger, or are acquired by another entity, we may transfer your information to the successor entity. If we go out of business or enter bankruptcy, your information would be an asset transferred or acquired by a third party. You acknowledge that such transfers may occur and that the transferee may decline honor commitments we made in this Privacy Policy.

We are not responsible for the actions of third parties with whom you share personal or sensitive data, and we have no authority to manage or control third-party solicitations. If you no longer wish to receive correspondence, emails or other communications from third parties, you are responsible for contacting the third party directly.

TRACKING TECHNOLOGIES

Cookies and Web Beacons

We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site [and our mobile application] to help customize the Site [and our mobile application] and improve your experience. When you access the Site [or our mobile application], your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the Site [or our mobile application]. You may not decline web beacons. However, they can be rendered ineffective by declining all cookies or by modifying your web browser’s settings to notify you each time a cookie is tendered, permitting you to accept or decline cookies on an individual basis.

[We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site [and our mobile application] to help customize the Site [and our mobile application] and improve your experience. For more information on how we use cookies, please refer to our Cookie Policy posted on the Site, which is incorporated into this Privacy Policy. By using the Site, you agree to be bound by our Cookie Policy.]

Internet-Based Advertising

Additionally, we may use third-party software to serve ads on the Site [and our mobile application], implement email marketing campaigns, and manage other interactive marketing initiatives. This third-party software may use cookies or similar tracking technology to help manage and optimize your online experience with us. For more information about opting-out of interest-based ads, visit the Network Advertising Initiative Opt-Out Tool or Digital Advertising Alliance Opt-Out Tool.

Website Analytics

We may also partner with selected third-party vendors[, such as [Adobe Analytics,] [Clicktale,] [Clicky,] [Cloudfare,] [Crazy Egg,] [Flurry Analytics,] [Google Analytics,] [Heap Analytics,] [Inspectlet,] [Kissmetrics,] [Mixpanel,] [Piwik,] and others], to allow tracking technologies and remarketing services on the Site [and our mobile application] through the use of first party cookies and third-party cookies, to, among other things, analyze and track users’ use of the Site [and our mobile application], determine the popularity of certain content and better understand online activity. By accessing the Site [,our mobile application,], you consent to the collection and use of your information by these third-party vendors. You are encouraged to review their privacy policy and contact them directly for responses to your questions. We do not transfer personal information to these third-party vendors. However, if you do not want any information to be collected and used by tracking technologies, you can visit the third-party vendor or the Network Advertising Initiative Opt-Out Tool or Digital Advertising Alliance Opt-Out Tool.

You should be aware that getting a new computer, installing a new browser, upgrading an existing browser, or erasing or otherwise altering your browser’s cookies files may also clear certain opt-out cookies, plug-ins, or settings.

THIRD-PARTY WEBSITES

The Site [and our mobile application] may contain links to third-party websites and applications of interest, including advertisements and external services, that are not affiliated with us. Once you have used these links to leave the Site [or our mobile application], any information you provide to these third parties is not covered by this Privacy Policy, and we cannot guarantee the safety and privacy of your information. Before visiting and providing any information to any third-party websites, you should inform yourself of the privacy policies and practices (if any) of the third party responsible for that website, and should take those steps necessary to, in your discretion, protect the privacy of your information. We are not responsible for the content or privacy and security practices and policies of any third parties, including other sites, services or applications that may be linked to or from the Site [or our mobile application].

SECURITY OF YOUR INFORMATION

We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse. Any information disclosed online is vulnerable to interception and misuse by unauthorized parties. Therefore, we cannot guarantee complete security if you provide personal information.

POLICY FOR CHILDREN

We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below.

CONTROLS FOR DO-NOT-TRACK FEATURES

Most web browsers and some mobile operating systems [and our mobile applications] include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. No uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Policy. Most web browsers and some mobile operating systems [and our mobile applications] include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. If you set the DNT signal on your browser, we will respond to such DNT browser signals.

OPTIONS REGARDING YOUR INFORMATION

[Account Information]

You may at any time review or change the information in your account or terminate your account by:

Logging into your account settings and updating your account
Contacting us using the contact information provided below
[Other]
Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, some information may be retained in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use and/or comply with legal requirements.

Emails and Communications

If you no longer wish to receive correspondence, emails, or other communications from us, you may opt-out by:

Noting your preferences at the time you register your account with the Site [or our mobile application].
Logging into your account settings and updating your preferences.
Contacting us using the contact information provided below.
If you no longer wish to receive correspondence, emails, or other communications from third parties, you are responsible for contacting the third party directly.

CALIFORNIA PRIVACY RIGHTS

California Civil Code Section 1798.83, also known as the “Shine The Light” law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.

If you are under 18 years of age, reside in California, and have a registered account with the Site [or our mobile application], you have the right to request removal of unwanted data that you publicly post on the Site [or our mobile application]. To request removal of such data, please contact us using the contact information provided below, and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Site [or our mobile application], but please be aware that the data may not be completely or comprehensively removed from our systems.

CONTACT US

If you have questions or comments about this Privacy Policy, please contact us at:

[Company Name]

[Street Address]

[City, State Zip]

[Phone Number]

[Fax Number]

[Email]`;
	};

	const privacyPolicy = () => {
		return `We are committed to maintaining the accuracy, confidentiality, and security of your personally identifiable information ("Personal Information"). As part of this commitment, our privacy policy governs our actions as they relate to the collection, use and disclosure of Personal Information. Our privacy policy is based upon the values set by the Canadian Standards Association's Model Code for the Protection of Personal Information and Canada's Personal Information Protection and Electronic Documents Act.

1. Introduction

We are responsible for maintaining and protecting the Personal Information under our control. We have designated an individual or individuals who is/are responsible for compliance with our privacy policy.



2. Identifying Purposes

We collect, use and disclose Personal Information to provide you with the product or service you have requested and to offer you additional products and services we believe you might be interested in. The purposes for which we collect Personal Information will be identified before or at the time we collect the information. In certain circumstances, the purposes for which information is collected may be clear, and consent may be implied, such as where your name, address and payment information is provided as part of the order process.

  

3. Consent

Knowledge and consent are required for the collection, use or disclosure of Personal Information except where required or permitted by law. Providing us with your Personal Information is always your choice. However, your decision not to provide certain information may limit our ability to provide you with our products or services. We will not require you to consent to the collection, use, or disclosure of information as a condition to the supply of a product or service, except as required to be able to supply the product or service.

 

4. Limiting Collection

The Personal Information collected will be limited to those details necessary for the purposes identified by us. With your consent, we may collect Personal Information from you in person, over the telephone or by corresponding with you via mail, facsimile, or the Internet.

 

5. Limiting Use, Disclosure and Retention

Personal Information may only be used or disclosed for the purpose for which it was collected unless you have otherwise consented, or when it is required or permitted by law. Personal Information will only be retained for the period of time required to fulfill the purpose for which we collected it or as may be required by law. [If applicable, include a description of any parties with whom you may share Personal Information.]

 

6. Accuracy

Personal Information will be maintained in as accurate, complete and up-to-date form as is necessary to fulfill the purposes for which it is to be used.

 

 7. Safeguarding Customer Information

Personal Information will be protected by security safeguards that are appropriate to the sensitivity level of the information. We take all reasonable precautions to protect your Personal Information from any loss or unauthorized use, access or disclosure.

 

8. Openness

We will make information available to you about our policies and practices with respect to the management of your Personal Information.

 

9. Customer Access

Upon request, you will be informed of the existence, use and disclosure of your Personal Information, and will be given access to it. You may verify the accuracy and completeness of your Personal Information, and may request that it be amended, if appropriate. However, in certain circumstances permitted by law, we will not disclose certain information to you. For example, we may not disclose information relating to you if other individuals are referenced or if there are legal, security or commercial proprietary restrictions.

 

10. Handling Customer Complaints and Suggestions 

You may direct any questions or enquiries with respect to our privacy policy or our practices by

contacting:

 

[Contact Information]

 

Additional Information

 

Cookies

A cookie is a small computer file or piece of information that may be stored in your computer's hard drive when you visit our websites. We may use cookies to improve our website’s functionality and in some cases, to provide visitors with a customized online experience.

Cookies are widely used and most web browsers are configured initially to accept cookies automatically. You may change your Internet browser settings to prevent your computer from accepting cookies or to notify you when you receive a cookie so that you may decline its acceptance. Please note, however, if you disable cookies, you may not experience optimal performance of our website.

 

Other Websites

Our website may contain links to other third party sites that are not governed by this privacy policy. Although we endeavour to only link to sites with high privacy standards, our privacy policy will no longer apply once you leave our website. Additionally, we are not responsible for the privacy practices employed by third party websites. Therefore, we suggest that you examine the privacy statements of those sites to learn how your information may be collected, used, shared and disclosed.`;
	};

	const toggleTasVisiblity = () => {
		setTasVisible(!tasVisible);
	};

	const togglePpVisibility = () => {
		setPpVisible(!ppVisible);
	};

	return (
		<React.Fragment>
			<Modal
				toggleVisiblity={toggleTasVisiblity}
				text={termsAndServices()}
				visible={tasVisible}
				title={'Terms and Services'}
			/>
			<Modal
				toggleVisiblity={togglePpVisibility}
				text={privacyPolicy()}
				visible={ppVisible}
				title={'Privacy Policy'}
			/>
			<main className={styles.signUpContainer}>
				<section className={styles.textSection}>
					<div className={styles.logoImage}>
						<Link href="/">
							<a>
								<img src="./images/logo.jpg" alt="Workflow" />
							</a>
						</Link>
					</div>

					<div className={styles.signUpSection}>
						<h1>
							Sign Up to <br /> Workflow
						</h1>
						<div className={styles.emailSignIn}>
							<form>
								<div>
									<h4
										className={classnames({
											[styles.label]: true,
											[styles.usernameLabel]: true,
											[styles.labelHover]: !usernameEmpty
										})}
									>
										Username
									</h4>
									<input
										value={username}
										className={classnames({ [styles.errorInput]: error.includes('Username') })}
										onChange={(e) => updateUsername(e.target.value)}
										type="text"
										required
									/>
								</div>
								<div>
									<h4
										className={classnames({
											[styles.label]: true,
											[styles.emailLabel]: true,
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
											[styles.passwordLabel]: true,
											[styles.labelHover]: !passwordInputEmpty
										})}
									>
										Password
									</h4>
									<input
										value={password}
										className={classnames({ [styles.errorInput]: error.includes('Password') })}
										onChange={(e) => updatePassword(e.target.value)}
										type={viewPassword ? 'text' : 'password'}
										required
									/>
									<img
										src="/images/eye.png"
										onClick={() => toggleViewPassword()}
										alt="Toggle Password"
									/>
								</div>
								<span className={styles.signUpError}>{error}</span>
								<div onClick={() => submitSignUpInfo()} className={styles.submitEmailForm}>
									Create Your Account
								</div>
							</form>
							<p className={styles.legal}>
								By signing up, I agree to the{' '}
								<span className={styles.underline} onClick={setPpVisible}>
									Privacy Policy
								</span>{' '}
								and{' '}
								<span className={styles.underline} onClick={toggleTasVisiblity}>
									Terms of Service
								</span>
							</p>
						</div>
						<h3 className={styles.switchToLogin}>
							Already have an account?{'  '}
							<Link href="/login">
								<span className={styles.loginBtn}>Log in</span>
							</Link>
						</h3>
					</div>
					<div className={styles.copyright}>&copy; 2020. All Rights Reserved. Workflow.</div>
				</section>
				<section className={styles.slideshowSection}>
					<img src="images/yt.png" />
				</section>
			</main>
		</React.Fragment>
	);
};

export default SignUp;
