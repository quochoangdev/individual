import { useEffect, useState } from 'react';
import { dataSliderHome } from './data';
import classNames from 'classnames/bind';
import styles from './SliderHome.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faCircle, faCrown } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function SliderHome() {
  const [peoples] = useState(dataSliderHome);
  const [countSlide, setCountSlide] = useState(0);

  // Khai báo biến cho dots
  const HandleDots = (indexPeople, countSlide) => {
    useEffect(() => {
      const slidedots = document.querySelectorAll(`.${styles.dotItem}`);
      slidedots &&
        slidedots.forEach((dot, indexDot) => {
          if (indexDot === indexPeople && indexDot === countSlide) {
            document.querySelectorAll(`.${styles.dotItem}.${styles.action}`)[0].classList.remove(styles.action);
            dot.classList.add(styles.action);
          }
        });
    }, [indexPeople, countSlide]);
  };

  useEffect(() => {
    const lastIndex = peoples.length - 1;
    if (countSlide < 0) {
      setCountSlide(lastIndex);
    } else if (countSlide > lastIndex) {
      setCountSlide(0);
    }
  }, [countSlide, peoples]);

  useEffect(() => {
    let slider = setInterval(() => {
      setCountSlide(countSlide + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [countSlide]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        {peoples.map((people, indexPeople) => {
          HandleDots(indexPeople, countSlide);
          let position = 'next-slide';
          if (indexPeople === countSlide) {
            position = 'action-slide';
          } else if (indexPeople === countSlide - 1 || (countSlide === 0 && indexPeople === peoples.length - 1)) {
            position = 'last-slide';
          }
          return (
            <div className={cx('slipPosition', position)} key={people.id}>
              <div className={cx('people-left')}>
                <div className={cx('block-img')}>
                  <FontAwesomeIcon className={cx('people-icon')} icon={faCrown} />
                  <img className={cx('people-img')} src={people.image} alt={people.quote} />
                </div>
              </div>
              <div className={cx('people-right')}>
                <div className={cx('people-quote')}>{people.quote}</div>
                <div className={cx('people-description')}>{people.description}</div>
              </div>
            </div>
          );
        })}
        <button
          className={cx('prev')}
          onClick={() => {
            setCountSlide(countSlide - 1);
          }}
        >
          <FontAwesomeIcon className={cx('prev-icon')} icon={faAngleLeft} />
        </button>
        <button
          className={cx('next')}
          onClick={() => {
            setCountSlide(countSlide + 1);
          }}
        >
          <FontAwesomeIcon className={cx('next-icon')} icon={faAngleRight} />
        </button>
        <div className={cx('slide-dots')}>
          <FontAwesomeIcon className={cx('dotItem', 'action')} icon={faCircle} />
          <FontAwesomeIcon className={cx('dotItem')} icon={faCircle} />
          <FontAwesomeIcon className={cx('dotItem')} icon={faCircle} />
          <FontAwesomeIcon className={cx('dotItem')} icon={faCircle} />
        </div>
      </div>
    </div>
  );
}

export default SliderHome;
