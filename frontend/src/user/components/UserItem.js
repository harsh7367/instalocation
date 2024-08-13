import React,{useContext} from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import './UserItem.css';
import { useAuth } from '../../shared/hooks/auth-hook';
import { AuthContext } from '../../shared/context/auth-context';

const UserItem = props => {
  const { userId } = useAuth();
 
  const auth = useContext(AuthContext);

  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${props.id}/places`}>
          <div className="user-item__image">
            <Avatar image={`${process.env.REACT_APP_ASSET_URL}/${props.image}`} alt={props.name} />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}
            </h3>
             
    {auth.isLoggedIn&&props.id===userId && <h3 id ="creator"style={{color: "grey" }}>You</h3>}

          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
