import millify from 'millify';
import React, { useContext } from 'react';
import Context from '../Context/Context';
import {
  numbers,
  number,
  numberDanger,
  numberGood,
  numberTotal,
} from './Numbers.module.scss';
import {
  RiEarthFill,
  RiUserLine,
  RiUserAddLine,
  RiUserFollowLine,
} from 'react-icons/ri';

const Text = ({ figures }) => {
  const { TotalConfirmed, TotalDeaths, TotalRecovered } = figures;
  return (
    <>
      <div className={`${number} ${numberTotal}`}>
        <span>
          <RiUserAddLine />
        </span>
        <span>
          {millify(TotalConfirmed, {
            precision: 0,
          })}
        </span>
      </div>
      <div className={`${number} ${numberGood}`}>
        <span>
          <RiUserFollowLine />
        </span>
        <span>
          {millify(TotalRecovered, {
            precision: 0,
          })}
        </span>
      </div>
      <div className={`${number} ${numberDanger}`}>
        <span>
          <RiUserLine />
        </span>
        <span>
          {millify(TotalDeaths, {
            precision: 0,
          })}
        </span>
      </div>
    </>
  );
};

const Numbers = () => {
  const { corona } = useContext(Context);
  const { Global, Countries } = corona;
  const India = Countries.find((i) => i.CountryCode === 'IN');
  return (
    <nav className={numbers}>
      <div>
        <RiEarthFill />
      </div>
      <Text figures={Global} />
      <div>🇮🇳</div>
      <Text figures={India} />
    </nav>
  );
};

export default Numbers;
