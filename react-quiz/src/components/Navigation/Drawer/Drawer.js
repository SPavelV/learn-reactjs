import React, { Component } from "react";
import classes from "./Drawer.module.css";
import { NavLink } from "react-router-dom";
import Backdrop from "../../UI/Backdrop/Backdrop";

export class Drawer extends Component {
  handleClick = () => {
    this.props.onClose();
  };

  renderLinks(links) {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={link.to}
            exact={link.exact}
            activeClassName={classes.active}
            onClick={this.handleClick}
          >
            {link.label}
          </NavLink>
        </li>
      );
    });
  }

  render() {
    const cls = [classes.Drawer];
    if (!this.props.isOpen) {
      cls.push(classes.close);
    }

    const links = [
      {
        to: "/",
        label: "Список",
        exact: true,
      },
    ];

    if (this.props.isAuthenticated) {
      links.push({
        to: "/quiz-creator",
        label: "Создать тест",
        exact: false,
      });
      links.push({
        to: "/logout",
        label: "Выйти",
        exact: false,
      });
    } else {
      links.push({
        to: "/auth",
        label: "Авторизация",
        exact: false,
      });
    }

    return (
      <>
        <nav className={cls.join(" ")}>
          <ul>{this.renderLinks(links)}</ul>
        </nav>
        {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
      </>
    );
  }
}

export default Drawer;
