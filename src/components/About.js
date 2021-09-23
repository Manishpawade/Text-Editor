import React, { useState } from 'react'


export default function About() {

    const [mystyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const [btntext, setBtntext] = useState("Dark  Mode")

    const togglestyle = () => {
        if (mystyle.color === 'black') {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',

            })
            setBtntext("Light Mode")
        }
        else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white',

            })
            setBtntext('Dark Mode')
        }
    }

    return (
        <div className="container  " style={mystyle}>
            <h1 className="my-3">About </h1>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            About Text-Editor
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            <strong>Text-Editor is designed using <strong> <code> React Js </code> </strong>  which is a single page application .</strong> The idea of designing these kind of application was to deliver text utils which are required in day to day life in the world of Electronics Devices .
                            In these application user can edit it text into text action such as 
                           <li>UpperCase </li>
                           <li>LowerCase </li>
                           <li>Remove Space</li>
                           <li>Copy</li>
                           And even dark mode and light mode is also provided.
                           
                        </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            My Introduction
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            <strong>Hello ! My name is <strong><code >MANISH SANTOSH PAWADE </code></strong></strong>. I had completed my certifcation in Java Full Stack Development at <a  href="http://www.codekul.com/">CODEKUL PUNE</a> .
                            <p>I am familiar with technologies such as 
                                <li>Front-End : Html , Css , JavaScript , React Js</li>
                         <li>Back-End  : Core Java , Spring Boot , github , postman api ,Mysql </li>
                         I had completed my graduation in BE form (Sant Gadge Baba Amravati University) in 2020. 
                                
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                           Other Projects
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            <strong> <ol><li> Gym Fitness Website</li></ol>  </strong>
                            <p> It is an dynamic demo website designed using pure html , css , javascript . As user point he would find all the important and essentials information which a person searches in the gym such as equipments ,gym trainers , space and many more .  
                                It's not completly ready to deploy but designing part is almost done  which I would like to showcase through source
                             </p>
                             <a href="https://github.com/Manishpawade/Gym-Project">Source Code</a>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <button type="button" onClick={togglestyle} className='btn btn-success '>{btntext}</button>
            </div>
        </div>
    )
}