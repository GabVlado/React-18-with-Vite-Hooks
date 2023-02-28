import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";


import { MainApp } from './09-useContext/MainApp';
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterCustomHook } from './01-useState/CounterCustomHook';
// import { FormCustomHook } from './02-useEffect/FormCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { MultipleCustomHooks } from './03-MultiCustomHooks/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { HooksApp } from './HooksApp';
// import { Layout } from './05-useLayout/Layout';
// import { Memorize } from './06-Memos/Memorize';
// import { MemoHook } from './06-Memos/MemoHook';
// import { CallbackHook } from './06-Memos/CallbackHook';
// import { Padre } from './07-TareaMemmo/Padre';
// import './08-useReducer/intro-reducer'
//import { TodoApp } from './08-useReducer/TodoApp';

import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        {/* <React.StrictMode> */}
            <MainApp />
        {/* </React.StrictMode> */}
    </BrowserRouter>
)
