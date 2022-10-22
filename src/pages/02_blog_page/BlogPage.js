import React, { useEffect, useState } from 'react'
import Filter from './components/Filter';
import ArticleList from './components/ArticleList';
import { fetchAPI } from '../../ultis/api';
import { Container } from '@mui/material';


export default function BlogPage() {
  const [filter, setFilter] = useState("")
  const [sort, setSort] = useState(null)
  const [articles, setArticles] = useState(null)

  useEffect(() => {
    getArticles()
    return () => {
    }
  }, [])

  const getArticles = async () => {
    await fetchAPI("/articles", {
      populate: '*'
    }).then(result => {
      if (result != null) {
        setArticles(result)
      }
    }).catch(e => {
      throw new Error(e)
    })
  }

  const handleFilterChange = (e) => {
    e.preventDefault()
    setFilter(e.target)
  }

  const handleSortChange = (e) => {
    e.preventDefault()
    setSort(e.target)
  }

  return (
    <Container sx={{ my: 4 }}>
      <Filter
        filter={filter}
        handleFilterChange={handleFilterChange}
        sort={sort}
        handleSortChange={handleSortChange} />
      <ArticleList data={articles} />
    </Container>
  )
}
