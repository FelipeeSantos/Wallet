import React from 'react';

import { ContainerMessageBox, CardMessageBox } from "./Styles-MessageWalletBox";

interface IMessageWalletBox {
  title: string;
  description: string;
  footerText: string;
  icon: string;
}

const MessageWalletBox:React.FC<IMessageWalletBox> = ({ title, description, footerText, icon, children }) => {
  return (
    <ContainerMessageBox>
      <CardMessageBox>
        <h1>
          {title}
          <img  src={icon} alt="Emojis" />
        </h1>
        <p> {description} </p>
        <div>
          <span>{footerText} !!!</span>
        </div>
      </CardMessageBox>
      {
        children
      }
    </ContainerMessageBox>
  );
};

export default MessageWalletBox;
