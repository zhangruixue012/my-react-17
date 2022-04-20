

export default function (state = null, { type, userInfo }) {
  switch (type) {
    case 'setUserInfo': return userInfo;
    default: return state;
  }
}
