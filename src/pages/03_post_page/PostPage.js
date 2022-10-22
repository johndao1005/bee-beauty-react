import { Grid, } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { fetchAPI } from '../../ultis/api';
import CommentSection from './components/CommentSection';
import ContentSection from './components/ContentSection';
import IntroSection from './components/IntroSection';
import model from './model';


function PostPage() {
  const [articleDetails, setArticleDetails] = useState(model)
  const { state, pathname } = useLocation();

  useEffect(() => {
    getData()

    return () => {

    }
  }, [])

  const getData = async () => {
    if (!state) {
      const id = +pathname.slice(-1)
      await fetchAPI(`/articles/${id + 1}`).then(data => {
        const article = data?.data.attributes
        setArticleDetails({ ...article })
      })
    } else {
      const article = state?.attributes
      setArticleDetails({ ...article })
    }
  }



  return (
    <Grid item container lg={12} direction='column' sx={{ px: 5, maxWidth: "1600px", py: 2, }}>
      <IntroSection articleDetails={articleDetails} />
      <ContentSection articleDetails={articleDetails} />
      <CommentSection articleDetails={articleDetails} />
    </Grid>
  )
}

export default PostPage