class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {visibility: !prevState.visibility}
        })
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility && <p>Hey. your Content is here.</p>}
            </div>
        )
    }
}

ReactDOM.render(<Toggle />,  document.getElementById('app'))

// const appRoot = document.getElementById('app')    
// let content = false;
// let visibility = false; 

// const toggle = () => {
//    visibility = !visibility;
//    render();
// }

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggle}>{visibility ? 'Hide details' : 'Show details'}</button>
//             {visibility && <p>Hey. your Content is here.</p>}
//         </div>
//     ); 
//     ReactDOM.render(template, appRoot)
// } 

// render()

//const jsx = (
//     <div>
//         <Header />
//         <Action />
//         <Options />
//         <AddOption />
//     </div>
// )