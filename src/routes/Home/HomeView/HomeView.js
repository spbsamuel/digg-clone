import React from 'react'
import classes from './HomeView.scss'
import TopicForm from '../containers/TopicFormContainer'
import TopicListing from '../containers/TopicListingContainer'
import NavigationalButtons from '../containers/NavigationalButtonsContainer'

export const HomeView = ({params:{pageNo=1}}) => {
  return (
    <div>
      <TopicForm/>
      <TopicListing pageNo={pageNo}/>
      <NavigationalButtons pageNo={pageNo}/>
    </div>
  )
};

export default HomeView
