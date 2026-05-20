import styles from './LaptopMockup.module.css';

export default function LaptopMockup() {
  return (
    <div className={styles.laptop}>
      <div className={styles.lid}>
        <div className={styles.screen}>
          <div className={styles.toolbar}>
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
          </div>
          <pre className={styles.code}>
            <code>
              <span className={styles.tag}>&lt;html&gt;</span>
              {'\n'}
              {'  '}
              <span className={styles.tag}>&lt;head&gt;</span>
              {'\n'}
              {'    '}
              <span className={styles.tag}>&lt;title&gt;</span>
              Chris Nevyl
              <span className={styles.tag}>&lt;/title&gt;</span>
              {'\n'}
              {'  '}
              <span className={styles.tag}>&lt;/head&gt;</span>
              {'\n'}
              {'  '}
              <span className={styles.tag}>&lt;body&gt;</span>
              {'\n'}
              {'    '}
              <span className={styles.comment}>
                {'// sitio en construcción'}
              </span>
              {'\n'}
              {'    '}
              <span className={styles.keyword}>return</span>{' '}
              <span className={styles.string}>"soon"</span>;
              {'\n'}
              {'  '}
              <span className={styles.tag}>&lt;/body&gt;</span>
              {'\n'}
              <span className={styles.tag}>&lt;/html&gt;</span>
            </code>
          </pre>
        </div>
      </div>
      <div className={styles.base}>
        <div className={styles.trackpad} />
      </div>
    </div>
  );
}
