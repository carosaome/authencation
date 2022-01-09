

export const checkEmail = (email)=>{
    if(!email || email.length === 0){
        return "Vui lòng nhập trường này!";
    }
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!regex.test(email)){
        return 'Vui lòng nhập email hợp lệ!!';
    }
    return null;
}

export const confirnPassWord = (pwd, pwdc) =>{
    if(!pwdc || pwdc.length ===0){
        return "Vui lòng nhập trường này!"
    }
    if(pwdc !== pwd){
        return "Mật khẩu không khớp!!"
    }
    return null
}

export const checkPassWord = (pwd)=>{
    if(!pwd || pwd.length === 0  ){
        return "Vui lòng nhập trường này!";
    }
    if(pwd.length < 6  ){
        return "Mất khẩu tối thiểu phải 6 kí tự!!";
    }
    
    return null;
}

export const checkFullName = (name) => {
    if(!name || name.length ===0){
      return  "Vui lòng nhập trường này!"
    }
    return null
}


function removeAscent (str) {
    if (str === null || str === undefined) return str;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    return str;
  }
export const checkAccount = (acc) =>{
    const re = /^[a-zA-Z!@#\$%\^\&*\)\(+=._-]{2,}$/g ;
    if(!acc || acc.length === 0){
      return  "Vui lòng nhập trường này!"
    }

   else if(re.test(removeAscent(acc))){
        return 'Tài khoản không hợp lệ!!'
  }

  return null
    
}