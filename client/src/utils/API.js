//front end routes for grabbing data from the API and sending it to the front end
//create a User
export const createUser = (userData) => {
  return fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

//login a user
export const loginUser = (userData) => {
  return fetch("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

//get route for getting all the Applications
export const getApplications = (appData) => {
  return fetch("/api/applications", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(appData),
  });
};

//post route for creating a new Application
export const createApplication = (appData) => {
  return fetch("/api/applications", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(appData),
  });
};

//put route for updating an Application
export const updateApplication = (appData, id) => {
  return fetch("/api/applications", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(appData),
  });
};

//sequelize delete route for deleting an Application by id
export const deleteApplication = (appData, id) => {
  return fetch(`/api/applications/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(appData),
  });
};
