import React, { Component, Fragment } from "react";

class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ["Pizza", "Beer", "Burger"],
        };
    }
    setActive = item => {
        this.setState({ activeItem: item });
    };
    render() {
        const { items, activeItem } = this.state;
        return (
            <Fragment>
                {items.map((item, index) => (
                    <p
                        key={index}
                        style={{ color: activeItem === item ? "red" : "black" }}
                        onClick={() => this.setActive(item)}
                    >
                        {item}
                    </p>
                ))}
            </Fragment>
        );
    }
}

export default Order;
