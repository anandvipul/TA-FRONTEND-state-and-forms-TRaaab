import React from "react";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      date: "",
      file: "",
      readOnlyInput: "",
      disabledInput: "Disabled Input",
      textarea: "",
      textareaDisabled: "TextArea Disabled",
    };
    this.fileInput = React.createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let name = event.target.name;
    console.dir(this.fileInput.current.files[0]);
  };

  handleChange = (event) => {
    event.preventDefault();
    let type = event.target.name;

    if (type !== "file") {
      console.log(`[${event.target.name}]: ${event.target.value}`);
      this.setState((prevState) => {
        return {
          [`${event.target.name}`]: event.target.value,
        };
      });
    } else {
      this.handleSubmit(event);
    }
  };

  render() {
    return (
      <>
        <form>
          <div className="form-item">
            <label htmlFor="text" />
            Text Input
            <input
              type="text"
              id="text"
              name="text"
              value={this.state.text}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-item">
            <label htmlFor="date" />
            Date Input
            <input
              type="date"
              id="date"
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-item">
            <label htmlFor="file" />
            File Input
            <input
              ref={this.fileInput}
              type="file"
              id="file"
              name="file"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-item">
            <label htmlFor="readonly-text" />
            Read-Only input
            <input
              type="text"
              id="readonly-text"
              name="readonly-text"
              value={this.state.readOnlyInput}
              readOnly
              onChange={this.handleChange}
            />
          </div>

          <div className="form-item">
            <label htmlFor="disabled-text" />
            Disabled Input
            <input
              type="text"
              id="disabled-text"
              name="disabled-text"
              value={this.state.disabledInput}
              disabled
              onChange={this.handleChange}
            />
          </div>

          <div className="form-item">
            <label htmlFor="textarea" />
            Textarea
            <textarea
              type="textarea"
              id="textarea"
              name="textarea"
              value={this.state.textArea}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-item">
            <label htmlFor="textarea-disabled" />
            Textarea Disabled
            <textarea
              type="textarea"
              id="textarea-disabled"
              name="textarea-disabled"
              value={this.state.textareaDisabled}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </>
    );
  }
}

export default Container;
