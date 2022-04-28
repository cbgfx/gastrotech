export const passwordStrengthScore = (pass) => {
  var score = 0;
  if (!pass) return score;

  // award every unique letter until 5 repetitions
  var letters = {};
  for (var i = 0; i < pass.length; i++) {
    letters[pass[i]] = (letters[pass[i]] || 0) + 1;
    score += 5 / letters[pass[i]];
  }

  // bonus points for mixing it up
  var variations = {
    digits: /\d/.test(pass),
    lower: /[a-z]/.test(pass),
    upper: /[A-Z]/.test(pass),
    nonWords: /\W/.test(pass),
  };

  var variationCount = 0;
  for (var check in variations) {
    variationCount += variations[check] === true ? 1 : 0;
  }
  score += (variationCount - 1) * 10;

  score = parseInt(score);

  return score;
};

/// returns a string evaluation of password strength
export const evalutatePassword = (pass) => {
  let score = passwordStrengthScore(pass);

  if (score > 80) {
    return "Strong";
  }

  if (score > 60) {
    return "Good";
  }

  if (score >= 30) {
    return "Weak";
  }

  if ((score = 0)) {
    return "";
  }

  return "Very Weak";
};

/// saves user object to local storage
export const saveUserInLocalStorage = (user) => {
  //console.log("\n \n \n \n saveUserInLocalStorage --- ", user);
  localStorage.setItem("jwtToken", user.token);
  localStorage.setItem("name", user.name);
  localStorage.setItem("userName", user.username);
  localStorage.setItem("userId", user._id);
};

/// retrieve saved user object from local storage
export const getUserFromLocalStorage = () => {
  return {
    _id: localStorage.userId,
    name: localStorage.name,
    userName: localStorage.userName,
  };
};
