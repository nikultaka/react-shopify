export async function  resolve(promise) {
    const resolved = {
      data: null,
      error: null
    };
  
    try {
      resolved.data = await promise;
    } catch(e) {
      //  console.log(e);
       return false
      resolved.error = e;
    }
    // return false

    //console.log(resolved);
    return resolved;
}