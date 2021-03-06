import styles from './Answer.module.scss'

const Answer = ({ isScored, question }) => {
  return (
    <div className={styles.container}>
      <p className={styles.sign}>{isScored ? '+' : '-'}</p>
      <p className={styles.question} dangerouslySetInnerHTML={{ __html: question }} />
    </div>
  )
}

export default Answer
