//Importing Packages
import React from "react";

//Importing Images
import Logo from '../../Assets/logo.png';
import Head from '../../Assets/Head.png';

//Importing Components
import Aux from "../../Auxiliary/Auxiliary";

//Importing Css
import './home.css';

const Home = (props) => {
    return (
        <Aux>
            <section>
                <section className="outerNavBar">
                    <div className="innerNavBarFirst">
                        <img className="logo" src={Logo} alt="This is logo of our Website"/>
                    </div>
                    <div className="innerNavBarSecond">
                        <div>
                            
                        </div>
                        <div>
                            
                        </div>
                        <div>
                            Home
                        </div>
                        <div onClick={props.userLogin}>
                            User
                        </div>
                        <div onClick={props.goToLoginPage} className="login">
                            Login
                        </div>
                    </div>
                </section>

                <section className="firstSection">
                    <section className="textSection">
                        <h1>We Keep Things Simple</h1>
                        <p>Welcome to findanyworker.com, the new, brilliantly
                        simple way for workers and employers to find each
                        other. Designed for the way we work today.</p>
                        <section className="types">
                            <div>
                                I'm a Student
                            </div>
                            <div>
                                I'm a College
                            </div>
                            <div>
                                I'm a School
                            </div>
                        </section>
                    </section>
                </section>

                <section className="thirdSection">
                    <h1>Who Are We?</h1>
                    <p>We're not middlemen or a conventional recruitment agency. We don't have fancy offices or teams of interviewers.
                    You don't need them, so why pay for them?</p>
                    
                    <p>Instead, we're a platform. Where people looking for work can create a profile, set their skills and availability.
                    It's also a place where employers can post vacancies and look for candidates.</p>
                </section>

                <section className="fourthSection">
                    <img src={Head} alt="Chairman of Abbottabad Board Office"/>
                    <div>
                        <p style={{paddingLeft:"1rem"}}>If you're a worker, it's free to create a profile. When you find a job,
                        you negotiate directly with the employer, with no hidden fees.</p>

                        <p style={{paddingLeft:"1rem"}}>If you're an employer, we're offering 6 months free for you to prove
                        the platform works. You contact candidates directly and interview
                        them yourself. After 6 months you can choose to pay a fee either
                        monthly or annually.</p>
                    </div>
                </section>
            </section>
        </Aux>
    )
}

//Exporting Page
export default Home;