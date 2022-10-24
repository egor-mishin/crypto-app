import React from 'react'
import ReactDOM from 'react-dom/client'
import './Styles/index.scss'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Store/store'
import { Auth0Provider } from '@auth0/auth0-react'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
)
root.render(
    <Provider store={store}>
        <Auth0Provider domain={process.env.REACT_APP_AUTH_DOMAIN!} clientId={process.env.REACT_APP_AUTH_CLIENT_ID!} redirectUri={window.location.origin}>
            <BrowserRouter>
                <App />
            </BrowserRouter>,
    </Auth0Provider>
    </Provider>
,
)

