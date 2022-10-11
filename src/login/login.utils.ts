export async function getAccessToken(authorizationCode: string) { 
    
  let callbackURL = 'http://localhost:8080/callback';
  fetch({
    url: '',
    method: 'POST',
    body: JSON.stringify({
      authorizationCode: authorizationCode,
    })
  })
//body에 authorizationCode를 실어서 POST요청을 보낸다.
  .then((res: any) => { 
    // this.setState({
    //   isLogin: true,
    //   accessToken: res.data.accessToken
    // });
  })
  .catch((err: any) => {
    console.log(err);
  })
}