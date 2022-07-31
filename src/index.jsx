import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import './index.css'
import { App } from './App'
import reportWebVitals from './reportWebVitals'

import { store } from './store'

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
})

const root = document.getElementById('root')
render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ApolloProvider>
  </Provider>
  , root
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
