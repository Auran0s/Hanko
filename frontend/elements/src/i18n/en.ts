import { Translation } from "./translations";

export const en: Translation = {
  headlines: {
    error: "An error has occurred",
    loginEmail: "Sign in or create account",
    loginEmailNoSignup: "Sign in",
    loginFinished: "Login successful",
    loginPasscode: "Enter passcode",
    loginPassword: "Enter password",
    registerAuthenticator: "Create a passkey",
    registerConfirm: "Create account?",
    registerPassword: "Set new password",
    otpSetUp: "Set up authenticator app",
    profileEmails: "Emails",
    profilePassword: "Password",
    profilePasskeys: "Passkeys",
    isPrimaryEmail: "Primary email address",
    setPrimaryEmail: "Set primary email address",
    createEmail: "Enter a new email",
    createUsername: "Enter a new username",
    emailVerified: "Verified",
    emailUnverified: "Unverified",
    emailDelete: "Delete",
    renamePasskey: "Rename passkey",
    deletePasskey: "Delete passkey",
    lastUsedAt: "Last used at",
    createdAt: "Created at",
    connectedAccounts: "Connected accounts",
    deleteAccount: "Delete account",
    accountNotFound: "Account not found",
    signIn: "Sign in",
    signUp: "Create account",
    selectLoginMethod: "Select login method",
    setupLoginMethod: "Set up login method",
    lastUsed: "Last seen",
    ipAddress: "IP address",
    revokeSession: "Revoke session",
    profileSessions: "Sessions",
    mfaSetUp: "Set up MFA",
    securityKeySetUp: "Add security key",
    securityKeyLogin: "Security key",
    otpLogin: "Authentication code",
    renameSecurityKey: "Rename security key",
    deleteSecurityKey: "Delete security key",
    securityKeys: "Security keys",
    authenticatorApp: "Authenticator app",
    authenticatorAppAlreadySetUp: "Authenticator app is set up",
    authenticatorAppNotSetUp: "Set up authenticator app",
  },
  texts: {
    enterPasscode: 'Enter the passcode that was sent to "{emailAddress}".',
    enterPasscodeNoEmail:
      "Enter the passcode that was sent to your primary email address.",
    setupPasskey:
      "Sign in to your account easily and securely with a passkey. Note: Your biometric data is only stored on your devices and will never be shared with anyone.",
    createAccount:
      'No account exists for "{emailAddress}". Do you want to create a new account?',
    otpEnterVerificationCode:
      "Enter the one-time password (OTP) obtained from your authenticator app below:",
    otpScanQRCode:
      "Scan the QR code using your authenticator app (such as Google Authenticator or any other TOTP app). Alternatively, you can manually enter the OTP secret key into the app.",
    otpSecretKey: "OTP secret key",
    passwordFormatHint:
      "Must be between {minLength} and {maxLength} characters long.",
    securityKeySetUp:
      "Use a dedicated security key via USB, Bluetooth, or NFC, or your mobile phone. Connect or activate your security key, then click the button below and follow the prompts to complete the registration.",
    setPrimaryEmail: "Set this email address to be used for contacting you.",
    isPrimaryEmail:
      "This email address will be used to contact you if necessary.",
    emailVerified: "This email address has been verified.",
    emailUnverified: "This email address has not been verified.",
    emailDelete:
      "If you delete this email address, it can no longer be used to sign in.",
    renamePasskey: "Set a name for the passkey.",
    deletePasskey: "Delete this passkey from your account.",
    deleteAccount:
      "Are you sure you want to delete this account? All data will be deleted immediately and cannot be recovered.",
    noAccountExists: 'No account exists for "{emailAddress}".',
    selectLoginMethodForFutureLogins:
      "Select one of the following login methods to use for future logins.",
    howDoYouWantToLogin: "How do you want to login?",
    mfaSetUp:
      "Protect your account with Multi-Factor Authentication (MFA). MFA adds an additional step to your login process, ensuring that even if your password or email account is compromised, your account stays secure.",
    securityKeyLogin:
      "Connect or activate your security key, then click the button below. Once ready, use it via USB, NFC, your mobile phone. Follow the prompts to complete the login process.",
    otpLogin:
      "Open your authenticator app to obtain the one-time password (OTP). Enter the code in the field below to complete your login.",
    renameSecurityKey: "Set a name for the security key.",
    deleteSecurityKey: "Delete this security key from your account.",
    authenticatorAppAlreadySetUp:
      "Your account is secured with an authenticator app that generates time-based one-time passwords (TOTP) for multi-factor authentication.",
    authenticatorAppNotSetUp:
      "Secure your account with an authenticator app that generates time-based one-time passwords (TOTP) for multi-factor authentication.",
  },
  labels: {
    or: "or",
    no: "no",
    yes: "yes",
    email: "Email",
    continue: "Continue",
    copied: "copied",
    skip: "Skip",
    save: "Save",
    password: "Password",
    passkey: "Passkey",
    passcode: "Passcode",
    signInPassword: "Sign in with a password",
    signInPasscode: "Sign in with a passcode",
    forgotYourPassword: "Forgot your password?",
    back: "Back",
    signInPasskey: "Sign in with a passkey",
    registerAuthenticator: "Create a passkey",
    signIn: "Sign in",
    signUp: "Create account",
    sendNewPasscode: "Send new code",
    passwordRetryAfter: "Retry in {passwordRetryAfter}",
    passcodeResendAfter: "Request a new code in {passcodeResendAfter}",
    unverifiedEmail: "unverified",
    primaryEmail: "primary",
    setAsPrimaryEmail: "Set as primary",
    verify: "Verify",
    delete: "Delete",
    newEmailAddress: "New email address",
    newPassword: "New password",
    rename: "Rename",
    newPasskeyName: "New passkey name",
    addEmail: "Add email",
    createPasskey: "Create a passkey",
    webauthnUnsupported: "Passkeys are not supported by your browser",
    signInWith: "Sign in with {provider}",
    deleteAccount: "Yes, delete this account.",
    emailOrUsername: "Email or username",
    username: "Username",
    optional: "optional",
    dontHaveAnAccount: "Don't have an account?",
    alreadyHaveAnAccount: "Already have an account?",
    changeUsername: "Change username",
    setUsername: "Set username",
    changePassword: "Change password",
    setPassword: "Set password",
    revoke: "Revoke",
    currentSession: "Current session",
    authenticatorApp: "Authenticator app",
    securityKey: "Security key",
    securityKeyUse: "Use security key",
    newSecurityKeyName: "New security key name",
    createSecurityKey: "Add a security key",
    authenticatorAppManage: "Manage authenticator app",
    authenticatorAppAdd: "Set up",
    configured: "configured",
    useAnotherMethod: "Use another method",
  },
  errors: {
    somethingWentWrong:
      "A technical error has occurred. Please try again later.",
    requestTimeout: "The request timed out.",
    invalidPassword: "Wrong email or password.",
    invalidPasscode: "The passcode provided was not correct.",
    passcodeAttemptsReached:
      "The passcode was entered incorrectly too many times. Please request a new code.",
    tooManyRequests:
      "Too many requests have been made. Please wait to repeat the requested operation.",
    unauthorized: "Your session has expired. Please log in again.",
    invalidWebauthnCredential: "This passkey cannot be used anymore.",
    passcodeExpired: "The passcode has expired. Please request a new one.",
    userVerification:
      "User verification required. Please ensure your authenticator device is protected with a PIN or biometric.",
    emailAddressAlreadyExistsError: "The email address already exists.",
    maxNumOfEmailAddressesReached: "No further email addresses can be added.",
    thirdPartyAccessDenied:
      "Access denied. The request was cancelled by the user or the provider has denied access for other reasons.",
    thirdPartyMultipleAccounts:
      "Cannot identify account. The email address is used by multiple accounts.",
    thirdPartyUnverifiedEmail:
      "Email verification required. Please verify the used email address with your provider.",
    signupDisabled: "Account registration is disabled.",
    handlerNotFoundError:
      "The current step in your process is not supported by this application version. Please try again later or contact support if the issue persists.",
  },
  flowErrors: {
    technical_error: "A technical error has occurred. Please try again later.",
    flow_expired_error:
      "The session has expired, please click the button to restart.",
    value_invalid_error: "The entered value is invalid.",
    passcode_invalid: "The passcode provided was not correct.",
    passkey_invalid: "This passkey cannot be used anymore",
    passcode_max_attempts_reached:
      "The passcode was entered incorrectly too many times. Please request a new code.",
    rate_limit_exceeded:
      "Too many requests have been made. Please wait to repeat the requested operation.",
    unknown_username_error: "The username is unknown.",
    username_already_exists: "The username is already taken.",
    invalid_username_error:
      "The username must contain only letters, numbers, and underscores.",
    email_already_exists: "The email is already taken.",
    not_found: "The requested resource was not found.",
    operation_not_permitted_error: "The operation is not permitted.",
    flow_discontinuity_error:
      "The process cannot be continued due to user settings or the provider's configuration.",
    form_data_invalid_error: "The submitted form data contains errors.",
    unauthorized: "Your session has expired. Please log in again.",
    value_missing_error: "The value is missing.",
    value_too_long_error: "Value is too long.",
    value_too_short_error: "The value is too short.",
    webauthn_credential_invalid_mfa_only:
      "This credential can be used as a second factor security key only.",
    webauthn_credential_already_exists:
      "The request either timed out, was canceled or the device is already registered. Please try again or try using another device.",
    platform_authenticator_required:
      "Your account is configured to use platform authenticators, but your current device or browser does not support this feature. Please try again with a compatible device or browser.",
  },
};
