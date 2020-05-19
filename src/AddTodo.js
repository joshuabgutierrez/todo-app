import React, { Component } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  margin: 3em auto;
  border: 1px solid green;
  max-width: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  padding: 10px;
  /* & > * {
    margin: 5px 5px 0px 5px;
  } */
`;

const FormElements = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  padding: 5px;
  border-radius: 5px;
  margin: 0.25em 0;
  border: 2px solid teal;
  outline: none;
`;

const AddTodoButton = styled(StyledInput)`
  border: none;
  background-color: teal;
  color: #fff;
  &:hover {
    cursor: pointer;
  }
`;

class AddTodo extends Component {
  state = {
    content: ""
  };

  handleChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: ""
    });
  };

  render() {
    return (
      <div>
        <StyledForm onSubmit={this.handleSubmit}>
          <label>Add new todo</label>
          <FormElements>
            <StyledInput
              type="text"
              onChange={this.handleChange}
              value={this.state.content}
            />
            <AddTodoButton type="submit" value="Add" />
          </FormElements>
        </StyledForm>
      </div>
    );
  }
}

export default AddTodo;
