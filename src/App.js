import React from 'react'
import Home from 'pages/Home'
import store from 'redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Wrapper from 'pages/Main'
const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Wrapper>
                    <Home />
                </Wrapper>
            </BrowserRouter>
        </Provider>
    )
}
export default App