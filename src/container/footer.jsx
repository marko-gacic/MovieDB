import React from 'react'



export function FooterContainer() {
    return (
        <div className='Footer'>
        <di className='col-md-10 col-sm-6' style={{color: '#5a606b'}}>
            <h3>ABOUT APPLICATION</h3>
            <p>React Application with Movie DB API created for Vega IT React.js job position.</p>
            <p>React Hooks, React-bootstrap,Bootstrap,Axios,React-bootstrap-carousel,React-rating-starts-component,React-router-dom,React-player.</p>
            <ul className='list-inline'>
                <li className='list-inline-item'>
                    <a href='https://github.com/marko-gacic' style={{fontSize: 35,color: '#f4c10f'}}>
                        <i className='fab fa-github'></i>
                    </a>
                </li>
                <li className='list-inline-item'>
                    <a href='https://www.linkedin.com/in/marko-gacic-359429195/' style={{fontSize: 35, color: '#f4c10f'}}>
                        <i className='fab fa-linkedin ml-3'></i>
                    </a>
                </li>
            </ul>
        </di>
    </div>
    )
}