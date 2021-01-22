import React from 'react';

const SignupForm = ({ toggleSSO }) => {
  return (
    <div>
      <div style={{ marginBottom: 8 }}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />

        <label htmlFor="firstName">First Name</label>
        <input type="firstName" name="firstName" id="firstName" />

        <label htmlFor="lastName">Last Name</label>
        <input type="lastName" name="lastName" id="lastName" />
      </div>

      <button className="button-round">Sign up with email</button>

      <Or />

      <div style={{ marginBottom: 16 }}>
        <GoogleButton />
      </div>

      <div style={{ marginBottom: 16 }}>
        <SSOButton onClick={toggleSSO} />
      </div>

      <Terms />
    </div>
  );
};

export default SignupForm;

const Terms = () => (
  <p
    style={{
      fontWeight: 'normal',
      fontSize: '10px',
      lineHeight: '18px',
      color: '#5A677C',
      textAlign: 'center',
    }}
  >
    By signing up, you agree to Writer’s <strong>Privacy Policy</strong> and
    <strong> Terms and Conditions</strong>.
  </p>
);

const SSOButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="button-round"
    style={{
      background: 'transparent',
      color: '#5A677C',
      fontWeight: 600,
      fontSize: 12,
      '&:hover': {
        color: 'black',
      },
    }}
  >
    Continue with SAML SSO
  </button>
);

export const Or = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center',
      height: 48,
    }}
  >
    <div style={{ height: 1, background: '#EFF0F2', width: '100%' }}></div>
    <span
      style={{
        padding: '0 8px',
        fontWeight: 600,
        fontSize: '13px',
      }}
    >
      or
    </span>
    <div style={{ height: 1, background: '#EFF0F2', width: '100%' }}></div>
  </div>
);

const GoogleButton = () => (
  <button
    className="button-round"
    style={{
      background: '#E5F4FF',
      color: 'black',
      fontWeight: 600,
      display: 'grid',
      justifyContent: 'center',
      alignContent: 'center',
    }}
  >
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gap: 12,
        width: 'max-content',
        alignItems: 'center',
      }}
    >
      <span>
        <GoogleLogo />
      </span>
      <span>Sign up with Google</span>
    </div>
  </button>
);

const GoogleLogo = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0)">
      <path
        d="M1.08899 14.4876C0.947494 14.174 0.796098 13.8642 0.666916 13.5456C0.466745 13.0528 0.321385 12.543 0.212486 12.0235C0.126043 11.6114 0.0630214 11.1958 0.0342875 10.7759C0.025112 10.6406 0.0183511 10.5052 0.0101414 10.3698C0.00965845 10.3613 0.00362192 10.353 0 10.3445C0 10.1118 0 9.87914 0 9.64671C0.00676092 9.56577 0.0149706 9.48459 0.0202828 9.40364C0.0543288 8.86542 0.131113 8.33312 0.251361 7.80673C0.370643 7.28508 0.529766 6.77526 0.73525 6.28059C0.842942 6.02166 0.969709 5.77053 1.08802 5.51562C1.38068 5.73811 1.67333 5.96059 1.96598 6.18307C2.43417 6.53905 2.90236 6.89526 3.37056 7.25123C3.73758 7.53028 4.1046 7.80933 4.47162 8.08815C4.40788 8.32152 4.3364 8.553 4.28256 8.7885C4.20746 9.11725 4.17245 9.45145 4.15917 9.78849C4.13672 10.3646 4.20239 10.931 4.3463 11.4891C4.38349 11.6334 4.43082 11.7755 4.47331 11.9184C4.11498 12.1908 3.75641 12.4633 3.39809 12.7357C2.92072 13.0985 2.44335 13.4614 1.96574 13.824C1.67381 14.0453 1.38116 14.2663 1.08899 14.4876Z"
        fill="#FABB05"
      />
      <path
        d="M4.47149 8.08783C4.10447 7.80878 3.73745 7.52997 3.37042 7.25092C2.90223 6.89495 2.43404 6.53874 1.96584 6.18277C1.67319 5.96028 1.38054 5.7378 1.08789 5.51532C1.20597 5.30183 1.3139 5.08242 1.44453 4.87675C1.6249 4.59225 1.81348 4.31178 2.01534 4.04173C2.19354 3.80315 2.38744 3.57451 2.58761 3.35321C2.78198 3.1383 2.98626 2.93097 3.19826 2.73286C3.74952 2.21808 4.3551 1.77311 5.0114 1.39347C5.36441 1.18921 5.72757 1.00484 6.10256 0.843891C6.61253 0.624959 7.13698 0.446972 7.67713 0.312773C8.13446 0.199165 8.59686 0.116799 9.06553 0.0637815C9.62765 0.000113571 10.1917 -0.0119573 10.756 0.010291C11.4908 0.0394031 12.2127 0.153721 12.9222 0.345672C13.5248 0.508747 14.1065 0.725313 14.6665 0.997499C15.2552 1.28389 15.8129 1.6195 16.3277 2.02092C16.566 2.20672 16.7971 2.40127 17.0272 2.58825C16.0505 3.54564 15.0818 4.49521 14.1128 5.44526C13.9766 5.33354 13.837 5.21236 13.6907 5.09994C13.2679 4.77473 12.8043 4.51935 12.3033 4.32764C11.5528 4.04054 10.7746 3.92812 9.97198 3.9622C9.36519 3.988 8.7753 4.09971 8.20472 4.30302C7.55229 4.53545 6.95999 4.87201 6.42419 5.3042C5.88693 5.73756 5.43902 6.24809 5.07418 6.82773C4.83175 7.21305 4.63761 7.62133 4.48815 8.04996C4.48308 8.06298 4.47704 8.07529 4.47149 8.08783Z"
        fill="#E94436"
      />
      <path
        d="M1.08984 14.4872C1.38201 14.2659 1.67466 14.045 1.96659 13.8235C2.4442 13.4609 2.92157 13.0981 3.39894 12.7352C3.75727 12.4628 4.11584 12.1904 4.47417 11.918C4.592 12.1904 4.70259 12.4661 4.83008 12.7341C4.91387 12.9097 5.01576 13.078 5.12056 13.2429C5.37796 13.6491 5.68389 14.0185 6.03304 14.3523C6.38509 14.6888 6.77143 14.983 7.19568 15.2289C7.62017 15.4751 8.06783 15.6689 8.54013 15.8067C8.97066 15.9321 9.41084 16.0062 9.85948 16.0329C10.2272 16.055 10.5945 16.0424 10.9603 16.0069C11.5649 15.9485 12.1529 15.8157 12.7162 15.5899C13.0378 15.4609 13.3462 15.3054 13.6345 15.1139C13.6495 15.104 13.6656 15.0962 13.6811 15.0872C13.7151 15.1146 13.7482 15.1428 13.783 15.1693C14.0773 15.393 14.3719 15.6161 14.6662 15.8398C14.9999 16.0935 15.3336 16.3475 15.6671 16.6015C15.9296 16.8012 16.1916 17.0017 16.4543 17.2012C16.6235 17.3297 16.7938 17.4566 16.9638 17.5842C16.7621 17.752 16.5661 17.9267 16.3579 18.0862C15.8808 18.4521 15.3648 18.7591 14.8198 19.018C14.2949 19.2675 13.7499 19.466 13.1873 19.6187C12.6981 19.7515 12.2014 19.8481 11.698 19.9103C11.2677 19.9636 10.8352 19.9927 10.4011 19.9983C9.98286 20.004 9.56562 19.9898 9.14982 19.9472C8.61016 19.8918 8.07798 19.7948 7.55352 19.6566C7.03366 19.5193 6.52731 19.3446 6.0369 19.1281C5.45595 18.8715 4.90204 18.5676 4.37903 18.2093C4.05547 17.9875 3.74519 17.7499 3.44892 17.4949C3.11667 17.2088 2.80615 16.9009 2.51591 16.5738C2.13996 16.1496 1.79684 15.7016 1.50419 15.2183C1.35907 14.9785 1.22748 14.731 1.08984 14.4872Z"
        fill="#34A753"
      />
      <path
        d="M16.9626 17.5841C16.7929 17.4566 16.6224 17.3295 16.4532 17.2012C16.1904 17.0019 15.9285 16.8014 15.666 16.6014C15.3325 16.3475 14.9988 16.0935 14.6651 15.8398C14.3708 15.6161 14.0762 15.3929 13.7819 15.1693C13.7471 15.1427 13.7138 15.1146 13.68 15.0871C13.8661 14.9439 14.0593 14.8088 14.2365 14.6559C14.5698 14.3686 14.8489 14.0344 15.0819 13.6637C15.3849 13.1821 15.5916 12.6635 15.7017 12.108C15.7051 12.0907 15.7078 12.0734 15.7119 12.0486C13.8756 12.0486 12.0431 12.0486 10.207 12.0486C10.207 10.7615 10.207 9.48127 10.207 8.19727C13.411 8.19727 16.6135 8.19727 19.823 8.19727C19.8392 8.29786 19.8607 8.39939 19.8713 8.50211C19.9131 8.90897 19.9611 9.31536 19.9879 9.72316C20.0063 9.99985 19.9983 10.2787 19.9932 10.5563C19.9833 11.1002 19.9302 11.6405 19.8389 12.1769C19.7189 12.8812 19.5323 13.5679 19.2684 14.2344C19.131 14.5813 18.9745 14.9196 18.7968 15.2476C18.5372 15.7262 18.2361 16.1787 17.8918 16.6038C17.6139 16.9467 17.312 17.267 16.9858 17.5657C16.9788 17.5725 16.9704 17.578 16.9626 17.5841Z"
        fill="#4185F3"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
