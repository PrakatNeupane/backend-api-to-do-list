# Not to do api

This api is grated for not to do application.
Here is the link to front end app ....

## APIS

All the api will be following the `{rootUrl}/api/v1/` format.

"../api/v1/task" resource will provide all task related api

    | #   | Method      | Path    | Description                                                     |
    | --- | ------      | ------- | ----------------------------------------------------------------|
    | 1.  | `GET`       | `/task` | this will return all the task available in the database         |
    | 2.  | `POST`      | `/task` | send task object to api and store in the database               |
    | 3.  | `DELETE`    | `/task` | It expects ID of the task and will delete a task from database  |

"../api/v1/user" resource will provide all user related api

### User API

"../api/v1/user" resource will provide all user related api

    | #   | Method      | Path    | Description                                                     |
    | --- | ------      | ------- | ----------------------------------------------------------------|
    | 1.  | `GET`       | `/user` | this will return either single or all the user available in the database         |
    | 2.  | `POST`      | `/user` | send user object to api and store in the database               |
    | 3.  | `DELETE`    | `/user` | It expects ID of the user and will delete a user from database  |
    | 4.  | `PATCH`    | `/user` | It expects ID of the user and the data to be updated and it will update in DB|
