import React from 'react';
 
class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="firstName"
            onChange={event => this.props.handleChange(event)}
            value={this.props.formData.firstName}
          />
          <input
            type="text"
            name="lastName"
            onChange={event => this.props.handleChange(event)}
            value={this.props.formData.lastName} />
        </form>
      </div>
    )
  }
}
 
export default Form;
// class Form extends React.Component {
//   state = {
//     firstName: "John",
//     lastName: "Henry"
//   }

//   // handleFirstNameChange = event => {
//   //   // console.log("The value is", event.target.value)
//   //   this.setState({
//   //     firstName: event.target.value
//   //   })
//   // }

//   // handleLastNameChange = event => {
//   //   this.setState({
//   //     lastName: event.target.value
//   //   })
//   // }
//   handleChange = event => {
//     console.log(event.target.name)
//     this.setState({
//       [event.target.name]: event.target.value
//     })
//   }

//   render() {
//     // console.log("state is", this.state.firstName)
//     return (
//       <form onSubmit={this.handleSubmit} >
//         <input type="text" name="firstName" onChange={this.handleChange} value={this.state.firstName} />
//         <input type="text" name="lastName" onChange={event => this.handleChange(event)} value={this.state.lastName} />
        
//       </form>
//     )
//   }
// }

// export default Form;
