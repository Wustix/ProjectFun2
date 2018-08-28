// Needs to be added to the html-buttons
// routes
<nav>
<ul>
<!-- creates the route -->
 <% if (user) { % >
<li><a href="/auth/logout">Logout</a></li>
<%} else { %>
<li><a href="/auth/login">Login</a></li>
< %} %>
<li><a href="/">Hompage</a></li>
<li><a href="/profile">Profile</a></li>
 </ul>
 </nav>
 // This is the route we use to login with google
 <main>
<a class="google-btn" href="/auth/google">Google</a>
 </main> 
  