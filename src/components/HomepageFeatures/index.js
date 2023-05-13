import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '取英文的形式逻辑',
    Svg: require('@site/static/img/3.svg').default,
    description: (
      <>
       允许中文词语符号添加s、ly、ed等后词缀形成词汇，使用统一规则的形式变化
      </>
    ),
  },
  {
    title: '弃英文的不规则变化',
    Svg: require('@site/static/img/2.svg').default,
    description: (
      <>
        放弃英文为口语发音而产生的单词不规则形式变化，降低使用难度，限于书面表达
      </>
    ),
  },
  {
    title: '追求准确、清晰且有逻辑的表达',
    Svg: require('@site/static/img/1.svg').default,
    description: (
      <>
        保留英文的介词、冠词、代词、连接词、时态、句式等，渐进式提高表达能力
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
