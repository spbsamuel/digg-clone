# Digg Clone
Acknowledgements:
@davezuko for react-redux-starter-kit which I used as my base for my personal flavour of this starter kit.

###Objective
We want to create an application that is able to:

1. Maintain a list of topics and its upvotes/downvotes
2. Allow the user to submit a "topic" which is a string of less than 255 char
3. Sort and filter the top 20 topics on the homepage
4. Everything to be stored in memory

### Model Design
#### Topic
* text: string restricted to 255 chars
* uuid: unique identifier to facilitate real time updates
* createdAt: iso timestamp
* upVotes: integer
* downVotes: integer

eg. 

```
{ 
	7d494bad-6ae3-4bfe-8d4f-56564289cf1d: {
		text: 'Some topic',
		createdAt: '2017-05-11T19:35:52.991Z',
		upVotes:3,
		downVotes:1
	},
	...
}
```
* Store to keep collection of topics
* Memoized selectors to derive sort/order of topics
* upVote and downVote to merely be counters since we are not concerned with uniqueness of vote

### Route
####homepage
`/:page`
:page will default to 1 and bring us to lower ranking topics 