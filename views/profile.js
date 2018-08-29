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
<h1>Welcome to your profile, <%=user.username %></h1>
