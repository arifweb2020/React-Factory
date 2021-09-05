import React from 'react';
import Mymodal from '../../../components/Modal/Mymodal';

function ReactWeb() {
    return (
        <div>
            <h1>React JS</h1>
            <p>ReactJS is JavaScript library used for building reusable UI components. According to React official documentation, following is the definition −</p>
            <p>React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time. Lots of people use React as the V in MVC. React abstracts away the DOM from you, offering a simpler programming model and better performance. React can also render on the server using Node, and it can power native apps using React Native. React implements one-way reactive data flow, which reduces the boilerplate and is easier to reason about than traditional data binding.</p>
            <Mymodal
                tophedaing="React JS"
                name="React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.">
                <p>React Children props calling</p>
            </Mymodal>
        </div>
    );
}

export default ReactWeb;