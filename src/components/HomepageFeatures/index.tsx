import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type ModuleItem = {
  title: string;
  tagline: string;
  description: string;
};

const ModuleList: ModuleItem[] = [
  {
    title: '第一模块：权力运作与规则逻辑',
    tagline: '成文规则与非正式路径的双轨博弈',
    description:
      '透视双轨制度的真实流向，寻找规则解释权的掌控者，看懂组织内隐秘的淘汰机制。',
  },
  {
    title: '第二模块：关系网络与资源交换',
    tagline: '人情存折与向上共谋的绑定艺术',
    description:
      '理解人情负债的深度连接价值，辨析建议者与拍板者的鸿沟，建立真正的命运共同体。',
  },
  {
    title: '第三模块：信息差与价值创造',
    tagline: '稀缺卡位与走廊真相对冲工时神话',
    description:
      '破除计件工时幻觉，看懂资产溢价与稀缺牌照的抽水机，避开二手公开信息的层层过滤。',
  },
  {
    title: '第四模块：阶层习性与行为代码',
    tagline: '心智带宽脱敏与隐形符号密码',
    description:
      '清除面对权力与财富的不配得感，掌握圈层识别的微表情与文化暗语，实现真正的平视。',
  },
  {
    title: '第五模块：筹码配置与防御性博弈',
    tagline: '生态位威慑毒丸与替罪羊防火墙',
    description:
      '掌握组织深处不可替代的毒丸生存术，识破高风险套利中被精心定价的替罪羊陷阱。',
  },
  {
    title: '第六模块：灰度空间与制度武器',
    tagline: '抽屉协议对价与合规借刀杀人',
    description:
      '看清阳光白纸背后的抽屉真实对价，透视反腐与审计被用作程序化清除异己的终极屠刀。',
  },
  {
    title: '第七模块：周期跃迁与离场法则',
    tagline: '庄家结构设计与盛宴歇止退场',
    description:
      '突破打工者的积蓄幻觉，学习调动社会资本的庄家结构，掌握在盛宴顶峰体面离场的艺术。',
  },
];

function FeatureCard({title, tagline, description}: ModuleItem) {
  return (
    <div className={clsx('col col--4', styles.cardCol)} style={{marginBottom: '1.5rem'}}>
      <div className="card shadow--md" style={{height: '100%', padding: '1.5rem'}}>
        <div className="card__header" style={{padding: 0}}>
          <Heading as="h3" style={{fontSize: '1.15rem', marginBottom: '0.4rem'}}>
            {title}
          </Heading>
          <p style={{color: 'var(--ifm-color-primary)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.6rem'}}>
            {tagline}
          </p>
        </div>
        <div className="card__body" style={{padding: 0}}>
          <p style={{color: 'var(--ifm-color-emphasis-700)', lineHeight: '1.5', fontSize: '0.9rem', margin: 0}}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features} style={{padding: '3rem 0'}}>
      <div className="container">
        <div className="row">
          {ModuleList.map((props, idx) => (
            <FeatureCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
