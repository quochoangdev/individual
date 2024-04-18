import classNames from 'classnames/bind';
import styles from './Slidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBullseye, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

// hàm xử lý action
const HandleActionSlide = () => {
  useEffect(() => {
    const tabs = document.querySelectorAll(`.${styles.linkItem}`);
    tabs &&
      tabs.forEach((tab) => {
        tab.onclick = () => {
          HandleAddClassAction(tab);
        };
      });
  });
};

// hàm xử lý onclick action
const HandleAddClassAction = (tab) => {
  document.querySelectorAll(`.${styles.linkItem}.${styles.action}`)[0].classList.remove(styles.action);
  tab.classList.add(styles.action);
};

function Slidebar() {
  HandleActionSlide();
  return (
    <div className={cx('wrapper')}>
      <div className={cx('link')}>
        <Link className={cx('link-home', 'linkItem', 'action')} to={'/'}>
          <FontAwesomeIcon className={cx('icon')} icon={faUser} />
          <span className={cx('description')}>BẢN THÂN</span>
        </Link>
      </div>
      <div className={cx('link')}>
        <Link className={cx('link-education', 'linkItem')} to={'/education'}>
          <FontAwesomeIcon className={cx('icon')} icon={faBook} />
          <span className={cx('description')}>HỌC VẤN</span>
        </Link>
      </div>
      <div className={cx('link')}>
        <Link className={cx('link-target', 'linkItem')} to={'/target'}>
          <FontAwesomeIcon className={cx('icon')} icon={faBullseye} />
          <span className={cx('description')}>MỤC TIÊU</span>
        </Link>
      </div>
      <div className={cx('link')}>
        <Link className={cx('link-hobby', 'linkItem')} to={'/hobby'}>
          <FontAwesomeIcon className={cx('icon')} icon={faHeart} />
          <span className={cx('description')}>SỞ THÍCH</span>
        </Link>
      </div>
    </div>
  );
}

export default Slidebar;
