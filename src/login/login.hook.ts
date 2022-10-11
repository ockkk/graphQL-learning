import { useEffect } from "react";

export function useLogin () {
  const clientId = import.meta.env.VITE_GITHUB_ID;
  const githubLoginUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}`;

  useEffect(() => {
    const url = new URL(window.location.href) 
    const authorizationCode = url.searchParams.get('code') 

  }, [])

  const onOpenGithubLogin = () => {
    window.open(githubLoginUrl);
  }
}