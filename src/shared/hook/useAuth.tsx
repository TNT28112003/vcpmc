import { onAuthStateChanged } from 'firebase/auth';
import { isNull } from 'lodash';
import { useEffect, useState } from 'react';
import { auth } from 'src/firebase/firebase.config';


export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setCurrentUser(user);
        console.log(currentUser);
      } else {
        setCurrentUser(isNull);
      }
    });
  });
  return { currentUser };
};
