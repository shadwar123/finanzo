import React, { useState } from 'react'
import styled from 'styled-components'
// import avatar from '../../img/avatar.png'
import { signout } from '../../utils/Icons'
import { menuItems } from '../../utils/menuItems'
import { FaPencilAlt } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";

function Navigation({ active, setActive }) {

    const [username, setUsername] = useState('Username');
    const [newUsername, setNewUsername] = useState('');
    const { loginWithRedirect } = useAuth0();
    const { isAuthenticated, logout, user } = useAuth0();
    const handleNameChange = () => {
        // Prompt user to input new username
        const inputUsername = prompt('Enter your new username:');
        if (inputUsername !== null) {
            setNewUsername(inputUsername);
        }
    };
    const handleClick = () => {
        // Open the specified link when clicked
        window.open('http://127.0.0.1:5000/', '_blank');
    }
    const handleinvest = () => {
        // Open the specified link when clicked
        window.open('http://127.0.0.1:8080/', '_blank');
    }
    const handlereport = () => {
        // Open the specified link when clicked
        window.open('http://127.0.0.1:5500/chart.html', '_blank');
    }
    const handleplan = () => {
        // Open the specified link when clicked
        window.open('http://127.0.0.1:5000/chat', '_blank');
    }

    // console.log("User",user?.nickname)
    const handleUsernameSubmit = () => {
        if (newUsername.trim() !== '') {
            setUsername(newUsername.trim());
            setNewUsername('');
        }
    };

    return (
        <NavStyled>
            <div className="user-con">
                {/* <img src={avatar} alt="" /> */}
                <div className="text">
                    <h2>
                        {user ? user?.nickname : username}
                        <FaPencilAlt onClick={handleNameChange} style={{ marginLeft: '5px', cursor: 'pointer' }} />
                    </h2>
                    <p>Your Money</p>
                </div>
                {newUsername.trim() !== '' && (
                    <button onClick={handleUsernameSubmit}>Save</button>
                )}
            </div>
            <ul className="menu-items">
                {menuItems.map((item) => {
                    return <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active' : ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
            <ul className="menu-items">
                <li>
                    <button onClick={handleinvest} style={{ backgroundColor: 'transparent',color: 'grey', border: 'none', fontSize: '20px' }}>
                        Investment
                    </button>
                </li>
            </ul>
        
            <ul className="menu-items">
                <li>
                    <button onClick={handlereport} style={{ backgroundColor: 'transparent',color: 'grey', border: 'none', fontSize: '20px' }}>
                       Transaction
                    </button>
                </li>
            </ul>
            <ul className="menu-items">
                <li>
                    <button onClick={handleClick} style={{ backgroundColor: 'transparent', border: 'none', fontSize: '20px' }}>
                        Payment
                    </button>
                </li>
            </ul>
            <ul className="menu-items">
                <li>
                    <button onClick={handleplan} style={{ backgroundColor: 'transparent', border: 'none', fontSize: '20px' }}>
                        Future plan
                    </button>
                </li>
            </ul>
            {isAuthenticated ? (
        <li>
          <button
            onClick={() => logout({ returnTo: window.location.origin })}
            style={logoutButtonStyle}>
            Log Out
          </button>
        </li>
      ) : (
        <li>
          <button onClick={() => loginWithRedirect()} style={loginButtonStyle}>
            Log In
          </button>
        </li>
      )}

        </NavStyled>
    )
}

const loginButtonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    fontWeight: 'bold',
    color: '#888',
    cursor: 'pointer'
  };
  
  const logoutButtonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    fontWeight: 'bold',
    color: '#888',
    cursor: 'pointer'
  };

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 374px;
    height: 100%;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    .user-con{
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }
        h2{
            color: rgba(34, 34, 96, 1);
        }
        p{
            color: rgba(34, 34, 96, .6);
        }
    }

    .menu-items{
        flex: 1;
        display: flex;
        flex-direction: column;
        li{
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: .6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: rgba(34, 34, 96, .6);
            padding-left: 1rem;
            position: relative;
            i{
                color: rgba(34, 34, 96, 0.6);
                font-size: 1.4rem;
                transition: all .4s ease-in-out;
            }
        }
    }

    .active{
        color: rgba(34, 34, 96, 1) !important;
        i{
            color: rgba(34, 34, 96, 1) !important;
        }
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #222260;
            border-radius: 0 10px 10px 0;
        }
    }
`;

export default Navigation