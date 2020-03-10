import React from 'react';

class Loader extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <div className="preloader-wrapper big active">
                <div className="spinner-layer spinner-blue-only">
                <div className="circle-clipper left">
                    <div className="circle"></div>
                </div><div className="gap-patch">
                    <div className="circle"></div>
                </div><div className="circle-clipper right">
                    <div className="circle"></div>
                </div>
                </div>
            </div>
        )
    }
}

export default Loader;