import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '../../../../assets/image';
import { faFacebookF, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('container')}>
        {/* header left */}
        <div className={cx('header-left')}>
          <div className={cx('avatar')}>
            <img className={cx('avatar-img')} src={images.avatar} alt="avatar" />
          </div>
          <div className={cx('profile')}>
            <div className={cx('name')}>Phạm Quốc Hoàng</div>
            <div className={cx('description')}>
              <FontAwesomeIcon icon={faGraduationCap} />
              <span className={cx('description-edu')}>Sinh Viên</span>
            </div>
            <div className={cx('contacts')}>
              {/* facebook */}
              <Tippy className={cx('tippy-facebook')} content="Facebook" delay={150}>
                {/* interactive */}
                <a
                  className={cx('contact-item', 'contact-item-facebook')}
                  href="https://www.facebook.com/quochoang.pham.3701"
                >
                  <FontAwesomeIcon className={cx('facebook')} icon={faFacebookF} />
                </a>
              </Tippy>

              {/* tiktok */}
              <Tippy className={cx('tippy-tiktok')} content="Tiktok" delay={150}>
                <a
                  className={cx('contact-item', 'contact-item-tiktok')}
                  href="https://www.instagram.com/_quochoang.03_/"
                >
                  <FontAwesomeIcon className={cx('tiktok')} icon={faTiktok} />
                </a>
              </Tippy>

              {/* instagram */}
              <Tippy className={cx('tippy-instagram')} content="Instagram" delay={150}>
                <a
                  className={cx('contact-item', 'contact-item-instagram')}
                  href="https://www.instagram.com/_quochoang.03_/"
                >
                  <img className={cx('instagram')} src={images.instagram} alt="instagram" />
                </a>
              </Tippy>

              {/* youtube */}
              <Tippy className={cx('tippy-youtube')} content="Youtube" delay={150}>
                <a className={cx('contact-item', 'contact-item-youtube')} href="https://www.youtube.com/">
                  <FontAwesomeIcon className={cx('youtube')} icon={faYoutube} />
                </a>
              </Tippy>
            </div>
          </div>
        </div>
        <span className={cx('separate')}></span>
        {/* header right */}
        <div className={cx('header-right')}>
          <div className={cx('inner')}>
            {/* email */}
            <div className={cx('email')}>
              <div className={cx('inner-heading')}>EMAIL</div>
              <div className={cx('inner-content')}>quochoang22603@gmail.com</div>
            </div>
            {/* date of birth */}
            <div className={cx('birth')}>
              <div className={cx('inner-heading')}>NGÀY SINH</div>
              <div className={cx('inner-content')}>22/06/2003</div>
            </div>
          </div>
          <div className={cx('inner')}>
            {/* phone */}
            <div className={cx('phone')}>
              <div className={cx('inner-heading')}>SỐ ĐIỆN THOẠI</div>
              <div className={cx('inner-content')}>0971xxx144</div>
            </div>
            {/* hometown */}
            <div className={cx('hometown')}>
              <div className={cx('inner-heading')}>QUÊ HƯƠNG</div>
              <div className={cx('inner-content')}>Quảng Ngãi</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
