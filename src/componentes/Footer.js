import React from 'react'
import linkedin from 'bootstrap-icons/icons/linkedin.svg'
import github from 'bootstrap-icons/icons/github.svg'
import email from 'bootstrap-icons/icons/envelope-fill.svg'
import whatsapp from 'bootstrap-icons/icons/whatsapp.svg'

const Footer = () => {
    const styles = {
        text: "font-regular text-xs text-gray-700 tracking-wide leading-normal",
       
      };

  return (
    <div className={styles.text + "mx-6 pt-3 pb-4"}>
      <p className="flex flex-col justify-center pt-4 text-center border-t border-gray-200">
        2022 - Tienda de Libros - React - <strong>Desarrollado por Ricardo Fornetti.</strong>
      </p>
      <div className="flex flex-row items-center justify-center pt-1 gap-x-2">
        <a
          href="https://www.linkedin.com/in/ricardofornetti"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="logoLinkedin"
            src={linkedin}
            alt="logo de linkedin"
          ></img>
        </a>
        <a
          href="https://github.com/ricardofornetti"
          target="_blank"
          rel="noreferrer"
        >
          <img className="logoGit" src={github} alt="logo de github"></img>
        </a>
        <a
          href="mailto:ricardofornetti@hotmail.com.ar?Subject=Me%20gustaria%20contactarme%20contigo%20"
          target="_blank"
          rel="noreferrer"
        >
          <img className="logoGit" src={email} alt="logo de e-mail"></img>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5492604404920&text=Me gustaria contactarme contigo para una entrevista de trabajo."
          className="float"
          target="blank"
        >
          <i className="fa fa-whatsapp my-float"></i>
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=5492604404920&text=Me gustaria contactarme contigo para una entrevista de trabajo."
          target="_blank"
          rel="noreferrer"
        >
          <img className="logoGit" src={whatsapp} alt="logo de whatsapp"></img>
        </a>
      </div>
    </div>
  );
}

export default Footer