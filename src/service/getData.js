const url = "http://localhost:3333";

export const postData = (user, pass, setToken) => {
  const data = { email: user, password: pass };
  fetch(`${url}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        let err = new Error("HTTP status code" + response.status);
        err.status = response.status;
        throw err;
      }
      return response;
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setToken(data.accessToken);
    })
    .catch((reason) => {
      handleError(reason, setToken);
    });
};

export function getReportsData(setToken) {
  let token = sessionStorage.getItem("token");
  console.log("token in get data", token);
  return fetch(`${url}/api/reports`, {
      method: "GET",
      headers: {
        Authorization: " Bearer " + token,
      },
    })
    .then((response) => {
      if (!response.ok) {
        let err = new Error("HTTP status code" + response.status);
        err.status = response.status;
        throw err;
      }
      return response;
    })
    .then((response) => {
      return response.json();
    })
    .then((reports) => {
      return reports.map((user) => {
        return {
          id: user.id,
          candidateId: user.candidateId,
          candidateName: user.candidateName,
          companyId: user.companyId,
          companyName: user.companyName,
          interviewDate: user.interviewDate,
          phase: user.phase,
          status: user.status,
          note: user.note,
        };
      });
    })
    .catch((reason) => {
      handleError(reason, setToken);
    });
}

export function getUserData(setToken) {
  let token = sessionStorage.getItem("token");
  console.log("token in get data", token);
  return fetch(`${url}/api/candidates`, {
      method: "GET",
      headers: {
        Authorization: " Bearer " + token,
      },
    })
    .then((response) => {
      if (!response.ok) {
        let err = new Error("HTTP status code" + response.status);
        err.status = response.status;
        throw err;
      }
      return response;
    })
    .then((response) => {
      return response.json();
    })
    .then((users) => {
      return users.map((user) => {
        return {
          id: user.id,
          name: user.name,
          birthday: user.birthday,
          email: user.email,
          education: user.education,
        };
      });
    })
    .catch((reason) => {
      handleError(reason, setToken);
    });
}

const handleError = (err, setToken) => {
  console.error(err);
  if (err?.status === 401) {
    alert("Token has expired. Please login again.");
    setToken("");
  } else if (err?.status === 400) {
    alert("Invalid credentials.");
    setToken("");
  } else {
    alert("Server Error:\n" + err.toString());
  }
};