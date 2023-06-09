import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UkraineNews from './UkraineNews'


const UkraineList = () => {
	const [articles, setArticles] = useState([])

	useEffect(() => {
		const getArticles = async () => {
			const response = await axios.get(`https://newsapi.org/v2/everything?q=ukrainewar&apiKey=04eab81cc14746899bd31f7ea301319f`)
			setArticles(response.data.articles)
			// console.log(response)
		}

		getArticles()
	}, [])
	return (
		<div>
			{articles.map(article => {
				return (
					<UkraineNews
						title={article.title}
						description={article.description}
						url={article.url}
						urlToImage={article.urlToImage}
					/>
				)
			})}
		</div>
	)
}

export default UkraineList