import React from 'react';
import {Provider} from "react-redux"
import '../styles/global.css';
import {createTheme} from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core";
import { useStore } from "../redux";
import { persistStore } from 'redux-persist'
import "react-datetime/css/react-datetime.css";
import { PersistGate } from 'redux-persist/integration/react'
import { useEffect } from 'react'


const theme = createTheme({
    palette: {
      primary: {
        light: '#fff',
        main: 'rgb(0,170,180)',
        dark: '#00707e'
      },
      secondary: {
        main: '#ffaf33',
      },
      error: {
        main: 'rgb(198,57,59)'
      }
    },
    typography: {
      useNextVariants: 'true',
    },
    overrides: {
      MuiButton: {
        containedPrimary: {
          color: 'white',
        },
      },
      MuiIcon: {
        root: {
          overflow: "visible"
        }
      }
    },
    zIndex: {
      drawer: 1099
    }
  });


const MyApp = ({ Component, pageProps }) => {


    useEffect(() => {
      document.body.style.backgroundColor = "#fafafa";
    }, [])
  
    
    const store = useStore(pageProps.initialReduxState)
    const persistor = persistStore(store, {}, function () {
      persistor.persist()
    })
        return (
            <Provider store={store}>
              <MuiThemeProvider theme={theme} >
                <PersistGate loading={<div>loading</div>} persistor={persistor}>
                    <Component {...pageProps} />
                  </PersistGate>
              </MuiThemeProvider>
            </Provider>
        );
};


export default MyApp;
