

const CookiesUtil = {
  get: (name) => {
    if (typeof document !== "undefined") {
      const value = `${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2)
        return parts.pop().split(';').shift();
      else
        return undefined ;
    }else{
      return null;
    }
  },
};

export default CookiesUtil;