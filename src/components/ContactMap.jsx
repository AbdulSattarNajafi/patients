import React from "react";

const ContactMap = () => {
  return (
    <iframe
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99833.00857607363!2d-121.51295172120759!3d38.561847314823865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809adef99dc7b1a9%3A0x47d9737f645d4bc!2sMercy%20San%20Juan%20Medical%20Center!5e0!3m2!1sen!2sid!4v1667296284867!5m2!1sen!2sid'
      width='100%'
      height='100%'
      style={{ border: "0" }}
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'
    />
  );
};

export default ContactMap;
