import React from 'react';
import Mymodal from '../../../components/Modal/Mymodal';
import { useHistory } from "react-router-dom";

function ReactNative() {
    let history = useHistory();
    return (
        <div>
            <h1>React Native</h1>
            <p>React Native is a JavaScript framework for building native mobile apps. It uses the React framework and offers large amount of inbuilt components and APIs.</p>
            <p>React Native is like React, but it uses native components instead of web components as building blocks. So to understand the basic structure of a React Native app, you need to understand some of the basic React concepts, like JSX, components, state, and props. If you already know React, you still need to learn some React-Native-specific stuff, like the native components. This tutorial is aimed at all audiences, whether you have React experience or not.</p>
            <button className="btn btn-md btn-warning" onClick={()=>history.push("/faq")}>Faq</button>
            <Mymodal
                tophedaing="React Native"
                name="React Native is an open-source UI software framework created by Facebook, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities."
            />
        </div>
    );
}

export default ReactNative;