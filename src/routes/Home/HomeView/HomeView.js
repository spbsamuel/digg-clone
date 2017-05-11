import React from 'react'
import classes from './HomeView.scss'
import TopicForm from '../components/TopicForm'
import TopicListing from '../components/TopicListing'
import NavigationalButtons from '../components/NavigationalButtons'

export const HomeView = () => {
  return (
    <div>
      <TopicForm/>
      <TopicListing/>
      <NavigationalButtons/>
    </div>
  )
};

export default HomeView
