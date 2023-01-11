import * as React from 'react';
import { FC } from 'react';

export const Subscribe: FC = () => {

  return (
    <section className="subscribe-telegram">
      <div className="subscribe-telegram__icon-title-wrapper">
        <div>
          <div className="subscribe-telegram__title">
            Subscribe to our Telegram chanel
          </div>

          <div className="subscribe-telegram__subtitle">
            Only the most important in the world of medicine
          </div>
        </div>
      </div>

      <a
        className="subscribe-telegram__button-open link"
        href="https://t.me/medpresso"
        target={"_blank"}
        rel="noreferrer"
      >
        <div className="subscribe-telegram__button-open-title">
          Subscribe
        </div>
      </a>
    </section>
  );
};
