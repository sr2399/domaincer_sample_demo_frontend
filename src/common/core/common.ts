export const checkStatus = async (response: any) => {
  // console.log('response checkStatus: ', response);
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    // let responseClone = response.clone();
    let r: any = {
      type: response.type,
      url: response.url,
      redirected: response.redirected,
      status: response.status,
      ok: response.ok,
      statusText: response.statusText,
      headers: response.headers,
      body: response.body,
      bodyUsed: response.bodyUsed,
    };
    const data = await response.json().then((json: any) => {
      return json;
    }).catch((err: any) => {
      // console.log('checkStatus error response', r);
      return null;
    });

    r['data'] = data;
    return Promise.reject(r);
  }
};

export const parseJSON = (response: any) => {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
};

export const parseText = (response: any) => {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.text();
};

export const handleError = (error: any) => {
  error.response = {
    status: 0,
    statusText: 'Cannot connect'
  };
  throw error;
};

