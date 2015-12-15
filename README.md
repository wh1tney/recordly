#RECORDLY

##MVP Stories
- User can save song, artist, and album
- User can view: Songs, Artists, Albums
- User can register/login/logout

##Done
- Seed Angular app
- Setup empty html views: Home, Songs, Artists, Albums
- Add routes for all views and controllers
- Bootstrap made things pretty!
- Make input form work by adding scoped containers (and object) to controllers
- Use directives (ng-model) to bind form input to vars
- Implement scoped function that saves music metadata to arrays
- Firebase backend! Easy.
- App deployed to [Firebase](https://recordly.firebaseapp.com/#/)

##TODO
- Prohibit dupe music entries in Firebase backend
- Complete html views for Songs, Artists, Albums
- Implement “Favorites” action
- Persist data for logged in user in Firebase
- Share data between controllers using Angular services
- Refactor authentication functions (register, login, logout) into single object
- TDD! Don’t yet know how to unit test with Angular :'(

##Best practices
- No superfluous indentation, return chars
- Add comments when useful
- Commit early and often!
- Screenreader classes in BS forms, etc. for accessibility
