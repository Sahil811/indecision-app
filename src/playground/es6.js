class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
          count: 0
        };
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('count')
            const count = parseInt(json, 10)

            if(!isNaN(count)) {
                this.setState(() => ({ count }))
            }
        } catch(e) {

        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            const json = JSON.stringify(this.state.count)
            localStorage.setItem('count' , json)
        }
    }

    handleAddOne() {
       this.setState((prevState) => {
           return {
               count: prevState.count + 1
           }
       })
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
     }

    handleReset() {
        this.setState((prevState) => {
            return {
                count: 0
            }
        })
     }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne} disabled={this.state.count == 0}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

// Counter.defaultProps = {
//     count: 0
// }

ReactDOM.render(<Counter />, document.getElementById('app'));

// console.log('App');

// // JSX - javascript XML

// const app = {
//     title: 'indcision app',
//     subtitle: 'react app',
//     options: ['one','two']
// }
// const template = ( 
//     <div>
//         <h1>{app.title}</h1>
//         {app.subtitle && <p>subtitle: {app.subtitle}</p>}
//         {app.options && app.options.length > 0 ? 
//             <div>
//                 <p>Here are your options</p> 
//                 <ol>
//                     <li>{app.options[0]}</li>
//                     <li>{app.options[1]}</li>
//                 </ol>
//             </div> : undefined} 
//      </div>
//     );

//  let count = 0;
//  const add = () => {
//      count++;
//      renderCounterApp();
//  };
//  const minus = () => {
//     if(count > 0) {
//         count--;
//     }
//     renderCounterApp();
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };
 

// const appRoot = document.getElementById('app')

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={add}>+1</button>
//             <button onClick={minus}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot)
// }

// renderCounterApp();