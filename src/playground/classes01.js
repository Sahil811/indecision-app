// class Person {
//     constructor(name = 'SAHIL', age = 0) {
//         this.name = name;
//         this.age = age;
//     }
//     getGreeting() {
//         //return 'Hi I am ' + this.name + '!';
//         return `Hi I am ${this.name}!`;
//     }
//     getDescription() {
//         return `${this.name} is ${this.age} year(s) old.`
//     }
// }

// class Student extends Person {
//     constructor(name, age, major) {
//         super(name, age);
//         this.major = major;
//     }
//     hasMajor() {
//         return !!this.major;
//     }
//     getDescription() {
//         let description =super.getDescription();

//         if(this.hasMajor()) {
//             description += ` Their major is ${this.major}.`;
//         }
        
//         return description
//     }
// }

// class Traveler extends Person {
//     constructor(name, age, major, location){
//        super(name, age, major);
//        this.location = location;
//     }   
   
//     getDescription() {
//         let description = super.getDescription();

//         if(this.location) {
//             description += ` I'm visiting from ${this.location}.`;
//         }
//         return description;
//     }
// }

// const me = new Traveler('Sahil' , 25 , 'ME', 'tokyo');
// console.log(me.getDescription());

// const other = new Traveler();
// console.log(other.getDescription());


console.log('App');

// JSX - javascript XML

const app = {
    title: 'indecision app',
    subtitle: 'react app',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }  
}


const removeAll = () => {
    app.options = [];
    render();  
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option)
};

const appRoot = document.getElementById('app')    

const render = () => {
    
const template = ( 
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>subtitle: {app.subtitle}</p>} 
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p> 
        <button disabled={app.options.length === 0 } onClick={onMakeDecision}>What should I do?</button>
        <button onClick={removeAll}>Remove All</button>
        <ol>
            {app.options.map((el) => <li key={Math.random()}>{el}</li>)}
        </ol>
        <form onSubmit={onFormSubmit}>
          <input type="text" name="option"></input>
          <button>Add Option</button>
        </form>
     </div>
    );
    ReactDOM.render(template, appRoot)
}

render();