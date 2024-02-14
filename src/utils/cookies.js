const setCookie=(token)=>{
    console.log(token)
    document.cookie=`accessToken=${token.accessToken}; max-age=${1*24*60*60}`;
    document.cookie=`refreshToken=${token.refreshToken}; max-age=${3*24*60*60}`;
}
const getCookie=(tokenName)=>{
   return document.cookie.split(";").find((token)=>token
    .trim().split("=")[0]===tokenName)?.split("=")[1];
}
export  {setCookie,getCookie};