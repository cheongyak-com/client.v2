import React from 'react';
import { Divider } from '@/app/_component/common/Divider';
import { Button } from '@/app/_component/common/Button';
import { Tag } from '@/app/_component/common/Tag';
import Open from '@/app/_asset/icon/open.svg';
import styles from './page.module.css';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  console.log('id', id);

  return (
    <div
      className={styles.wrapper}
      style={
        {
          //'--bg-image': `url('${backgroundImage}')`,
        } as React.CSSProperties
      }
    >
      <div className={styles.header}>
        <div className={styles.tags}>
          <Tag color="yellow">오늘발표</Tag>
          <Tag>APT</Tag>
          <Tag>국민</Tag>
          <Tag>경기</Tag>
        </div>
        <h1 className={styles.title}>왕숙 푸르지오 더 퍼스트 1단지 공공분양주택(본청약)</h1>
        <div className={styles.info}>
          <p className={styles.address}>서울특별시 도봉구 창동 662-7번지 외 12필지</p>
          <Divider length="16px" margin="0 4px 0 8px" />
          <Button variant="tertiary" size="small" href="/" target="_blank">
            홈페이지
            <Open width={14} height={14} />
          </Button>
          <Button variant="tertiary" size="small" href="/" target="_blank">
            모집공고문
            <Open width={14} height={14} />
          </Button>
        </div>
      </div>
      <div className={styles.content} style={{ height: '200vh' }}>
        hi~
      </div>
    </div>
  );
}
