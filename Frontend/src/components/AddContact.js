import React from "react";

class AddContact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
        }
        this.add = this.add.bind(this);
    }

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("All The fields are mandatory to fill!");
            return;
        };
        this.props.addContactHandler(this.state);
        this.setState({ name: "", email: "" });
    };


    render() {
        return (
            <div className="ui main">
                <h2 style={{ marginTop: "30px" }}>Add contact</h2>
                <form method="POST" className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                    </div>

                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                    </div>

                    <button className="ui button blue" type="submit">Add</button>
                </form>
            </div >
        )
    };
}

export default AddContact;