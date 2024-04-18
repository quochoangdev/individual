import classNames from 'classnames/bind';
import styles from './Hobby.module.scss';
import { dataHobbyHeading, dataPlayGames, dataWatchMovies } from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faTelevision } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Hobby() {
  return (
    <div className={cx('wrapper')}>
      <h1 className={cx('wrapper-title')}>Sở Thích</h1>

      {/* content 1 */}
      <div className={cx('block-hobby')}>
        <h2 className={cx('heading')}>
          <div className={cx('block-icon')}>
            <FontAwesomeIcon className={cx('icon')} icon={faGamepad} />
          </div>
          {dataHobbyHeading.playGame}
        </h2>
        {dataPlayGames.map((dataPlayGame) => {
          return (
            <a key={dataPlayGame.id} className={cx('content')} href="https://www.facebook.com/">
              <div className={cx('block-content')}>
                <div className={cx('content-left')}>
                  <img className={cx('img')} src={dataPlayGame.image} alt={dataPlayGame.name} />
                </div>
                <div className={cx('content-right')}>
                  <h3 className={cx('name')}>{dataPlayGame.name}</h3>
                  <p className={cx('description')}>{dataPlayGame.description}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {/* content 2 */}
      <div className={cx('block-hobby')}>
        <h2 className={cx('heading')}>
          <div className={cx('block-icon')}>
            <FontAwesomeIcon className={cx('icon')} icon={faTelevision} />
          </div>
          {dataHobbyHeading.watchMovie}
        </h2>
        {dataWatchMovies.map((dataWatchMovie) => {
          return (
            <a key={dataWatchMovie.id} className={cx('content')} href="https://www.facebook.com/">
              <div className={cx('block-content')}>
                <div className={cx('content-left')}>
                  <img className={cx('img')} src={dataWatchMovie.image} alt={dataWatchMovie.name} />
                </div>
                <div className={cx('content-right')}>
                  <h3 className={cx('name')}>{dataWatchMovie.name}</h3>
                  <p className={cx('description')}>{dataWatchMovie.description}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
export default Hobby;
