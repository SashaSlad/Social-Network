import React from 'react'
import styles from '../newsItem.module.css'

const AnimalsNews = ({ title, description, url, urlToImage }) => {
	return (
		<div className={styles.news_app}>
			<div className={styles.news_item}>
				<img className={styles.news_img} src={urlToImage} alt={urlToImage} />
				<h3><a href={url}>{title}</a></h3>
				<p>{description}</p>
			</div>
		</div>
	)
}

export default AnimalsNews