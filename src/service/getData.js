export const url = "http://localhost:3333";

export const postData = (user, pass, setToken, onNotFound) => {
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
      setToken(data.accessToken);
    })
     .catch((reason) => {
      handleError(reason, setToken, onNotFound);
     });
};

export function getReportsData(setToken,token, onNotFound) {
  
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
      handleError(reason, setToken, onNotFound);
    });
}

//delete report

export function deleteReportsData(setToken,token, id, onNotFound) {
  
  console.log("token in get data", token);
  return fetch(`${url}/api/reports/${id}`, {
      method: "DELETE",
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
      return response.status;
    })
    .catch((reason) => {
      handleError(reason, setToken, onNotFound);
    });
}

// All users and single user data

export function getUserData(setToken,token, id = '', onNotFound) {
  
  return fetch(`${url}/api/candidates/${id}`, {
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
      if (id === '') {
      return users.map((user) => {
        return {
          id: user.id,
          name: user.name,
          birthday: user.birthday,
          email: user.email,
          education: user.education,
        };
      });
    }else {
      return users;
    }})
     .catch((reason) => {
       handleError(reason, setToken, onNotFound);
     });
}

export function getCompanyData(setToken,token, onNotFound) {
  
  return fetch(`${url}/api/companies`, {
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
      return reports.map((company) => {
        return {
          id: company.id,
          name: company.name,

        };
      });
    })
    .catch((reason) => {
      handleError(reason, setToken, onNotFound);
    });
}

export const createNewReport = (newReport, setToken, token, setLoading, onNotFound) => {
  const interviewDate = new Date(newReport.interviewDate);
  const data = { ...newReport, interviewDate: interviewDate.toString() };
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  };
  setLoading(true);
  return fetch(`${url}/api/reports`, requestOptions)
    .then((response) => {
      if (!response.ok) {
        let err = new Error("HTTP status code: " + response.status);
        err.response = response;
        err.status = response.status;
        throw err;
      }
      return response;
    })
    .then((response) => response.json())
    .then((data) => {
      setLoading(false);
      alert("Report created successfully.");
      return data;
    })
    .catch((reason) => {
      setLoading(false);
      handleError(reason, setToken, onNotFound);
    });
};

const handleError = (err, setToken, onNotFound) => {
  console.error(err);
  if (err?.status === 401) {
    alert("Token has expired. Please login again.");
    setToken("");
  } else if (err?.status === 400) {
    alert("Invalid credentials.");
    setToken("");
  } else if (err?.status === 404) {
      if (typeof onNotFound === 'function') {
        return onNotFound(err)
      }
      alert('Resource not found');
  } else {
    alert("Server Error:\n" + err.toString());
  }
};