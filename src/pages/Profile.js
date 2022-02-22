import React, { Fragment, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser } from 'state/ducks/user/actions';
import ProfileDescription from './components/ProfileDescription';

const Profile = ({ history, match }) => {
  const username = match.params.username;
  const dispatch = useDispatch();
  const { data: user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser(username));
  }, [history]);

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{username} - 1sbc</title>
      </Helmet>
      <div
        className="bg-black text-center"
        style={{ padding: '10px 10px 10px 10px' }}
      >
        <a href="https://1sbc.net" target="_blank">
          <img
            src={process.env.PUBLIC_URL + '/logo.png'}
            style={{ height: '40px' }}
          />
        </a>
      </div>
      {user && user.username === username ? (
        <ProfileDescription history={history} />
      ) : (
        <></>
      )}
    </Fragment>
  );
};

export default Profile;
