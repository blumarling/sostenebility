import axios from "axios";
import classNames from "classnames";
import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";
import useAxios from "../../hooks/useAxios";
import H2 from "../typography/H2";
import Paragraph from "../typography/Paragraph";

const WorkWithUsBoxForm = ({
  title,
  titleColor,
  paragraph,
  paragraphColor,
  boxed,
  paddingTop,
  paddingBottom,
}) => {
  const fileInputField = useRef(null);
  const blockClasses = classNames(
    "flex w-full flex-col md:flex-row items-start justify-center py-12",
    {
      "max-w-screen-lg": !!boxed,
      "pt-0": paddingTop === "0",
      "pb-0": paddingBottom === "0",
    }
  );
  const innerBlockClassesLeft = classNames(
    "md:w-1/3 lg:w-1/2 lg:pr-8 xl:pr-8 md:pr-4 px-8 md:py-16 lg:py-16 xl:py-20 p-8 pt-2",
    {
      "pt-6 xl:pt-6 md:pt-6 sm:pt-6": paddingTop === "0",
      "pb-6 xl:pb-6 md:pb-6 sm:pb-6": paddingBottom === "0",
    }
  );
  const innerBlockClassesRight = classNames(
    "md:flex-1 lg:pl-8 xl:pl-8 md:pl-4 px-8 md:py-16 lg:py-16 xl:py-20 p-8 pt-2 flex flex-row flex-wrap",
    {
      "pt-6 xl:pt-6 md:pt-6 sm:pt-6": paddingTop === "0",
      "pb-2 xl:pb-6 md:pb-6 sm:pb-6": paddingBottom === "0",
    }
  );

  const { postData } = useAxios(
    `https://api.sostenibility.it/wp-json/contact-form-7/v1/contact-forms/594/feedback`
  );
  const [formObj, setFormObj] = useState({});
  const sendForm = async () => {
    try {
      const x = new FormData();
      x.append("t-name", formObj["t-name"]);
      x.append("t-email", formObj["t-email"]);
      x.append("t-phone", formObj["t-phone"]);
      x.append("t-message", formObj["t-message"]);
      x.append("t-file", formObj["t-file"]);
      const query = await postData({ params: x });
      alert("messaggio inviato con successo");
      window.location.href = "/";
    } catch (e) {}
  };
  console.log(formObj["t-privacy"]);
  const isButtonAvailable =
    formObj["t-name"] &&
    formObj["t-email"] &&
    formObj["t-message"] &&
    formObj["t-privacy"] &&
    formObj["t-file"] &&
    formObj["t-email"].indexOf("@") > -1 &&
    formObj["t-email"].indexOf(".") > -1;

  return (
    <WorkWithUsBoxFormContainer>
      <div className={blockClasses} id="form">
        <div className={innerBlockClassesLeft}>
          <H2
            color={titleColor}
            className="leading-tight md:leading-tight mb-5"
          >
            {title}
          </H2>
          <Paragraph color={paragraphColor || ""}>
            <span dangerouslySetInnerHTML={{ __html: paragraph }} />
          </Paragraph>
        </div>
        <div className={innerBlockClassesRight}>
          <input
            type="text"
            className="w-full border border-coolGray-400 rounded-md mb-5"
            placeholder="nome"
            onChange={(e) =>
              setFormObj((prev) => ({ ...prev, "t-name": e.target.value }))
            }
          />
          <input
            type="email"
            className="focus:outline-none w-full border border-coolGray-400 rounded-md mb-5"
            onChange={(e) =>
              setFormObj((prev) => ({ ...prev, "t-email": e.target.value }))
            }
            placeholder="email"
          />
          <input
            type="text"
            className="w-full border border-coolGray-400 rounded-md mb-5"
            onChange={(e) =>
              setFormObj((prev) => ({ ...prev, "t-phone": e.target.value }))
            }
            placeholder="telefono"
          />
          {!formObj["t-file"] ? (
            <div
              className={`border font-bold bg-primary-900 text-white mb-5 hover:bg-primary-600 rounded-md py-2 px-10 mt-0 cursor-pointer`}
              onClick={() => fileInputField.current.click()}
            >
              Carica CV
            </div>
          ) : (
            <div
              className={`border font-bold bg-primary-900 text-white mb-5 hover:bg-primary-600 rounded-md py-2 px-10 mt-0 cursor-pointer`}
              onClick={(e) => {
                setFormObj((prev) => ({ ...prev, "t-file": null }));
                fileInputField.current.value = null
              }
                
              }
            >
              {formObj["t-file"].name} - (remove)
            </div>
          )}
          <input
            type="file"
            ref={fileInputField}
            className="w-full border border-coolGray-400 rounded-md mb-5 hidden"
            onChange={(e) =>
              setFormObj((prev) => ({ ...prev, "t-file": e.target.files[0] }))
            }
            placeholder="file"
          />
          <textarea
            className="w-full border border-coolGray-400 rounded-md h-36"
            placeholder="cover letter"
            onChange={(e) =>
              setFormObj((prev) => ({ ...prev, "t-message": e.target.value }))
            }
            style={{ resize: "none" }}
          />
          <div className="flex justify-start items-start mt-5">
            <div className="mx-5 mt-1 ml-0">
              <input
                type="checkbox"
                className=" rounded-md"
                onChange={(e) =>
                  setFormObj((prev) => ({
                    ...prev,
                    "t-privacy": !!e.target.checked,
                  }))
                }
                placeholder="privacy"
              />
            </div>
            <div className="text-sm">
              Ho letto l'informativa sulla privacy e acconsento alla
              memorizzazione dei miei dati, secondo quanto stabilito dal
              regolamento europeo per la protezione dei dati personali n.
              679/2016 (GDPR), per avere informazioni sui servizi di
              sostenibility.it
            </div>
          </div>

          <div
            className={`border font-bold bg-primary-900 text-white hover:bg-primary-600 rounded-md py-2 px-10 mt-5 cursor-pointer ${
              isButtonAvailable ? "" : "opacity-50"
            }`}
            onClick={isButtonAvailable ? sendForm : () => {}}
          >
            Invia
          </div>
        </div>
      </div>
    </WorkWithUsBoxFormContainer>
  );
};

const WorkWithUsBoxFormContainer = styled.div.attrs({
  className: " w-full flex items-center justify-center md:mt-0 bg-white",
})`
  input,
  textarea {
    border: 1px solid #99a3a9 !important;
    &:focus {
      outline-width: 0 !important;
      outline: 0 !important;
      border: 0;
    }
    &:active {
      outline-width: 0 !important;
      border: 0;
      outline: 0 !important;
    }
  }
`;

export default WorkWithUsBoxForm;