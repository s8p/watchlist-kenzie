# WatchList

Watchlist is the app you need to help you keep track of all the shows
and movies you love and want to watch!

## API being used
### TMDB
[Docs](https://developers.themoviedb.org/3/getting-started/introduction)

### JSON Server
Base URL: https://watchlist-fake-api.herokuapp.com


| Endpoint                        | Method   | Description                     | Require Authetication |
|---------------------------------|----------|---------------------------------|-----------------------|
| /register                       | `POST`   | Register new user               | `False`               |
| /login                          | `POST`   | Authenticate user               | `False`               |
| /watchList                      | `POST`   | Add tv show to user's lsit      | `True`                |
| /watchList                      | `DELETE` | Remove tv show from user's list | `True`                |

