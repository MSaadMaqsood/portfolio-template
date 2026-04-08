import React from "react";
import style from "./style.module.css";
import InputField from "../common/InputField/InputField";
const ContactInfo = () => {
  return (
    <div className={style.container}>
      <h2>Contact information</h2>
      <div className={style.formContainer}>
        <MapIcon />
        <div className={style.form}>
          <div className={style.row}>
            <label>Country:</label>
            <p>Germany</p>
          </div>
          <div className={style.row}>
            <label>City:</label>
            <p>Trier</p>
          </div>
        </div>
      </div>
      <div className={style.formContainer}>
        <MailIcon />
        <div className={style.form}>
          <div className={style.row}>
            <label>Email:</label>
            <p>youremail@gmail.com</p>
          </div>
          <div className={style.row}>
            <label>Skype:</label>
            <p>@yourusername</p>
          </div>
          <div className={style.row}>
            <label>Telegram:</label>
            <p>@yourusername</p>
          </div>
        </div>
      </div>
      <div className={style.formContainer}>
        <MobileIcon />
        <div className={style.form}>
          <div className={style.row}>
            <label>Support services:</label>
            <p>youremail@gmail.com</p>
          </div>
          <div className={style.row}>
            <label>Office:</label>
            <p>@yourusername</p>
          </div>
          <div className={style.row}>
            <label>Phone:</label>
            <p>+49 123 123456</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

const MapIcon = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="20" fill="#FFB400" />
      <g clip-path="url(#clip0_0_1)">
        <path
          d="M12.5 14.75L17.75 12.5L22.25 14.75L26.9772 12.7243C27.0343 12.6998 27.0966 12.6899 27.1584 12.6954C27.2202 12.7009 27.2797 12.7217 27.3316 12.7559C27.3834 12.7901 27.4259 12.8367 27.4553 12.8913C27.4847 12.946 27.5001 13.0072 27.5 13.0693V25.25L22.25 27.5L17.75 25.25L13.0228 27.2758C12.9657 27.3002 12.9034 27.3101 12.8416 27.3046C12.7798 27.2991 12.7203 27.2783 12.6684 27.2441C12.6166 27.2099 12.5741 27.1633 12.5447 27.1087C12.5153 27.054 12.4999 26.9928 12.5 26.9307V14.75ZM22.25 25.823V16.382L22.2013 16.403L17.75 14.177V23.618L17.7987 23.597L22.25 25.823Z"
          fill="#2B2B2B"
        />
      </g>
      <defs>
        <clipPath id="clip0_0_1">
          <rect
            width="18"
            height="18"
            fill="white"
            transform="translate(11 11)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

const MailIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="20" cy="20" r="20" fill="#FFB400" />
    <g clip-path="url(#clip0_0_1)">
      <path
        d="M13.25 13.25H26.75C26.9489 13.25 27.1397 13.329 27.2803 13.4697C27.421 13.6103 27.5 13.8011 27.5 14V26C27.5 26.1989 27.421 26.3897 27.2803 26.5303C27.1397 26.671 26.9489 26.75 26.75 26.75H13.25C13.0511 26.75 12.8603 26.671 12.7197 26.5303C12.579 26.3897 12.5 26.1989 12.5 26V14C12.5 13.8011 12.579 13.6103 12.7197 13.4697C12.8603 13.329 13.0511 13.25 13.25 13.25ZM20.045 19.7622L15.236 15.6785L14.2648 16.8215L20.0547 21.7378L25.7405 16.8177L24.7595 15.683L20.0457 19.7622H20.045Z"
        fill="#2B2B2B"
      />
    </g>
    <defs>
      <clipPath id="clip0_0_1">
        <rect
          width="18"
          height="18"
          fill="white"
          transform="translate(11 11)"
        />
      </clipPath>
    </defs>
  </svg>
);

const MobileIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="20" cy="20" r="20" fill="#FFB400" />
    <g clip-path="url(#clip0_0_1)">
      <path
        d="M15.5 12.5H24.5C24.6989 12.5 24.8897 12.579 25.0303 12.7197C25.171 12.8603 25.25 13.0511 25.25 13.25V26.75C25.25 26.9489 25.171 27.1397 25.0303 27.2803C24.8897 27.421 24.6989 27.5 24.5 27.5H15.5C15.3011 27.5 15.1103 27.421 14.9697 27.2803C14.829 27.1397 14.75 26.9489 14.75 26.75V13.25C14.75 13.0511 14.829 12.8603 14.9697 12.7197C15.1103 12.579 15.3011 12.5 15.5 12.5ZM20 23.75C19.8011 23.75 19.6103 23.829 19.4697 23.9697C19.329 24.1103 19.25 24.3011 19.25 24.5C19.25 24.6989 19.329 24.8897 19.4697 25.0303C19.6103 25.171 19.8011 25.25 20 25.25C20.1989 25.25 20.3897 25.171 20.5303 25.0303C20.671 24.8897 20.75 24.6989 20.75 24.5C20.75 24.3011 20.671 24.1103 20.5303 23.9697C20.3897 23.829 20.1989 23.75 20 23.75Z"
        fill="#2B2B2B"
      />
    </g>
    <defs>
      <clipPath id="clip0_0_1">
        <rect
          width="18"
          height="18"
          fill="white"
          transform="translate(11 11)"
        />
      </clipPath>
    </defs>
  </svg>
);
