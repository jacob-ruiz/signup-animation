import React from 'react';
import cartoon from './cartoon.png';

const HeroContent = () => {
  return (
    <div>
      <WriterLogo />
      <h2
        style={{
          fontWeight: 600,
          fontSize: '36px',
          lineHeight: '110%',
        }}
      >
        Better writing starts now.
      </h2>
      <h4
        style={{
          fontWeight: 500,
          fontSize: '14px',
          lineHeight: '21px',
          margin: 0,
        }}
      >
        14 -day free trial, $11/month after that.
      </h4>
      <p
        style={{
          fontSize: '12px',
          lineHeight: '24px',
          color: '#5A677C',
        }}
      >
        Credit card not required.
      </p>
      <img src={cartoon} alt="cartoon" style={{ width: 323, marginTop: 16 }} />
    </div>
  );
};

export default HeroContent;

const WriterLogo = () => (
  <svg
    width="129"
    height="43"
    viewBox="0 0 129 43"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.96875"
      y="17.7529"
      width="127.061"
      height="24.2695"
      fill="#A9F9E1"
    />
    <path
      d="M9.47162 37.3469L5.42773 0H12.8122L14.9221 23.5646L17.0319 0H24.0648L26.0867 23.5646L28.1087 0H35.5811L31.4493 37.3469H22.3945L20.5044 19.3473L18.7022 37.3469H9.47162Z"
      fill="black"
    />
    <path
      d="M37.7247 0H49.3289C51.1751 0 52.5963 0.420279 53.5926 1.26084C54.6182 2.07241 55.3069 3.2318 55.6585 4.73901C56.0102 6.21723 56.186 8.11574 56.186 10.4345C56.186 12.5504 55.9076 14.2025 55.3508 15.3909C54.7941 16.5793 53.827 17.4054 52.4498 17.8691C53.5926 18.101 54.4131 18.6662 54.9113 19.5647C55.4387 20.4633 55.7025 21.6806 55.7025 23.2168L55.6146 37.3469H48.2301V22.7386C48.2301 21.6951 48.0249 21.0285 47.6147 20.7386C47.2044 20.4488 46.4572 20.3038 45.373 20.3038V37.3469H37.7247V0ZM47.2191 13.8257C48.274 13.8257 48.8015 12.6953 48.8015 10.4345C48.8015 9.44903 48.7575 8.70992 48.6696 8.21718C48.5817 7.72444 48.4205 7.39112 48.1861 7.21721C47.9517 7.01431 47.6147 6.91287 47.1751 6.91287H45.4169V13.8257H47.2191Z"
      fill="black"
    />
    <path d="M58.3205 37.3469V0H65.6171V37.3469H58.3205Z" fill="black" />
    <path
      d="M71.8835 37.3469V7.17373H67.4001V0H83.9273V7.17373H79.4438V37.3469H71.8835Z"
      fill="black"
    />
    <path
      d="M86.0584 37.3469V0H101.179V7.21721H93.7506V14.4779H100.871V21.5212H93.7506V30.0862H101.663V37.3469H86.0584Z"
      fill="black"
    />
    <path
      d="M103.513 0H115.117C116.963 0 118.384 0.420279 119.381 1.26084C120.406 2.07241 121.095 3.2318 121.447 4.73901C121.798 6.21723 121.974 8.11574 121.974 10.4345C121.974 12.5504 121.696 14.2025 121.139 15.3909C120.582 16.5793 119.615 17.4054 118.238 17.8691C119.381 18.101 120.201 18.6662 120.699 19.5647C121.227 20.4633 121.491 21.6806 121.491 23.2168L121.403 37.3469H114.018V22.7386C114.018 21.6951 113.813 21.0285 113.403 20.7386C112.993 20.4488 112.245 20.3038 111.161 20.3038V37.3469H103.513V0ZM113.007 13.8257C114.062 13.8257 114.59 12.6953 114.59 10.4345C114.59 9.44903 114.546 8.70992 114.458 8.21718C114.37 7.72444 114.209 7.39112 113.974 7.21721C113.74 7.01431 113.403 6.91287 112.963 6.91287H111.205V13.8257H113.007Z"
      fill="black"
    />
  </svg>
);
