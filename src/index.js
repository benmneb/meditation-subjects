// @mui/styles is not compatible with React.StrictMode or React 18.
// https://mui.com/system/styles/basics/
// Can re-enable strict mode after styles are fully merged from JSS to Emotion.
// import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'

import { Provider } from 'react-redux'

import { store } from './store'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
	// <StrictMode>
	<Provider store={store}>
		<App />
	</Provider>
	// </StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
