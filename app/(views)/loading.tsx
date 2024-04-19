import styles from './loading.module.sass'

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <>
        <div className={styles.loading_container}></div>
    </>
  }