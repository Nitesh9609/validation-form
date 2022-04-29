import './input.style.css'
import React from 'react'
import { connect } from 'react-redux'
class InputComponent extends React.Component{
constructor(){
    super()
    this.state = {
        name:'',
        email:'',
        password:''
    }
}

handleOnChange = (event)=>{
    this.setState({
        [event.target.name]: event.target.value,
      });
}

// handleOnClick = () =>{
//     this.setState = ((state)=>{
//         return{
//             this.state
//         }
//     })
// }


    handleOnClick= (event) => {
    event.preventDefault();
    const emailRegex = RegExp();
    const passwordRegex = RegExp(/^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$/);
    if (
      emailRegex.test(this.state.email) &&
      passwordRegex.test(this.state.password)
    ) {
      const { hide } = this.props;
      hide();
    } else {
      alert("Enter Valid Details");
    }
  };


    render(){
        const { getState } = this.props;
    return(
            <>
                <div className='dive'>
                    <h3>Name:</h3>
                    <input
                        type=''
                        placeholder="Enter Name"
                        onChange={this.handleOnChange}>
                        
                    </input>
                </div>

                <div className='dive'>
                    <h3>Email:</h3>
                    <input
                        type='email'
                        placeholder="Enter Email"
                        onChange={this.handleOnChange}
                    >
                    </input>
                </div>

                <div className='dive'>
                    <h3>Password:</h3>
                    <input
                            type='password'
                            placeholder="Enter Password"
                            onChange={this.handleOnChange}
                        >
                    </input>

                </div>

                <button
                onClick={this.handleOnClick}>
                    Submit
                </button>

                   
            </>
    )
    }
}

const mapStateToProps = (state) => {
    return {
      getState: state.loginState.hidden,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      hide: () => dispatch(hideLoginForm()),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(InputComponent)

